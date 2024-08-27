import { Footer, NavBar, MovieDashBoard, MovieInfo } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<MovieDashBoard />} />
            <Route path="/movie/:id" element={<MovieInfo />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
};

export default App;
