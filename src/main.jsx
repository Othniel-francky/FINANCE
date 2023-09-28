import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connexion from "../src/pages/Connexion/connexion.jsx";
import Propos from '../src/pages/Apropos/Propos.jsx';
import Prestation from '../src/pages/Prestations/Prestation.jsx';
import Contact from '../src/pages/Contact/Contact.jsx'
import Load from '../src/pages/Load/Load.jsx';
import Etude from '../src/pages/Etude/Etude.jsx';
import Dashboard from '../src/pages/Dashboard/Dashboard.jsx';
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
  {
    path: "/Load",
    element: <Load />,
  },
  {
    path: "/Etude",
    element: <Etude />,
  },

  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
