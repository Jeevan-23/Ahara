import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Carts from "./components/Carts";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/shimmer";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [username, setusername] = useState();

    useEffect(() => {
        const data = {
            name: "Jeevan Malatesha",
        };
        setusername(data.name);
    },[]);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedinUser: username, setusername}}>
            <>
                <Header/>
                <Outlet />
            
            </>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Carts />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);
