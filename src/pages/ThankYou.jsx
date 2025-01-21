import React , {useState,useEffect}from "react"

export default function ThankYou() {

  const redirectParentWindow =(url) => {
    window.parent.postMessage({ type: 'REDIRECT', url }, '*');
    console.log("Redirected User  to Thankyou Page ")
 }
  useEffect(()=>{
    //  window.open('https://sajawal.school/thank-you', '_blank');
    window.location.href="https://sajawal.school/thank-you"
    // redirectParentWindow("https://sajawal.school/thank-you")
  },[])
  return <div className="thankyou">
    <img src="/images/icon-thank-you.svg" alt="" />
    <h2>Thank you!</h2>
    <p>Thanks for confirming your subscription! we hope you have fun using our paltform. if you ever need support, please feel free to email us at Hello@Sajawal.School </p>
  </div>
}