import "./App.css";
import Courses from "./components/Courses";
import dataJson from "./courses.json";

const data = dataJson.courses;

function App() {
  return <Courses allCourses={data} />;
}

export default App;
