import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmovies, deletemovie, addmovie, updatemovie } from '../redux/slices/movieSlice'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

const AddMovie = () => {
    const dispatch=useDispatch()
    const [updated,setupdatemovie]=useState({})
   const [visible,setvisible]=useState({visibility:"hidden"})
    const handleChange=(e)=>{
     setupdatemovie({...movieList,[e.target.name]:e.target.value})
     console.log(updated)
   }
    
    const {movieList,isLoading}=useSelector((state) => state.movie)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
     dispatch(addmovie(data))
     console.log(data)};
    console.log(errors);
    useEffect(()=>{dispatch(getmovies())},[dispatch])
    console.log(getmovies())
     return (
      <div className='card-forme-add'>
       <div className='form-add'>
       <form  onSubmit={handleSubmit(onSubmit)}>
       <input  className='input-add' type="text" placeholder="text" {...register('title')}/>
       <input className='input-add' type="text" placeholder="desc" {...register('desc')}/>
       <input  className='input-add' type="text" placeholder="img" {...register('img')}/>
       <input className='input-add' type="submit" />
     </form>
     </div>
     {isLoading && <p>Loading</p>}
     {Array.isArray(movieList) && movieList.map(el=>
     <div>
        <h1>...</h1>
       <p>{el.title}</p>
       <p>{el.desc}</p>
       <p>{el.img}</p>
   
   
       <button onClick={()=>{(visible.visibility==="hidden")
       ?   setvisible({visibility:"visible"}):setvisible({visibility:"hidden"})}}>update</button>
   
       <div style={visible}>
       <input type='text' placeholder='update name' name='title'onChange={handleChange}></input>
      <input type='text' placeholder='update description' name='desc'onChange={handleChange}></input>
      <input type='text' placeholder='update img' name='img'onChange={handleChange}></input>
      <button onClick={()=>dispatch(updatemovie({...updated,_id:el._id}))}>Updating</button>
   
       </div>
   
      
     
     <Button onClick={()=>dispatch(deletemovie(el))}>Delete</Button> 
      
     </div>
     )}
     </div>
     )
   }

export default AddMovie
