import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import CourseDetails from './pages/CourseDetails';
import Head from './layout/Head';
import CheckOut from './pages/CheckOut';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Head></Head>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/userprofile',
          element: <UserProfile></UserProfile>
        },
        {
          path: '/course/:id',
          element: <CourseDetails></CourseDetails>,
          // loader: ({params}) => fetch(`http://localhost:5173/details/${params.id}`)
          loader: ({params}) => fetch(`http://localhost:3000/details/${params.id}`)
        },
        {
          path:'/checkout',
          element: <CheckOut></CheckOut>
          
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
};

export default App;