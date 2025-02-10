import React from "react";
import { useNavigate } from "react-router";
import "./css/App.css";
import classes from "./css/App.module.css";
import { notify } from "./utils/toasts.js";

function NotifyWindows() {
  const handleClickedIt = () => {
    notify(
      "Windows User (recommended): Change your display setting. Go to Settings > Display > Make everything Bigger > 100%."
    );
  };

  return (
    <div>
      Windows Users:{" "}
      <span onClick={handleClickedIt}>
        <img
          src={`${import.meta.env.BASE_URL}/caution.png`}
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
      {userOs === "windows" &&
        alert("Windows User: Adjust your display settings")}
      <div className={classes["app-div"]}>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        {userOs === "windows" && <NotifyWindows />}
      </div>
    </>
  );
}

export default App;
