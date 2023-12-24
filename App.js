import React from "react";
import ReactDOM  from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"parent"},"Hello From React")));
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)  