import "./Assets/Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Pages/MainPage";
import NavHeader from "./Layouts/Nav";
import Footer from "./Layouts/Footer";
import CourseDataPage from "./Pages/CourseDataPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// import FadingTextCompontent from "./components/sec-page/SeeMore"

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((res) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <>
      <Router>
        <NavHeader />
        <Routes>
          <Route
            path="/"
            element={<Courses data={data} error={error} loading={loading} />}
          ></Route>
          {/* <Route path="/course" element={<CourseDataPage allData={allDataForCours.courses[0]}></CourseDataPage>}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
