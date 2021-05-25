import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const client_id =
 "456932007886-m4n8mu9tmc90fhdgmbup7h7084k09hu4.apps.googleusercontent.com";

function SocialLogin() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="container-app">
      <FacebookLogin
        appId="3708580516033603"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        cssClass="btnFacebook"
        icon="fa-facebook"
        textButton="&nbsp;&nbsp;Sign In with Facebook"
      />

      <GoogleLogin
        clientId={client_id}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default SocialLogin;


//google client id - 456932007886-m4n8mu9tmc90fhdgmbup7h7084k09hu4.apps.googleusercontent.com

//google secret key - BdsacRm_CC6_cWhDxe2PIdYG