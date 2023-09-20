import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connexion from "./pages/Connexion/connexion.jsx";
import Propos from './pages/Apropos/propos.jsx';
import Prestation from './pages/Prestations/Prestation.jsx';
import Contact from './pages/Contact/Contact.jsx'

// import { Components } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Connexion",
    element: <Connexion />,
  },

  {
    path: "/Propos",
    element: <Propos />,
  },

  // {
  //   path: "/Components",
  //   element: <Components />,
  // }

  {
    path: "/Prestation",
    element: <Prestation />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
