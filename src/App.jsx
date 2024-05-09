import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

import Courses from './pages/Courses';

import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import UserProfile from './pages/UserProfile';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import CourseDetails from './pages/CourseDetails';
// import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/faq" element={<Faq></Faq>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/userprofile" element={<UserProfile></UserProfile>}></Route>
            <Route path="/coursedetails/:id" element={<CourseDetails></CourseDetails>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
};

export default App;