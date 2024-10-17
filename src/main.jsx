import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// route 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import components 
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Heroregister from './Components/Heroregistr/Heroregister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/registr',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/heroregister',
        element: <Heroregister></Heroregister>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
