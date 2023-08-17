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

//<--------------------JSX----------------------->

// const JSXdivision = <div id = "parent"> 
//     <div id="child">
//         <p id ="text">Welcome to React jsx</p>
//     </div>
//     </div>

const name = "Ahamedunnisa"
const mobile = "1234567890"

const jsxjs = <div id = "mydiv" className="my_div">This is {name} and my mobile number is {mobile}</div>;//javascript in js

// console.log(h1tag);
//<--------------components------------->
//rendering arrow method to a component

const userdetail = {
    username:"Ahamedunnisa",
    mobile:1234567890
}
const ButtonComponent = () => (
    <input type="text"/>
)
const HeaderComponent = () => (
    <div class="header"><h1>My header</h1><ButtonComponent/></div>
)

const ContentComponent = () => (
    <div class="content"><h1>My name is : {userdetail.username}</h1></div>
)

const FooterComponent = () => (
    <div class="footer"><h1>My Footer</h1></div>
)

const HomepageComponent = () => (
    <div class="container">
     <HeaderComponent></HeaderComponent>
     <ContentComponent></ContentComponent>
     <FooterComponent></FooterComponent>
    </div>
   
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomepageComponent/>);


