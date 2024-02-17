import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../Components/Home/Home";
import Rooms from '../Components/Rooms/Rooms';
import Register from './../Components/Register/Register';
import Login from './../Components/Login/Login';
import Contact from './../Components/Contact/Contact';
import Dashboard from './../Components/Dashboard/Dashboard';
import About from './../Components/About/About';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

export default router;
