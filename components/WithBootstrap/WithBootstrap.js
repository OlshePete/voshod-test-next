'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function WithBootstrap({children}) {
  return (
    <div className='jumbotron d-flex flex-column align-items-center gap-2'> {children} </div>
  )
}

export default WithBootstrap