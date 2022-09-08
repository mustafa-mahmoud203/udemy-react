import "./App.css";
import Courses from "./components/Courses";
import dataJson from "./courses.json";
import NavHeader from "./components/Nav";
import Footer from "./components/Footer";
const data = dataJson.courses;

function App() {
  return (
    <>
      <NavHeader />
      <Courses allCourses={data} />;
      <Footer/>
    </>
  );
}

export default App;
