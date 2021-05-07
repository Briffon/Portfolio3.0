import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Wave from "./Components/images/wave.svg";

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <img src={Wave} alt="wave" className="wave-svg" />
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
