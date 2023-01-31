import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/Shared/NotFound';
import Bolgs from './pages/Blogs/Bolgs';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/blogs", element: <Bolgs /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
