import React from "react";
import ReactDOM from "react-dom/client";

const heading = () => (
    <div>
        <Fnc />
        
        <h1 id="heading">Hello from JSX 🚀</h1>
        <h2>Subheading</h2>
        <Image />
    </div>
);
const Fnc = () => (
    <h1>Function Component</h1>
);
const Image = () => (
    <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="A cool gif"/>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const img = ReactDOM.createRoot(document.getElementById("image"));



root.render(heading());