import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Error from "./components/error/error";
import Appointment from "./components/appointment/appointment";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Login />,
        errorElement:<Error/>
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/appointment",
        element: <Appointment />,
        errorElement: <Error />,
    },
]);