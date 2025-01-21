import { Safepay } from '@sfpy/node-sdk'

// Initialize Safepay with your credentials


const safepay = new Safepay({
  environment:'production',
  apiKey: process.env.SAFEPAY_API_KEY,
  v1Secret: process.env.SAFEPAY_V1_SECRET,
  webhookSecret: process.env.SAFEPAY_WEBHOOK_SECRET
})

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

  const { customerReference } = req.body;

  // Validate input parameters
  if ( !customerReference) {
    return res.status(400).json({
      error: 'Plan ID, customer reference, and start date are required.',
    });
  }

  try {
    // Call Safepay API to create a subscription
   safepay.checkout
  .createSubscription({
    cancelUrl: "https://sajawal.school/checkout/",
    redirectUrl: 'https://sajawal.school/thank-you/',
    planId: process.env.SAFEPAY_PLAN_ID,
    reference: customerReference
  })
  .then(url => {
    console.log(url);
    return res.status(200).json({
        url,success:true
    })
    
  })
  .catch(error => {
    console.error(error)
  })

// redirect user to `url`
  } catch (error) {
    console.error('Error creating subscription:', error);
    return res.status(500).json({
      error: 'Failed to create subscription',
      details: error.message || 'An error occurred',
    });
  }
}
