import React from 'react'
import './menu.css'
const Headerleft = ({toggle, setToggle}) => {
  return (
    <div className='heder-lefet'>
    <div className='header-logo'>
      <strong>BTounsi</strong>
    <i className="bi bi-film" style={{color:" rgb(73, 13, 13)"}}></i> 
    </div>
    <div  onClick={() => setToggle(prev => !prev)} className='header-menu'>
      {toggle ? <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}
    </div>
  </div>
  )
}

export default Headerleft
