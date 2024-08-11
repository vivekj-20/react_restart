import React from "react";
import ReactDOM  from "react-dom/client";

const Line = () => (<h1>I LOVE REACT</h1>);

const Heading = () => (
<div>    
{Line()}
<Line />
<Line></Line>
<h2>{20 * 1000}</h2>
<h1>I LOVE JAVA</h1>
</div>
);

const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot and render the Heading component
const root = ReactDOM.createRoot(rootElement);

root.render(Heading());

