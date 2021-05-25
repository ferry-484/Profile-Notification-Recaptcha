import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
import { Button, TextField, FormHelperText } from "@material-ui/core";

function Recaptcha() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const handleChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value: ", value);
  };

  const handleSubmit = () => {
    if (Object.values(userDetails).every((val) => val !== "")) {
      if (captchaValue) {
        swal("Signup successfully!", {
          icon: "success",
          closeOnClickOutside: false,
          closeOnEsc: false,
        });
      } else {
        swal("Please verify you are not a robot", {
          icon: "warning",
          closeOnClickOutside: false,
          closeOnEsc: false,
        });
      }
    } else {
      setHelperText("Required field");
    }
  };

  return (
    <div>
      <form>
        <TextField
          label="Firstname"
          variant="outlined"
          onChange={(e) =>
            setUserDetails({ ...userDetails, userName: e.target.value })
          }
        />
        {userDetails.userName ? null : (
          <FormHelperText style={{ color: "red" }}>{helperText}</FormHelperText>
        )}
        <br />
        <br />
        <TextField
          label="Email"
          variant="outlined"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        {userDetails.email ? null : (
          <FormHelperText style={{ color: "red" }}>{helperText}</FormHelperText>
        )}
        <br />
        <br />
        <TextField
          label="Phone"
          variant="outlined"
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
        />
        {userDetails.phone ? null : (
          <FormHelperText style={{ color: "red" }}>{helperText}</FormHelperText>
        )}
        <br />
        <br />
        <ReCAPTCHA
          sitekey="6LdmouwaAAAAAKpynnRSGZ-kgjo7QFWNjDeCiM_L"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Signup
        </Button>
      </form>
      <br />
    </div>
  );
}

export default Recaptcha;



// reCaptcha Details

// SiteKey - 6LdmouwaAAAAAKpynnRSGZ-kgjo7QFWNjDeCiM_L

// SecretKey - 6LdmouwaAAAAAB8eu1l7TM6Cz83NyVn1cEUPIJzG
