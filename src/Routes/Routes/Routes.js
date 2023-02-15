import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../pages/Home/Home';
import Appointment from '../../pages/Appointment/Appointment';
import Bolgs from '../../pages/Blogs/Bolgs';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Signin from '../../pages/Signin/Signin';
import Signup from '../../pages/Signin/Signup';
import NotFound from '../../pages/Shared/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DashboardLayout from '../../Layout/DashboardLayout';
import MyAppointment from '../../pages/Dashboard/MyAppointment';
import AllUser from '../../pages/Dashboard/AllUser';
import Reviews from '../../pages/Dashboard/Reviews';


const router = createBrowserRouter([
    {
        path: "/", element: <Main />, children: [
            { path: "/", element: <Home /> },
            { path: "/appointment", element: <Appointment /> },
            { path: "/blogs", element: <Bolgs /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/signin", element: <Signin /> },
            { path: "/signup", element: <Signup /> },
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children : [
            {path : '/dashboard', element: <MyAppointment></MyAppointment>},
            {path : '/dashboard/all-user', element: <AllUser />},
            {path : '/dashboard/review', element: <Reviews />},
        ]
    },
    { path: "*", element: <NotFound /> },
])

export default router;