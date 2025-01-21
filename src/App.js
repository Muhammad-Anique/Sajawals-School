import { useState, useEffect } from "react";
import "./index.css";
import { data } from "./data";
import { plans } from "./plans";
import { PickAddOnsList } from "./PickAddOnsList";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Step from "./components/Step";
import Button from "./components/Button";
import Header from "./components/Header";
import ThankYou from "./pages/ThankYou";
import Summary from "./pages/Summary";
import PickAddOns from "./pages/PickAddOns";
import SelectYourPlan from "./pages/SelectYourPlan";
import PersonalInfoForm from "./pages/PersonalInfoForm";
import EnterOTP from "./pages/EnterOTP";
import Swal from "sweetalert2";
import Loader from "./components/Loader";

import StepWiseGuide from "./sections/StepWiseGuide";
import DiscountBanner from "./sections/DiscountBanner";
import Plans from "./sections/Plans";
import Testimonials from "./sections/Testimonials";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
// or via CommonJS

//safepay

import {
  initiateTransaction,
  verifyOTP,
  initiateSafepay,
} from "../src/utils/simpaisaApi";
// App component
export default function App() {
  return (
    <>
      <div className="mt-[100px] flex flex-col items-center justify-center gap-10">
        <Navbar />
        <StepWiseGuide />
        <DiscountBanner />
      </div>
      <div className="relative">
        <Form />
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Plans />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

const Form = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [AddOnsList, setAddOnsList] = useState(PickAddOnsList);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpValue, setOTPValue] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const redirectParentWindow = (url) => {
    window.parent.postMessage({ type: "REDIRECT", url }, "*");
    console.log("Redirected User  to Safepay Checkout Page ");
  };

  // useEffect(() => {
  //   if (isLoading) {
  //     Swal.fire({
  //       title: 'Processing ...',
  //       text: 'Please wait',
  //       allowOutsideClick: false,
  //       allowEscapeKey: false,
  //       showConfirmButton: false,
  //       willOpen: () => {
  //         Swal.showLoading();
  //       }
  //     });
  //   } else {
  //     Swal.close();
  //   }
  // }, [isLoading]);

  function getFormattedPhoneNumber(str) {
    // Remove spaces and dashes
    const cleanedStr = str.replace(/[\s-]/g, "");

    // Get the last 10 characters
    if (cleanedStr.length >= 10) {
      return cleanedStr.slice(-10);
    } else {
      // If the cleaned string has less than 10 characters, return the whole string
      return cleanedStr;
    }
  }

  async function handleInitiateTransaction() {
    setTimeLeft(30);
    try {
      setIsLoading(true);
      const data = await initiateTransaction({
        name: name,
        email: email,
        phoneNumber: getFormattedPhoneNumber(phoneNumber),
        walletType: selectedPlan, // or "Jazzcash" for future
      });

      return { success: data.success, message: data.message };
    } catch (error) {
      // console.log("Error Initiated",error.message)
      return {
        success: false.success,
        message: error.message || "Something Went Wrong , Please Try Again ! ",
      };
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyOTP() {
    try {
      const data = await verifyOTP({
        phoneNumber: getFormattedPhoneNumber(phoneNumber),
        otp: otpValue,
        walletType: selectedPlan,
      });
      return { success: data.success, message: data.message };
    } catch (error) {
      return {
        success: false.success,
        message: error.message || "Something Went Wrong , Please Try Again ! ",
      };
    }
  }
  const handleNext = async (e) => {
    if (step === 1) {
      if (name === "" || email === "" || phoneNumber === "") {
        // Display an error message or perform other actions for failed validation
        Swal.fire({
          title: "Fill Out all fields !",
          text: "Please enter correct information in all fields to continue.",
          icon: "warning",
        });
        return; // Prevent moving to the next step
      }

      if (phoneNumber.length < 10) {
        Swal.fire({
          title: "Invalid Phone Number",
          text: "Please enter correct phone number to continue",
          icon: "warning",
        });
        return; // Prevent moving to the next step
      }
    }

    if (step === 2) {
      if (!selectedPlan) {
        // Display an error message or perform other actions for failed validation
        Swal.fire({
          title: "Choose Wallet !",
          text: "Please choose payment method to continue ! ",
          icon: "warning",
        });
        return; // Prevent moving to the next step
      }
      setIsLoading(true);

      // alert(selectedPlan)
      if (selectedPlan === "Card Payments") {
        // window.location.href = "https://www.skool.com/sajawal-school/about"
        // window.open('https://www.skool.com/sajawal-school/about', '_blank');
        const response = await initiateSafepay(email);
        console.log("Safepay Response", response);
        if (response.status) {
          // window.open(response.url, '_blank');
          window.location.href = response.url;
          // redirectParentWindow(response.url)
        }
        setIsLoading(false);
        return;
      } else {
        console.log("Sending OTP Request ", {
          name,
          email,
          phoneNumber,
          selectedPlan,
        });
        console.log(getFormattedPhoneNumber(phoneNumber));
        const startTransaction = await handleInitiateTransaction();
        console.log("Final Response", startTransaction);
        if (!startTransaction.success) {
          setIsLoading(false);
          Swal.close();
          Swal.fire({
            title: "Error !",
            text: startTransaction.message,
            icon: "error",
          });

          return;
        }
        setOTPValue("");
      }
    }

    if (step === 3) {
      if (otpValue === "" || otpValue.length !== 4) {
        Swal.fire({
          title: "Invalid OTP",
          text: "Please enter a valid OTP received on your mobile number.",
          icon: "error",
        });
        return;
      }

      setIsLoading(true);
      console.log("OTP Entered by User", otpValue);

      let timeoutExceeded = false;

      // Start a timer that will run after 15 seconds if the OTP verification takes too long
      const timer = setTimeout(() => {
        timeoutExceeded = true;
        setIsLoading(false);
        // Swal.fire({
        //   title: 'Timeout',
        //   text: 'The OTP verification is taking too long. Please try again later.',
        //   icon: 'warning',
        // });

        if (step < 5) setStep((s) => s + 1);
      }, 10000);

      try {
        // Call handleVerifyOTP (this function will be executed regardless)
        const confirmOTP = await handleVerifyOTP();

        // Only proceed if the timeout has not exceeded
        if (!timeoutExceeded) {
          clearTimeout(timer); // Clear the timeout if the OTP verification completes on time

          if (!confirmOTP.success) {
            setIsLoading(false);
            Swal.fire({
              title: "Error!",
              text: confirmOTP.message,
              icon: "error",
            });
            setOTPValue("");
            return;
          } else {
            //if user accepts from app within initial set time (10 seconds )
            Swal.fire({
              title: "OTP Confirmed",
              text: "OTP verified successfully!",
              icon: "success",
            });
            setStep(5);
            return;
          }
        } else {
          if (!confirmOTP.success) {
            // alert("We got you finally  ")
            Swal.fire({
              title: "Timeout !",
              text: "Please start over again to continue !",
              icon: "warning",
            });
            setStep(2);
            return;
          } else {
            //if user accepts from app within initial set time (10 seconds )
            Swal.fire({
              title: "OTP Confirmed",
              text: "OTP verified successfully!",
              icon: "success",
            });
            setStep(5);
            return;
          }
        }
      } catch (error) {
        // alert("We got you catch  ")
        if (!timeoutExceeded) {
          clearTimeout(timer);
          setIsLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
        }
      } finally {
        if (!timeoutExceeded) {
          setIsLoading(false);
        }
      }
    }

    e.preventDefault();
    if (step < 5) setStep((s) => s + 1);
    setIsLoading(false);
  };

  function handlePrev(e) {
    e.preventDefault();
    if (step > 1) setStep((s) => s - 1);
  }

  function toggleSelected(name) {
    setAddOnsList((AddOns) =>
      AddOns.map((AddOns) =>
        AddOns.name === name
          ? { ...AddOns, selected: !AddOns.selected }
          : AddOns
      )
    );
  }

  return (
    <div id="react-checkout" className="relative">
      <div className="bg-secondary rounded-xl h-[150px] md:hidden w-[90%] max-w-[380px] mx-auto translate-y-32 -z-10 pt-8 flex flex-row  justify-center ">
        <div className="flex  w-auto gap-6 flex-row items-start justify-start">
          {!isLoading &&
            data.map((item) => (
              <Step curstep={item.step} step={step} key={item.step} />
            ))}
        </div>
      </div>
      <Container>
        <Loader isLoading={isLoading} />

        <Nav>
          {data.map((item) => (
            <Step curstep={item.step} step={step} key={item.step} />
          ))}
        </Nav>

        <main className=" relative h-full">
          {data.map(
            (item) =>
              item.step === step && (
                <Header title={item.title} info={item.info} key={item.step} />
              )
          )}

          <div>
            <div className="main-content ">
              {step === 1 && (
                <PersonalInfoForm
                  step={step}
                  handleNext={handleNext}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  nameError={nameError}
                  setNameError={setNameError}
                  emailError={emailError}
                  setEmailError={setEmailError}
                  phoneNumberError={phoneNumberError}
                  setPhoneNumberError={setPhoneNumberError}
                />
              )}

              {step === 2 && (
                <SelectYourPlan
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  plans={plans}
                />
              )}

              {/* {step === 3 && <PickAddOns
            AddOnsList={AddOnsList}
            setAddOnsList={setAddOnsList}
            PickAddOnsList={PickAddOnsList}
            toggleSelected={toggleSelected}
            isChecked={isChecked}
          />} */}

              {step === 3 && (
                <EnterOTP
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  handleResend={handleInitiateTransaction}
                  otpValue={otpValue}
                  setOTPValue={setOTPValue}
                />
              )}

              {step === 4 && <Summary />}
              {step === 5 && <ThankYou />}
            </div>

            <div className="flex flex-row gap-10 items-center justify-center   absolute bottom-4 w-full ">
              {step > 1 && step < 5 && (
                <Button className="btn-secondary" onClick={handlePrev}>
                  Go Back
                </Button>
              )}
              {step < 4 && (
                <Button className="btn-primary " onClick={handleNext}>
                  Next Step
                </Button>
              )}
              {/* {step === 4 && <Button className='btn-confirm' onClick={handleNext}>Confirm</Button>} */}
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};
