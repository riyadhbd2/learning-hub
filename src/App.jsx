import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

import Courses from './pages/Courses';

import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
};

export default App;