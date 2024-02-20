// import React from 'react'
// import {Container , Nav, Navbar,Button,} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import "./menu.css";

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/slices/userSlice';
// const Menu = () => {
//     const {isAuth} = useSelector(state => state.user)
//     const dispatch = useDispatch()
//   return (
//     <header className='header'>

//     <Navbar expand="lg"  >
//     <Container>
//     <div className='header-left'> 
//     <div className='header-logo'>
//     <i className="bi bi-film" ></i> 
//     <div className='logo'><Navbar.Brand  ><strong>BTounsi</strong></Navbar.Brand></div>
    
//     </div>
//     </div>
//       {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
                  
//             {!isAuth ? <>
//             <div className='header-right'>
//               <i className='bi bi -box-arrow-in-right'></i>
//             <Link to="/register" className='nav-link '>Register</Link>
//             <i class="bi bi-door-open"></i>
//               <Link to="/login" className='nav-link '>Login</Link>
//               </div>
          
//             </> : <>
//             <ul className='nav-links'> 
//               <li className='nav-link'>
//               <i className="bi bi-house" ></i> 
//             <Link to="/" className='navmenu '>Home</Link>
            
//             </li>
//             <li className='nav-link'>
//             <i class="bi bi-file-earmark-plus"></i>
//             <Link to="/add">Add</Link>
//             <i className="bi bi-stick"></i>
//             </li>
//             {/* <li className='nav-link'>  
//             <i className="bi bi-person-check"></i>Admin Dashborad
//             </li> */}
//             </ul>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>

//              <NavDropdown.Item href="#action4">
//                Another action
//              </NavDropdown.Item>
//             <NavDropdown.Divider />
//              <NavDropdown.Item href="#action5">
//                Something else here
//             </NavDropdown.Item>
//            </NavDropdown>
//            <i className="bi bi-door-open"></i>
//             <Link to="/" className='link' onClick={() => dispatch(logout())} >logout</Link>
//             </>
//             }
//             <Form className="search-button">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success" >Search</Button>
//           </Form>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
 
//   </header>
//   )
  
// }

// export default Menu
// tuto youtube 
import React, { useState } from 'react'
import './menu.css'
import Navbar from './Navbar';
import Headerleft from './Headerleft';
import Headerright from './Headerright';
// import { Prev } from 'react-bootstrap/esm/PageItem';

const Menu = () => {
  // (respensve param)
  const [toggle,setToggle] = useState(false);

  return (
    
      <header className='header'>
       <Headerleft toggle={toggle} setToggle={setToggle}/>
        <Navbar toggle={toggle} setToggle={setToggle}/>
       <Headerright />
      </header>
    
  )
}

export default Menu
