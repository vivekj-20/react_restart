import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () =>{
    return(
    <div>    
        <Header/>
        <Outlet/>
    </div>
)
}

const router = createBrowserRouter([
    {
     path:"/",
     element:<AppLayout />,
     children:[
        {
            path: "/",
            element: <Body />,
        },
        {
        path:"/about",
        element:<About/>
        },
        {
        path: "/contact",
        element: <Contact />,
        },
        {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        },
     ],
     errorElement:<Error />,
    },
]);

const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot and render the Heading component
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router}/>);

