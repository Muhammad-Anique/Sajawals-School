// api/webhook.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  const requestData = {
    method: req.method,
    headers: JSON.stringify(req.headers),
    body: req.body ? JSON.stringify(req.body) : null,
    source: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    timestamp: new Date().toISOString()
  };

  // Insert request data into Supabase table for logging
  const { error: logError } = await supabase
    .from('request_logs')
    .insert([{
      method: requestData.method,
      headers: requestData.headers,
      body: requestData.body,
      source: requestData.source,
      timestamp: requestData.timestamp
    }]);

  if (logError) {
    console.error('Error saving request details:', logError);
    return res.status(500).json({ error: 'Failed to log the webhook, something went wrong!' });
  }

  // Parse webhook body for status, msisdn (phone number), and sourceId
  const { status, msisdn, sourceId } = req.body;

  if (!msisdn || !status) {
    return res.status(400).json({ error: 'Invalid webhook payload' });
  }

  // Determine new status and prepare update data
  const newStatus = status === '0000' ? 'active' : 'inactive';
  const updateData = {};
   

  // Include sourceId only for successful transactions
  if (status === '0000' && sourceId) {
    updateData.sourceid = sourceId;
    updateData.status = 'active';
  }

  // Update user status in subscriptions table based on webhook status
  const { error: updateError } = await supabase
    .from('subscriptions')
    .update(updateData)
    .eq('phone_number', msisdn);

  if (updateError) {
    console.error('Error updating user status:', updateError);
    return res.status(500).json({ error: 'Failed to update user status' });
  }

  res.status(200).json({ message: 'Webhook Logged Successfully!' });
}
