import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Pr2 from "./Component/Courses/Pr2";
// import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Component/Signup/Signup";
import Book from "./Component/ebook/Book";
import Webinar from "./Component/Webinar/Webinar";
import Coursedetails from "./Component/Courses/Coursedetails";
import Quiz from "./Component/Quiz/Quiz";
import Pricing from "./Component/Pricingsection/Pricing";



const App = () => {

  return (
    <div className="App">
      {/* <Navbar/>
      <Home/>
      <Pr2/>
      <Footer/> */}

      <Router>
        <Navbar />
      

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Courses" element={<Pr2 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Webinar" element={<Webinar />} />
          <Route path="/Course/:id" element={<Coursedetails />} />

        </Routes>
        {/* <Footer/> */}
      </Router>


    </div>
  );
};

export default App;
