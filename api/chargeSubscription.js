// api/triggerSimpaisa.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Set your custom security token here (placeholder)
const SECURITY_TOKEN = "YOUR_RANDOM_SECURITY_TOKEN";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { mobileNumber } = req.body;
  const { authorization } = req.headers;

  // Check for security header
  if (authorization !== SECURITY_TOKEN) {
    return res.status(403).json({ error: 'Unauthorized request' });
  }

  // Retrieve user from subscriptions table
  const { data, error: findError } = await supabase
    .from('subscriptions')
    .select('sourceid')
    .eq('phone_number', mobileNumber)
    .single();

  if (findError || !data) {
    return res.status(404).json({ error: 'User not found or no sourceId available' });
  }

  const { sourceid } = data;

  // Simpaisa direct-payment URL and request body
  const simpaisaUrl = 'https://api.sajawal.school/v2/wallets/transaction/direct-payment';
  const simpaisaPayload = {
    merchantId: "2000841",
    operatorId: "100007",
    transactionType: "9",
    productId: "1826",
    userKey: "12345",
    sourceId:sourceid
  };

  try {
    const response = await fetch(simpaisaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(simpaisaPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message });
    }

    const responseData = await response.json();
    console.log(responseData)
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error sending request to Simpaisa:', error);
    res.status(500).json({ error: 'Failed to trigger Simpaisa request' });
  }
}
