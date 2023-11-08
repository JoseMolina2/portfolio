import "./App.css";
import foto from "./assets/foto.jpg";

function App() {
  return (
    <div className="w3-light-grey">
      {/* Page Container */}
      <div id="container" className="w3-content w3-margin-top">
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third">
            <div
              id="image-container"
              className="w3-display-container w3-theme-l4"
            >
              <img
                className="w3-grayscale-min w3-padding-16"
                src={foto}
                alt="Avatar"
              />
            </div>
          </div>
          <div className="w3-twothird"></div>
        </div>
        <footer className="w3-container w3-teal w3-center w3-margin-top"></footer>
      </div>
    </div>
  );
}

export default App;
