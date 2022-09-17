import "./Assets/Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Pages/MainPage";
import NavHeader from "./Layouts/Nav";
import Footer from "./Layouts/Footer";
import jsonData from "./generated.json";
import CourseDataPage from "./Pages/CourseDataPage";
import { Route ,Routes} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; 
// import FadingTextCompontent from "./components/sec-page/SeeMore"

const allDataForCours = jsonData;
function App() {
  return (
    <>
    <Router>
      <NavHeader />
      <Routes> 
        <Route path="/" element={<Courses allCourses={allDataForCours} />}></Route>
        <Route path="/course" element={<CourseDataPage allData={allDataForCours.courses[0]}></CourseDataPage>}></Route>
       </Routes>
      <Footer />
  
</Router>

    </>
  );
}

export default App;
