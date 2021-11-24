import React from "react";
import { Helmet } from "react-helmet";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>CRWN Clothing - Home Page</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
