const express = require("express");
const app = express();
const axios = require("axios");

const recaptchaVerifyURL = "https://www.google.com/recaptcha/api/siteverify";
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

export type RecaptchaVerificationResponse = {
  success: true | false;
  challenge_ts: string; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string; // the hostname of the site where the reCAPTCHA was solved
  "error-codes": unknown[]; // optional
};

app.get("/", async (req, res) => {
  console.log("key", recaptchaSecretKey);
  console.log("req", req);
  const verifyRes: RecaptchaVerificationResponse = await axios
    .post(recaptchaVerifyURL, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: recaptchaSecretKey,
        response: req.body.token,
      }),
    })
    .then((response) => response.json());

  if (verifyRes.success) {
    console.log("recaptcha success");
    res.json({ success: true, data: verifyRes });
  } else {
    res.json({ success: false, data: null });
  }
});

app.listen(6060, () => console.log("Server ready on port 6060."));

module.exports = app;
