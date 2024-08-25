import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const About = lazy(() => import("./src/components/About")); // lazy loading 

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
        element:<Suspense fallback = {<h1>Loading....</h1>}><About/></Suspense>
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

