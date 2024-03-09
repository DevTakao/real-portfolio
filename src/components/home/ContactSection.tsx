import { FormEvent, useCallback } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const MessageForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(
    async (formData: Record<string, unknown>) => {
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
      console.log("verify res", verifyRes);

      if (verifyRes.success) {
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
          console.log("sendMessage res", res);
        } catch (error) {
          console.log(error);
        }
      }
    },
    [executeRecaptcha]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const obj: Record<string, unknown> = {};

    const formData = new FormData(e.target as HTMLFormElement);
    for (const [key, value] of formData.entries()) {
      obj[key] = value;
    }
    handleReCaptchaVerify(obj);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start w-[90%] max-w-screen-md mx-auto md:p-5">
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
        type="submit"
        className="inline-block font-body font-semibold border border-white rounded-full py-[5vw] px-[7vw] md:py-4 md:px-7 hover:bg-white hover:text-green-dark transition-colors duration-500 ml-auto"
      >
        Send Message
      </button>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative text-center bg-gradient-to-b from-green-light to-green-dark py-12 md:py-24
    before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-light before:absolute before:z-[2] before:bottom-[100%] before:left-0"
    >
      <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center">Send Me A Message</h3>
      <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
        <MessageForm />
      </GoogleReCaptchaProvider>
    </section>
  );
};

export default ContactSection;
