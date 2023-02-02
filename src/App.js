import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/Shared/NotFound';
import Bolgs from './pages/Blogs/Bolgs';
import Signin from './pages/Signin/Signin';
import Appointment from './pages/Appointment/Appointment';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Main />, children: [
        { path: "/", element: <Home /> },
        { path: "/appointment", element: <Appointment /> },
        { path: "/blogs", element: <Bolgs /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ]
    },
    { path: "/signin", element: <Signin /> },
    { path: "*", element: <NotFound /> },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
