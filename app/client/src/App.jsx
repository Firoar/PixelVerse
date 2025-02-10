import React from "react";
import { useNavigate } from "react-router";
import "./css/App.css";
import classes from "./css/App.module.css";
import { notify } from "./utils/toasts.js";
import { ToastContainer } from "react-toastify";

function NotifyWindows() {
  const handleClickedIt = () => {
    console.log("clicked");
    notify(
      "Windows User (recommended): Change your display setting. Go to Settings > Display > Make everything Bigger > 100%.",
      "warn"
    );
  };

  return (
    <div onClick={handleClickedIt} className={classes["win-notify-div"]}>
      Windows Users :{" "}
      <span>
        <img
          src={`${import.meta.env.BASE_URL}/caution-1.png`}
          alt="Caution Icon"
        />
      </span>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  function getOs() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes("win") ? "windows" : "other";
  }

  const userOs = getOs();

  return (
    <>
      <div className={classes["app-div"]}>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        {userOs === "windows" && <NotifyWindows />}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
