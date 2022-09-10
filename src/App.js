import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./components/Courses";

import NavHeader from "./components/Nav";
import Footer from "./components/Footer";
import jsonData from "./generated.json";
import SecondPage from "./components/sec-page/SecondPage";
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
        <Route path="/course" element={<SecondPage allData={allDataForCours.courses[0]}></SecondPage>}></Route>
       </Routes>
      <Footer />
  
</Router>

    </>
  );
}

export default App;
