import React from "react";

const calculateLevel = (level) =>
  level > 80
    ? "Expert"
    : level > 60
    ? "Proficient"
    : level > 40
    ? "Intermediate"
    : "Beginner";

const getWidthStyle = (level) => ({
  width: `${level}%`,
});

const ListSkills = ({ skills }) => {
  const containerStyle = {
    maxHeight: "62.5vh",
    overflowX: "hidden",
    overflowY: "auto",
  };

  return (
    <div style={containerStyle}>
      <p className="w3-large">
        <b>
          <i className="w3-margin-right w3-text-teal fa fa-asterisk fa-fw"></i>
          Skills
        </b>
      </p>
      {skills.map(({ description, level, id }) => (
        <div key={id}>
          <p>{description}</p>
          <div className="w3-grey w3-round-xlarge w3-small">
            <div
              style={getWidthStyle(level)}
              className="w3-container w3-center w3-round-xlarge w3-teal"
            >
              {calculateLevel(level)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSkills;
