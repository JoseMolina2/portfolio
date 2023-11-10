import React, { useEffect, useState, useMemo } from "react";
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

  const fetchData = async (endpoint, setData) => {
    try {
      const res = await fetch(`${url}${endpoint}`);
      const data = await res.json();
      if (data && Array.isArray(data)) {
        // Check if any object in the array has the "level" property
        if (data.some((obj) => obj && obj.hasOwnProperty("level"))) {
          // Sort the array based on the "level" property
          data.sort((a, b) => b.level - a.level);
        }

        setData(data);
      } else {
        console.error(
          `Invalid data format for ${endpoint}. Expected an array.`
        );
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await Promise.all([
          fetchData("information", setInformation),
          fetchData("skills", setSkills),
          fetchData("social_links", setLinks),
          fetchData("languages", setLanguages),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
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
