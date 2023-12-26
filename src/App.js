import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Route, Routes } from 'react-router-dom'
import AllComponent from './component/Context/AllComponent'


export default function App() {

  return (
    <div className='mt-5'>
      <Routes>
        <Route path="/" element={<AllComponent />} />
      </Routes>
      
    </div>
  );
}
