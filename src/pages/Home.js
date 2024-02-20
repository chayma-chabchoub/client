
import './home.css'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmovies, deletemovie, addmovie, updatemovie } from '../redux/slices/movieSlice'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import './add.css'

const Home = ({data}) => {
  const dispatch=useDispatch()
  const [updated,setupdatemovie]=useState({})
 const [visible,setvisible]=useState({visibility:"hidden"})
  const handleChange=(e)=>{
   setupdatemovie({...movieList,[e.target.name]:e.target.value})
   console.log(updated)
 }
  const {movieList,isLoading}=useSelector((state) => state.movie)
  const { register, handleSubmit, formState: { errors } } = useForm();
  return ( 
    <div>
    {/* <div className ='movie-slider-container'> </div>

    {isLoading && <p>Loading</p>}
     {Array.isArray(movieList) && movieList.map(el=>
     <div>
        <h4>Create your Update</h4>
       <p>{el.title}</p>
       <p>{el.desc}</p>
       <p>{el.img}</p>
   
   
       <button className='update-button-1' onClick={()=>{(visible.visibility==="hidden")
       ?   setvisible({visibility:"visible"}):setvisible({visibility:"hidden"})}}>update</button>
        <div className='update-section'>
       <div style={visible}>
       <input className='input' type='text' placeholder='update name' name='title'onChange={handleChange}></input>
      <input className='input' type='text' placeholder='update description' name='desc'onChange={handleChange}></input>
      <input className='input' type='text' placeholder='update img' name='img'onChange={handleChange}></input>
      <button className='update-section-2 ' onClick={()=>dispatch(updatemovie({...updated,_id:el._id}))}>Updating</button>
   
       </div>
      </div>
      
     
     <Button  className='delete-button' onClick={()=>dispatch(deletemovie(el))}>Delete</Button> 
      
     </div>
     )}
      <i className='bi bi-chevron-left movie-slider-arrow-lefet'></i> */}
      
      <div className='movie-slider-wrapper'>
        {data.map(item => 
        <div key={item.id} className='movie-card'>
          <img src= {item.posterUrl} style={{ width: '300px',height: '400px'  }}
                alt={item.title} className='movie-details'/> <br/>
          <strong className='movie-slide-item-title'>{item.title}</strong> <br/>
          {/* <div className='rating'>rating</div> */}
          <strong className='genre' >{item. genre}</strong> <br/>
          <strong className='description'style={{color:'gray'}}>{item. description}</strong> <br/>
          <div> <a href={item.trailer} class="styled-button">Watch Trailer</a></div>
          <div className='movie-slider-icons-wrapper'>
            {/* <i className='bi bi-eye-fill'></i> */}
            {/* <i className='bi bi-cart-plus'></i> */}
          </div>
        </div>)}
      </div>
      <i className='bi bi-chevron-right  movie-slider-arrow-right'></i>
      <div className ='movie-slider-container'> </div>

    {isLoading && <p>Loading</p>}
     {Array.isArray(movieList) && movieList.map(el=>
     <div>
        <h4 style={{color:'white'}}>Create your Update</h4>
       <p>{el.title}</p>
       <p>{el.desc}</p>
       <p>{el.img}</p>
   
   
       <button className='update-button-1' onClick={()=>{(visible.visibility==="hidden")
       ?   setvisible({visibility:"visible"}):setvisible({visibility:"hidden"})}}>update</button>
        <div className='update-section'>
       <div style={visible}>
       <input className='input' type='text' placeholder='update name' name='title'onChange={handleChange}></input>
      <input className='input' type='text' placeholder='update description' name='desc'onChange={handleChange}></input>
      <input className='input' type='text' placeholder='update img' name='img'onChange={handleChange}></input>
      <button className='update-section-2 ' onClick={()=>dispatch(updatemovie({...updated,_id:el._id}))}>Updating</button>
   
       </div>
      </div>
      
     
     <Button  className='delete-button' onClick={()=>dispatch(deletemovie(el))}>Delete</Button> 
      
     </div>
     )}
      <i className='bi bi-chevron-left movie-slider-arrow-lefet'></i>
      </div>
      
  );
}

export default Home

// import React, { useEffect,useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getmovies, deletemovie, addmovie, updatemovie } from '../redux/slices/movieSlice'
// import { useForm } from 'react-hook-form';
// import { Button } from 'react-bootstrap';

// const Home = () => {
//   const dispatch=useDispatch()
//  const [updated,setupdatetask]=useState({})
// const [visible,setvisible]=useState({visibility:"hidden"})
//  const handleChange=(e)=>{
//   setupdatetask({...movieList,[e.target.name]:e.target.value})
//   console.log(updated)
// }
 
// const { movieList, isLoading } = useSelector((state) => state.movie);

//  const { register, handleSubmit, formState: { errors } } = useForm();
//  const onSubmit = data => {
//   dispatch(addmovie(data))
//   console.log(data)};
//  console.log(errors);
//  useEffect(()=>{dispatch(getmovies())},[dispatch])
//  console.log(getmovies())
//   return (
//     <div className='form'>
//     <form  onSubmit={handleSubmit(onSubmit)}>
//     <input type="text" placeholder="text" {...register('title')}/>
//     <input type="text" placeholder="desc" {...register('description')}/>
//     <input type="submit" />
//   </form>
//   {isLoading && <p>Loading</p>}
//   {Array.isArray(movieList) && movieList.map(el=>
//   <div>
//     <p>{el.title}</p>
//     <p>{el.description}</p>


//     <button onClick={()=>{(visible.visibility==="hidden")?
//       setvisible({visibility:"visible"}):setvisible({visibility:"hidden"})}}>update</button>

//     <div style={visible}>
//     <input type='text' placeholder='add name' name='title'onChange={handleChange}></input>
//    <input type='text' placeholder='add description' name='description'onChange={handleChange}></input>
//    <button onClick={()=>dispatch(updatemovie({...updated,_id:el._id}))}>Updating</button>

//     </div>

   
  
//   <Button onClick={()=>dispatch(deletemovie(el))}>Delete</Button> 
   
//   </div>
//   )}
//   </div>
//   )
// }

// export default Home


