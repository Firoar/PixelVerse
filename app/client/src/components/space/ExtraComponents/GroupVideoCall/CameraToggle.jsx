import React, { useState } from "react";
import classes from "./groupVideoCall.module.css";
import { toggleCamera } from "./groupVideoCall.js";
import cameraOn from "./camera.svg";
import cameraOff from "./cameraOff.svg";

const CameraToggle = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    toggleCamera(isLocalVideoDisabled);
    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <div className={classes["toggleDiv"]}>
      <img
        src={isLocalVideoDisabled ? cameraOff : cameraOn}
        onClick={handleCameraButtonPressed}
      />
    </div>
  );
};
export default CameraToggle;
