import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Outlet from "./Layout.jsx";
import Home from "./Components/Aditya_Work/Home/Home.jsx";
import About from "./Components/Aditya_Work/About/About.jsx";
import Sponsors from "./Components/Aditya_Work/Sponsors/Sponsors.jsx";
import Merch from "./Components/Aditya_Work/Merchndise/Merch.jsx";
import Team from "./Components/Aditya_Work/Team/Team.jsx";
import Event from "./Components/Aditya_Work/Event/Event.jsx";
import Admin from "./Components/Aditya_Work/Admin_low_access/Admin.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"about",
        element: <About/>,
      },
      {
        path: "team",
        element: <Team/>
      },
      {
        path: "event",
        element: <Event/>
      },
      {
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "merch",
        element: <Merch />,
      },
      {
        path: "admin",
        element: <Admin/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
