import { Link } from "react-router";
import React from "react";
import classes from "./authCss/signUp.module.css";

const NavigateTo = ({ isSignIn }) => {
  return isSignIn ? (
    <div className={classes["navigateTo-div"]}>
      New here? <Link to="/signup">Sign Up</Link>
    </div>
  ) : (
    <div className={classes["navigateTo-div"]}>
      Already have an account? <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default NavigateTo;
