
import React, { useState,useEffect } from 'react';
import OtpInput from 'react-otp-input';

const  ThankYou =({otpValue,setOTPValue,handleResend,timeLeft,setTimeLeft}) => {
  
     useEffect(() => {
    if (timeLeft <= 0) {
      // alert('Time is up!');
      
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);
  return <div className="otp">
    
    <div className='otpContainer'>
        <OtpInput
        inputType='tel'
      value={otpValue}
      onChange={setOTPValue}
      numInputs={4}
      shouldAutoFocus
      inputStyle={{fontSize:'20px',width:'20px'}}
      renderSeparator={<span style={{marginLeft:'10px',marginRight:'10px'}}>-</span>}
      renderInput={(props) => <input {...props} />}
      
    />
    <br/>
   
    </div>
    <div className='resendContainer'>
      
         <p style={{marginLeft:'auto',marginRight:'auto'}}>Haven't Recieved the OTP ? <button className={`${timeLeft>0?'resendDisabled':''}`} disabled={timeLeft > 0} onClick={()=> timeLeft<=0 ? handleResend() :''}>Resend {timeLeft >0 && (<>({timeLeft}s)</>)} </button> </p>
    </div>
    
    
    

  </div>
}

export default ThankYou