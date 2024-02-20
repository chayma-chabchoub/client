import React from 'react'
import Form from 'react-bootstrap/Form';
import {Button,} from 'react-bootstrap';

const Headerright = () => {
  return (
    <div className='header-right'>
    <button className="header-right-link">
      <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
         />
       </button>
       <Button variant="outline-success"  className='header-right-link'>Search</Button>
    </div>
  )
}

export default Headerright
// const handleSubmit=(e)=>{
//   e.preventDefault();
//   if (search.trim()){
//       dispatch(searchBlog(search))
//       navigate(/search?searchQuery=${search})
//   }else{
//       navigate("/home");
//   }
// }
// fi button: onClick={handleSubmit}