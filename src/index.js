import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const hello = function()
{

    return "Hello World";

}

const hello1 =()=>{

    return  "Hello World";
}

const myArray =[1,2,3,4]

const myList=myArray.map((val)=> val*2)
console.log(myList);


//*****Destructuring*****
const vehicles =["Ford","BMW","Fiat"];

const [car1,car2,car3] = vehicles

console.log(car1);
/*console.log(vehicles[0]);
console.log(vehicles[1]);
console.log(vehicles[2]);*/
//console.log(hello);
//console.log(hello1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(
    <h1>Merhaba REACT 1</h1>  
   );
reportWebVitals();
