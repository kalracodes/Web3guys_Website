import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home.js"
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
