import NavBar from "@/common/NavBar";
import Home from "@/pages/Home";
import Footer from "@/common/Footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <NavBar />
      <Home />
      <Footer />
    </GoogleReCaptchaProvider>
  );
}

export default App;
