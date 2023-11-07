import "./App.css";

function App() {
  return (
    <div className="w3-light-grey">
      {/* Page Container */}
      <div id="container" className="w3-content w3-margin-top">
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third"></div>
          <div className="w3-twothird"></div>
        </div>
        <footer className="w3-container w3-teal w3-center w3-margin-top"></footer>
      </div>
    </div>
  );
}

export default App;
