// import React, { useEffect } from 'react'
// import "./style.css"
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { signup } from '../redux/slices/userSlice';
// import { useNavigate } from 'react-router-dom';
// const Register = () => {
//   const {errors: err, isAuth } = useSelector(state => state.user)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => {console.log(data);
//     dispatch(signup(data))}
// console.log("errors", errors);
// console.log("err",err);
// useEffect(() => {
//     if(isAuth) navigate('/')
// }, [isAuth,navigate,dispatch])
//   return (
//     <div>
//     <p> WELCOME TO REGISTER PAGE </p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="name" {...register("name", {required: true, max: 20, min: 6, maxLength: 20})} /> <br/>
//       <p className='error'> {errors.name && "Name is not required"} </p>
//       <input type="email" placeholder="email" {...register("email", {required: true, max: 20, min: 8, maxLength: 20})} /> <br/>
//       <p className='error'> {errors.email && "email is not valid"} </p>
//       <input type="password" placeholder="password" {...register("password", {required: true, max: 15, min: 8, maxLength: 15, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} /> <br/>
//       <p className='error'> {errors.password && "password is not valid"} </p>
//       <input type="submit" />
//     </form>
//     </div>
  
    
//   )
// }
// export default Register

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import "./style.css"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import './register.css'
const Register = () => {
    const {errors: err, isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
      dispatch(signup(data))}
  console.log("errors", errors);
  console.log("err",err);
  useEffect(() => {
      if(isAuth) navigate('/')
  }, [isAuth,navigate,dispatch])
  return (
    <div className='card-formee'>
    <section className='form-container'>
      <strong className='form-title'>Create New Account</strong>
      <form className='form' onSubmit={handleSubmit(onSubmit)} >
        <div className='form-group'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input type='text'
          className='form-input'
          id='username'
          placeholder='Enter your username' {...register("name", {required: true, max: 20, min: 6, maxLength: 20})}/> <br/>
          <p className='error'> {errors.name && "Name is not required"} </p>
          </div>
          <div className='form-group'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input 
          type='email'
          className='form-input'
          id='email'
          placeholder='enter your email'{...register("email", {required: true, max: 20, min: 8, maxLength: 20})}/> <br/>
          <p className='error'> {errors.email && "email is not valid"} </p>
          </div>
          <div className='form-group'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input 
          type='password'
          className='form-input'
          id='password'
          placeholder='enter your password' {...register("password", {required: true, max: 15, min: 8, maxLength: 15, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})}/> <br/>
          <p className='error'> {errors.password && "password is not valid"} </p>
          </div>
          <button className='form-btn'type='submit'> 
          Register
          </button>

      </form>
      <div className='form-footer'>
        Already have an account? <Link to='/login'>Login</Link>
      </div>
    </section>
    </div>
  )
}

export default Register
