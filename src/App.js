import "./Assets/Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Pages/MainPage";
import NavHeader from "./Layouts/Nav";
import Footer from "./Layouts/Footer";
import CourseDataPage from "./Pages/CourseDataPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import FadingTextCompontent from "./components/sec-page/SeeMore"

function App() {
  return (
    <>
      <Router>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Courses />}></Route>
          <Route path="/course" element={<CourseDataPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
