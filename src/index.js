import React from 'react';
import ReactDOM from 'react-dom';


const myfirstelement = <h1>Hello React!</h1>
ReactDOM.render(myfirstelement, document.getElementById('root'));



const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)
ReactDOM.render(myList, document.getElementById('root2'));