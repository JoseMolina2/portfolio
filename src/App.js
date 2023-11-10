import React, { useEffect, useState } from "react";
import "./App.css";
import photo from "./assets/foto.jpg";
import Photo from "./components/ContainerPhoto";
import Info from "./components/ContainerInformation";
import Skills from "./components/ContainerSkills";
import Social from "./components/ContainerSocial";
import Languages from "./components/ContainerLanguage";

function App() {
  const url = "http://localhost:5000/";

  const [information, setInformation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchInformation = async () => {
      const res = await fetch(`${url}information`);
      const data = await res.json();
      setInformation(data);
    };

    const fetchSkills = async () => {
      const res = await fetch(`${url}skills`);
      const data = await res.json();
      setSkills(data);
    };

    const fetchSocial = async () => {
      const res = await fetch(`${url}social_links`);
      const data = await res.json();
      setLinks(data);
    };

    const fetchLanguages = async () => {
      const res = await fetch(`${url}languages`);
      const data = await res.json();
      setLanguages(data);
    };

    fetchInformation();
    fetchSkills();
    fetchSocial();
    fetchLanguages();
  }, [url]);

  return (
    <div className="w3-light-grey">
      {/* Page Container */}
      <div id="container" className="w3-content w3-margin-top">
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third">
            <Photo photo={photo} />
            <div className="w3-container">
              <Info information={information} />
              <Skills skills={skills} />
              <Languages languages={languages} />
            </div>
          </div>
          <div className="w3-twothird"></div>
        </div>
        <footer className="w3-container w3-teal w3-center w3-margin-top">
          <p>Contact me on social media.</p>
          <Social links={links} />
        </footer>
      </div>
    </div>
  );
}

export default App;
