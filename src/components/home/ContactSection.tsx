import Loader from "@/common/Loader";
import { FormEvent, useCallback, useRef, useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { BiCheck } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const MessageForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const handleReCaptchaVerify = useCallback(
    async (formData: Record<string, unknown>) => {
      const isDevMode = import.meta.env.MODE === "development";
      if (isDevMode) {
        console.log("Disabled reCAPTCHA in development mode");
      }

      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("sendMessage");
      const verifyRes = await fetch(import.meta.env.VITE_RECAPTCHA_VERIFY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      }).then((res) => res.json());

      if (verifyRes.success || isDevMode) {
        try {
          const res = await fetch(import.meta.env.VITE_AIRTABLE_MESSAGE_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    Name: formData.name,
                    Email: formData.email,
                    Message: formData.message,
                  },
                },
              ],
            }),
          }).then((res) => res.json());

          if (res.success) {
            formRef.current && formRef.current.reset();
            setApiMessage("Sent");
            setTimeout(() => {
              setApiMessage("");
            }, 3000);
          } else {
            setApiMessage("Send message failed. Please contact via social media.");
          }
        } catch (error) {
          console.log(error);
          setApiMessage("Unexpected error. Please contact via social media.");
        }
      } else {
        setApiMessage("Google reCAPTCHA failed. Please try again.");
      }
      setIsLoading(false);
    },
    [executeRecaptcha]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiMessage("");

    const obj: Record<string, unknown> = {};

    const formData = new FormData(e.target as HTMLFormElement);
    for (const [key, value] of formData.entries()) {
      obj[key] = value;
    }
    handleReCaptchaVerify(obj);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-[90%] max-w-screen-md mx-auto md:p-5"
    >
      <label className="w-full grid grid-cols-12 my-5 font-body font-bold text-base sm:text-lg text-left">
        <span className="w-full leading-none flex items-center ml-5 mb-5 md:m-0 col-span-12 md:col-span-2 col-start-1">
          Your Name
        </span>
        <input
          type="text"
          name="name"
          required
          placeholder="John Doe"
          className="font-normal placeholder:text-white/20 col-span-12 col-start-1 md:col-span-10 md:col-start-3 bg-transparent border border-white rounded-full focus:outline-none focus:[box-shadow:-0.25rem_-0.25rem_1rem_inset_rgba(0,0,0,0.3),0.25rem_0.25rem_1rem_inset_rgba(0,0,0,0.3)] py-4 px-6"
        />
      </label>
      <label className="w-full grid grid-cols-12 my-5 font-body font-bold text-base sm:text-lg text-left">
        <span className="w-full leading-none flex items-center ml-5 mb-5 md:m-0 col-span-12 md:col-span-2 col-start-1">
          Your Email
        </span>
        <input
          type="email"
          name="email"
          required
          placeholder="example@domain.com"
          className="font-normal placeholder:text-white/20 col-span-12 col-start-1 md:col-span-10 md:col-start-3 bg-transparent border border-white rounded-full focus:outline-none focus:[box-shadow:-0.25rem_-0.25rem_1rem_inset_rgba(0,0,0,0.3),0.25rem_0.25rem_1rem_inset_rgba(0,0,0,0.3)] py-4 px-6"
        />
      </label>
      <label className="w-full grid grid-cols-12 my-5 font-body font-bold text-base sm:text-lg text-left">
        <span className="w-full leading-none md:pt-5 ml-5 mb-5 md:m-0 col-span-12 md:col-span-2 col-start-1">
          Message
        </span>
        <textarea
          maxLength={500}
          name="message"
          placeholder="Hi, I would like to offer you a great opportunity at our company."
          className="font-normal placeholder:text-white/20 col-span-12 col-start-1 md:col-span-10 md:col-start-3 resize-none bg-transparent border border-white rounded-xl focus:outline-none focus:[box-shadow:-0.25rem_-0.25rem_1rem_inset_rgba(0,0,0,0.3),0.25rem_0.25rem_1rem_inset_rgba(0,0,0,0.3)] py-4 px-6 h-[25vh]"
        />
      </label>
      <button
        disabled={isLoading}
        type="submit"
        className="disabled:bg-green-light disabled:text-white disabled:cursor-progress inline-flex items-center justify-between font-body font-semibold border border-white rounded-full py-[5vw] px-[7vw] md:py-4 md:px-7 enabled:hover:bg-white enabled:hover:text-green-dark transition-colors duration-500 ml-auto"
      >
        <span className="min-w-[6rem] text-left">
          {isLoading ? "Sending..." : apiMessage === "Sent" ? "Sent" : "Send Message"}
        </span>
        <div className="w-[1rem] h-[1rem] text-[1rem] ml-auto flex items-center justify-center">
          {isLoading ? <Loader /> : apiMessage === "Sent" ? <BiCheck /> : <FaAngleRight />}
        </div>
      </button>
      <p className="w-full pt-2 text-right text-sm font-body flex items-center justify-end pr-5">
        <span className="mr-1">{apiMessage}</span>
      </p>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative text-center bg-gradient-to-b from-green-dark to-green-light py-12 md:py-24
    before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-dark before:absolute before:z-[2] before:bottom-[100%] before:left-0"
    >
      <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center">Send Me A Message</h3>
      <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
        <MessageForm />
      </GoogleReCaptchaProvider>
    </section>
  );
};

export default ContactSection;
