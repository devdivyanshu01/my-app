import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function MyFormComponent() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      alert('Form submitted successfully!');
    } else {
      alert('Please verify the captcha.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form inputs here */}

      <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaChange}
      />
    </form>
  );
}

export default MyFormComponent;