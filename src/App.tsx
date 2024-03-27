import Home from "@/pages/Home";
import Footer from "@/common/Footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MobileNav from "./common/MobileNav";
import DesktopNav from "@/common/DesktopNav";

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <MobileNav />
      <DesktopNav />
      <Home />
      <Footer />
    </GoogleReCaptchaProvider>
  );
}

export default App;
