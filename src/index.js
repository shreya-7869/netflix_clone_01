import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import "./index.css"
import Sdata from './Sdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
function ncard (val){
  return(
    console.log(val),
    <Card {...val} />
  )
}
root.render(
  <>
    <h1 className='heading_style'>
      List of Top 5 Netflix web Series
    </h1>

    <div className="card-container">
     { Sdata.map(ncard)}
    </div>

  </>
);
// card is a custom element and the properties we are usig like imgsrc title etc. are also custom properties which we are defining according to our easyness.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
