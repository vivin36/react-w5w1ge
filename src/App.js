import React from 'react';
import './style.css';
import Homepage from './HomePage';
import HocList from './HocList.js';

export default function App() {
  let ModifiedHoc = HocList(Homepage);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/*   <Homepage /> */}
      modifiedHoc: <ModifiedHoc />
    </div>
  );
}
