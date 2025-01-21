export default function Step({ curstep, step }) {
  return (
    // <div className="step">
    //   <div className={`step-num ${step === curstep ? "active" : ""} `}>
    //     {curstep}
    //   </div>

    //   <div className="step-info ">
    //     <p>STEP {curstep}</p>
    //     <h4>{curstep === 1 && "Your Info"}</h4>
    //     <h4>{curstep === 2 && "Payment Method"}</h4>
    //     <h4>{curstep === 3 && "Enter OTP"}</h4>
    //     <h4>{curstep === 4 && "Confirm"}</h4>
    //     <h4>{curstep === 5 && "Completed"}</h4>
    //   </div>
    // </div>

    <div className="flex flex-row items-center justify-start md:ml-10 gap-2 md:mt-6 w-full">
      <div
        className={`rounded-full w-10 h-10 border border-white flex items-center justify-center ${
          step === curstep ? "active text-black" : "text-white"
        } `}
      >
        {curstep}
      </div>

      <div className="md:flex flex-col items-start justify-start ml-2 hidden ">
        <p>STEP {curstep}</p>
        <h4 className="font-bold">{curstep === 1 && "Your Info"}</h4>
        <h4 className="font-bold">{curstep === 2 && "Payment Method"}</h4>
        <h4 className="font-bold">{curstep === 3 && "Enter OTP"}</h4>
        <h4 className="font-bold">{curstep === 4 && "Confirm"}</h4>
        <h4 className="font-bold">{curstep === 5 && "Completed"}</h4>
      </div>
    </div>
  );
}
