import {  createHashRouter } from "react-router-dom";
import Home from "./components/home/home";
import Error from "./components/error/error";
import Appointment from "./components/appointment/appointment";

export const router = createHashRouter([
    {
        path:'/',
        element:<Home />,
        errorElement:<Error/>
    },
    {
        path: "/home",
        element: <Home />,
        errorElement:<Error/>
    },
    {
        path: "/appointment",
        element: <Appointment />,
        errorElement:<Error/>
    },
]);