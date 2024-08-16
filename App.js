import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";

const AppLayout = () =>{
    return(
    <div>    
        <Header/>
        <Body/>
    </div>
)
}

const rout = createBrowserRouter([
    {
     path:"/home",
     element:<AppLayout />,
     errorElement:<Error />
    }
])

const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot and render the Heading component
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={rout}/>);

