import Home from "@/pages/Home";
import Footer from "@/common/Footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MobileNav from "./common/MobileNav";
import DesktopNav from "@/common/DesktopNav";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      {import.meta.env.MODE === "production" && <Analytics />}
      <MobileNav />
      <DesktopNav />
      <Home />
      <Footer />
    </GoogleReCaptchaProvider>
  );
}

export default App;
