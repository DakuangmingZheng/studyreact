import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Demo from './components/demo/demo'
import Demo2 from './components/demo/demo2'
let frontBack = [
    "Angular",
    "React",
    "Vue"
]

let element = frontBack.map((each,index)=> <li key={index}>{each}</li>)
const VDOM = (
    <div>
        <ul>
            {element}
        </ul>
        <Demo/>
        <Demo2/>
    </div>

)
ReactDOM.render(
  VDOM,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
