// api/verifyOTP.js

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

  const { phoneNumber, otp, walletType } = req.body;
  if (!phoneNumber || !otp || !walletType) {
    return res.status(400).json({ error: 'Phone number, OTP, and wallet type are required' });
  }

  const msisdn = phoneNumber;
  const operatorId = walletType === 'Jazzcash' ? '100008' : '100007'; // Jazzcash or Easypaisa

  const payload = {
    merchantId: "2000841",
    operatorId,
    transactionType: "9",
    productId: "1826",
    msisdn,
    productReference: "testing",
    userKey: "12345",
    otp
  };

  try {
    const response = await fetch('https://api.sajawal.school/v2/wallets/transaction/verify', {
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
    console.log("OTP Verificatio SImresponse",data)
     if (data.status === "0000"){
         res.status(200).json({success:true,transactionId:data?.transactionId,message:data?.message});
     }
     else{
       res.status(500).json({success:false,transactionId:data?.transactionId,message:data?.message});
     }
    
  } catch (error) {
    res.status(500).json({ error: 'OTP verification failed' });
  }
}
