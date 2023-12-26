import React from 'react'
import "./style.scss"
import AComponent from './AComponent'
import BComponent from './BComponent'

export default function OneComponent() {
  return (
    <div>
      <h1>1-component</h1>
      <div>
        <AComponent />
        <BComponent />
      </div>
    </div>
  )
}
