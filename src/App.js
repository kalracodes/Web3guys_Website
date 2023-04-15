import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home.js"
import { About } from "./Pages/About";
import { Courses } from "./Pages/Courses";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
