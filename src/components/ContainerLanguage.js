import React from "react";

function ContainerLanguage({ languages }) {
  const style = (level) => {
    const h = 2.6;
    return {
      width: `${level}%`,
      height: `${h}vh`,
    };
  };

  return (
    <div>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
          Languages
        </b>
      </p>
      {languages.map(({ id, description, level }) => {
        return (
          <div key={id}>
            <p>{description}</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div
                className="w3-round-xlarge w3-teal"
                style={style(level)}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContainerLanguage;
