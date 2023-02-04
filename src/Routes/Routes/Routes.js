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
    { path: "*", element: <NotFound /> },
])

export default router;