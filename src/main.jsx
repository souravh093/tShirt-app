import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layout/Root';
import Home from './components/Layout/Home/Home';
import Orders from './components/Layout/Orders/Orders';
import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('data.json')
      },
      {
        path: '/orders',
        element: <Orders />
      }, 
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
