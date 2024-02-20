import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import './headermiddel.css';

      
const Navbar = ({toggle,setToggle}) => {
  const {isAuth} = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <nav style={{clipPath:toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className='navbar' >
    <ul className='nav-links'>
          {!isAuth ? <>
          <Link to="/register" className='nav-link'>
         <i className="bi bi-person-plus"></i> Register
          </Link>
         <Link to="/login" className='nav-link'>
      <i className="bi bi-box-arrow-in-right"></i> Login
      </Link>
            </> :
      <Link to="/login" className='link' onClick={() => dispatch(logout())} className='nav-link'> 
      <i class="bi bi-box-arrow-right"></i>Logout</Link>
    }
      <Link to="/" onClick={() => setToggle(false)}  className='nav-link'>
      <i  className="bi bi-house" ></i> Home
      </Link>
      <Link to="/add"  onClick={() => setToggle(false)} className='nav-link'>
      <i className="bi bi-file-earmark-plus"></i> Add
      </Link>
      
      
    </ul>
  </nav>
  )
}

export default Navbar
// el auth temchi fi logo he4a
// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/slices/userSlice';
// import './navbar.css'

      
// const Navbar = ({toggle,setToggle}) => {
//   const {isAuth} = useSelector(state => state.user)
//   const dispatch = useDispatch()
//   return ( 
//     <div >
//     <nav style={{clipPath:toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className='navbar'> </nav>  
//     <ul className='nav-links'> </ul>
   
    
//     {!isAuth ? <>
//     <Link to="/register" className='nav-link'>
//         <i className="bi bi-person-plus"></i> Register
//       </Link>
//       <Link to="/login" className='nav-link'>
//       <i className="bi bi-box-arrow-in-right"></i> Login
//       </Link>
//       </> :
//       <Link to="/login" className='link' onClick={() => dispatch(logout())}>Logout</Link>
//     }
      
//       <Link to="/" onClick={() => setToggle(false)}  className='nav-link'>
//       <i  className="bi bi-house" ></i> Home
//       </Link>
//       <Link to="/add"  onClick={() => setToggle(false)} className='nav-link'>
//       <i className="bi bi-file-earmark-plus"></i> Add
//       </Link>
   
      
//     </div>   
  
//   )
// }

// export default Navbar

