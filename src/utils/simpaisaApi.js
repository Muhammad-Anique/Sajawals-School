// simpaisaApi.js

// Function to initiate a transaction
export async function initiateTransaction({ name, email, phoneNumber, walletType }) {
    console.log("Data recieved", name,email,phoneNumber,walletType)
  try {
    const response = await fetch('https://checkout.sajawal.school/api/initiateTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber, walletType }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return ({message:errorData.message || 'Failed to initiate transaction',success:false});
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error initiating transaction:', error);
    throw error;
  }
}

export async function initiateSafepay(email) {
    try {
      const response = await fetch("https://checkout.sajawal.school/api/initiateSafepay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerReference: email, // Replace with dynamic email if needed
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        return ({status:true,url:data?.url}) 
      } else {
        return ({status:false,message:"Failed "})
      }
    } catch (err) {
      return ({status:false,message:"Failed "})
    }
  };

// Function to verify OTP
export async function verifyOTP({ phoneNumber, otp, walletType }) {
  try {
    const response = await fetch('https://checkout.sajawal.school/api/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, otp, walletType }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return ({message:errorData.message || 'Failed to Verify OTP !',success:false});
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
}
