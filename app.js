import React from "react";
import  ReactDOM from "react-dom";

// const h1tag = React.createElement("h1",{},"Welcome to React js");
// console.log(h1tag);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(h1tag);


const h1tag = React.createElement("div",{ id : "parent"},

React.createElement("div",{ id : "child"}),

React.createElement("h1",{ id : "some"}, "Hello All, I am from Reactjs and NestedH1")
);
console.log(h1tag);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1tag);