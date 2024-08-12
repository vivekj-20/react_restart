import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const AppLayout = () =>{
    return(
    <div>    
        <Header/>
        <Body/>
    </div>
)
}
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot and render the Heading component
const root = ReactDOM.createRoot(rootElement);

root.render(AppLayout());

