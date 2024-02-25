import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar sticky-top row justify-content-center' style={{zIndex:10}}>
      <div className='text-center mx-2 col-1 '>Ceràmica</div>
      <div className='text-center mx-2 col-1'>Simulaciones</div>
      <div className='text-center mx-2 col-1'>Render</div>
      <div className='text-center mx-2 col-1'>CV</div>
      <div className="navbar-overlay"></div> 
      
    </nav>
  )
}
