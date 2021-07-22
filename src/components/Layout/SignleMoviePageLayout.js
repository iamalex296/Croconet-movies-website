import React from "react";

import Template from "../Templates/Template";

const SignleMoviePageLayout = ({ children }) => {
  return (
    <Template>
      <div>{children}</div>
    </Template>
  );
};

export default SignleMoviePageLayout;
