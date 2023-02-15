import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import AlertPage from './pages/AlertPage';
import BadgePage from './pages/BadgePage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import ModalPage from './pages/ModalPage';
import RatingPage from './pages/RatingPage';
import ProgressBarPage from './pages/ProgressBarPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "alert",
        element: <AlertPage />
      },
      {
        path: "badge",
        element: <BadgePage />
      },
      {
        path: "button",
        element: <ButtonPage />
      },
      {
        path: "card",
        element: <CardPage />
      },
      {
        path: "modal",
        element: <ModalPage />
      },
      {
        path: "rating",
        element: <RatingPage />
      },
      {
        path: "progress",
        element: <ProgressBarPage />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
)
