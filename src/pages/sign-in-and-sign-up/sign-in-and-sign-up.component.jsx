import React from "react";
import { Helmet } from "react-helmet";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CRWN Clothing - Sign in or Sign up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
