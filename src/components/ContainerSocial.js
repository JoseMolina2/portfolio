import React from "react";

function ContainerSocial({ links }) {
  return (
    <div className="w3-panel">
      {links.map(({ id, link, icon }) => {
        return (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer">
            <i className={`w3-hover-opacity w3-xxlarge fa fa-${icon}`}></i>
          </a>
        );
      })}
    </div>
  );
}

export default ContainerSocial;
