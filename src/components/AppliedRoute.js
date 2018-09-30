import React from "react";
import { Route } from "react-router-dom";

//Getting a warning of slowness when you use Lambda, should maybe change this later.
export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
