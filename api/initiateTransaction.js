// api/initiateTransaction.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

  // Handle preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // End preflight request
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phoneNumber, walletType } = req.body;
  if (!phoneNumber || !walletType) {
    return res.status(400).json({ error: 'Phone number and wallet type are required' });
  }

  const msisdn = phoneNumber;

  // Define operatorId based on the selected wallet type
  const operatorId = walletType === 'Jazzcash' ? '100008' : '100007'; // Jazzcash or Easypaisa


// supabase==========================
// Check if the user exists in the subscriptions table
// Check if the user exists in the subscriptions table
  const { data, error: findError } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('phone_number', msisdn);

  if (findError) {
    return res.status(500).json({ error: findError });
  }

  const existingUser = data && data.length > 0 ? data[0] : null;

  if (existingUser) {
    // User exists, check if the selected wallet type is different
    if (existingUser.selectedwallet !== walletType) {
      // Update the selected wallet type if it's different
      const { error: updateError } = await supabase
        .from('subscriptions')
        .update({ selectedwallet: walletType })
        .eq('phone_number', msisdn);

      if (updateError) {
        console.log(updateError)
        return res.status(500).json({ error: 'Failed to update wallet type' });
      }
    }
  } else {
    // User does not exist, create a new record
    const { error: insertError } = await supabase
      .from('subscriptions')
      .insert([
        {
          name,
          email,
          phone_number: msisdn,
          selectedwallet: walletType,
          timestamp: new Date().toISOString(),
          status: 'inactive', // default status
          recharge_token: null, // add the recharge token as needed
        },
      ]);

    if (insertError) {
      console.log(insertError)
      return res.status(500).json({ error: 'Failed to create new user' });
    }
  }
// supabse =========================
  const payload = {
    merchantId: "2000841",
    operatorId,
    transactionType: "9",
    productId: "1826", //1829 for test rs3   and 1826 for live 
    msisdn,
    productReference: "testing",
    userKey: "12345"
  };

  try {
    const response = await fetch('https://api.sajawal.school/v2/wallets/transaction/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
     
      return res.status(response.status).json({ error: errorData.message });
    }

    const data = await response.json();
    console.log("Simpaisa Response " , {data})
     if (data.status === "0000"){
         res.status(200).json({success:true,transactionId:data?.transactionId,message:data?.message});
     }
     else{
       res.status(500).json({success:false,transactionId:data?.transactionId,message:data?.message});
     }
   
  } catch (error) {
    res.status(500).json({ error: 'Transaction initiation failed' });
  }
}
