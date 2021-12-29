import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Demo from './components/demo/demo'
import Demo2 from './components/demo/demo2'
import OnDemo from './components/demo/onclickdemo'
import Pdemo from './components/demo/proptypesdemo'
import Propswith from './components/demo/funcwitchprops'
import RefComponent from './components/demo/refComponent'
import FormDemo from './components/demo/formDemo'
import FormDemo2 from './components/demo/formDemo2'
import Life from './components/demo/life'
let frontBack = [
    "Angular",
    "React",
    "Vue"
]

let element = frontBack.map((each,index)=> <li key={index}>{each}</li>)
let p = {isHot: true,wind:true}
let node = {node:document.getElementById('root')}
const VDOM = (
    <div>
        <ul>
            {element}
        </ul>
        <Demo/>
        <Demo2/>
        <OnDemo {...p}/>
        <Pdemo {...p}/>
        <Propswith {...p}/>
        <RefComponent />
        <FormDemo />
        <FormDemo2 />
        <Life {...node}/>
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
