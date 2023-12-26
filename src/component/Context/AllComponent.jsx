import React from 'react'
import "./style.scss"
import OneComponent from './OneComponent'
import TwoComponent from './TwoComponent'

export default function AllComponent() {
  return (
    <div className="all_div my-4">
      <div className='div_contex'>
        <div className="component1">
          <OneComponent />
        </div>
        <div className="component2">
          <TwoComponent />
        </div>
      </div>
    </div>
  );
}
