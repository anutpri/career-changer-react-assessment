import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import User from '../../career-changer-react/07-mini-project/src/User';
import Home from './Home'
import User from './User'
import Admin from './Admin'
import Owner from './Owner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/User',
    element: <User />
  },
  {
    path: '/Admin',
    element: <Admin />
  },
  {
    path: '/Owner',
    element: <Owner />
  },
 
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
