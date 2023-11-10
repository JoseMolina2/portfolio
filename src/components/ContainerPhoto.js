import React from "react";
import "./ContainerPhoto.css";

function ContainerPhoto({ photo, name }) {
  return (
    <div id="image-container" className="w3-display-container w3-theme-l4">
      <img
        className="w3-grayscale-min w3-padding-16"
        src={photo}
        alt="Avatar"
      />
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default ContainerPhoto;
