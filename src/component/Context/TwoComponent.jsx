import React from 'react'
import "./style.scss"
import CComponent from './CComponent'
import DComponent from './DComponent'

export default function TwoComponent() {
  return (
    <div>
      <h1>2-component</h1>
      <div>
        <CComponent />
        <DComponent />
      </div>
    </div>
  )
}
