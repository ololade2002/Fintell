<<<<<<< HEAD

import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
  name: yup.string().required('Name is required'),
});

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    navigate('/login')
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}  className=' mx-auto '>
    <div className='flex flex-col-reverse xl:flex-row-reverse justify-center items-center'>
     <div className='flex-1 flex flex-col items-center justify-center  py-14 md:py-20 px-5 md:px-20 h-[100vh] bg-[#183835]'>
        <h2 className='text-[40px] md:text-[55px] text-[#bfdacb] leading-[1.3]'>Unlock your Finances today with Fintell</h2>
        <p className='text-white font-raleway text-[16px] md:text-[19px] pt-5'>Seamlessly integrate trusted payment processors for secure and hassle-free financial transactions, 
         ensuring peace of mind for both you and your clients.</p>
      </div>

      <div className='flex-1 my-8 xl:my-0 px-5 md:px-20'>
        <div className=' px-8 py-6 box'>
         <h2 className='font-[600] font-dmSans text-[31px] pb-0.5 text-center'>Create an account</h2>
         <p className='font-dmSans text-[19px] text-[#535252] font-[300] text-center pb-4'>Welcome back! Please enter your details.</p>

         <div className='pt-2 flex flex-col gap-5'>
         <div className='flex flex-col gap-1'>
            <label className='text-[600] font-dmSans text-[19px]' htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" autoComplete="name"
            {...register("name")}
            className=' bg-[#f1fff8] placeholder:text-gray-700 p-2 rounded-lg' placeholder='John Doe' />
            <p>{errors.name?.message}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[600] font-dmSans text-[19px]' htmlFor="email">Email address:</label>
            <input name="email" id="email" autoComplete='email'
             {...register("email")} placeholder='you@example.com'
            type='text' className=' bg-[#f1fff8] placeholder:text-gray-700 p-2 rounded-lg'  />
            <p>{errors.email?.message}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <label  className='text-[600] font-dmSans text-[19px]' htmlFor="password">Password:</label>
            <input type='password' name="password" id="password" autoComplete='current-password'
            placeholder='Enter 8 characters or more' {...register("password")} required
            className=' bg-[#f1fff8] p-2 rounded-lg  placeholder:text-gray-700'  />
            <p>{errors.password?.message}</p>
          </div>

          <button type='submit' className='text-white bg-[#183835] mt-4 py-1.5 text-center rounded-lg font-raleway text-[19px] font-[500]'>Sign up</button>

          <div className='text-center mt-4'>
           <p className='text-[#212121] text-[16px]'>Already have an account? <a href='/login' className='text-[#183835] font-[600]'>Log in</a></p>
          </div>
         </div>

 
        </div>
      </div>
    </div>
   </form>
  )
}

=======

import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
  name: yup.string().required('Name is required'),
});

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    navigate('/login')
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}  className=' mx-auto '>
    <div className='flex flex-col-reverse xl:flex-row-reverse justify-center items-center'>
     <div className='flex-1 flex flex-col items-center justify-center  py-14 md:py-20 px-5 md:px-20 h-[100vh] bg-[#183835]'>
        <h2 className='text-[40px] md:text-[55px] text-[#bfdacb] leading-[1.3]'>Unlock your Finances today with Fintell</h2>
        <p className='text-white font-raleway text-[16px] md:text-[19px] pt-5'>Seamlessly integrate trusted payment processors for secure and hassle-free financial transactions, 
         ensuring peace of mind for both you and your clients.</p>
      </div>

      <div className='flex-1 my-8 xl:my-0 px-5 md:px-20'>
        <div className=' px-8 py-6 box'>
         <h2 className='font-[600] font-dmSans text-[31px] pb-0.5 text-center'>Create an account</h2>
         <p className='font-dmSans text-[19px] text-[#535252] font-[300] text-center pb-4'>Welcome back! Please enter your details.</p>

         <div className='pt-2 flex flex-col gap-5'>
         <div className='flex flex-col gap-1'>
            <label className='text-[600] font-dmSans text-[19px]' htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" autoComplete="name"
            {...register("name")}
            className=' bg-[#f1fff8] placeholder:text-gray-700 p-2 rounded-lg' placeholder='John Doe' />
            <p>{errors.name?.message}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[600] font-dmSans text-[19px]' htmlFor="email">Email address:</label>
            <input name="email" id="email" autoComplete='email'
             {...register("email")} placeholder='you@example.com'
            type='text' className=' bg-[#f1fff8] placeholder:text-gray-700 p-2 rounded-lg'  />
            <p>{errors.email?.message}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <label  className='text-[600] font-dmSans text-[19px]' htmlFor="password">Password:</label>
            <input type='password' name="password" id="password" autoComplete='current-password'
            placeholder='Enter 8 characters or more' {...register("password")} required
            className=' bg-[#f1fff8] p-2 rounded-lg  placeholder:text-gray-700'  />
            <p>{errors.password?.message}</p>
          </div>

          <button type='submit' className='text-white bg-[#183835] mt-4 py-1.5 text-center rounded-lg font-raleway text-[19px] font-[500]'>Sign up</button>

          <div className='text-center mt-4'>
           <p className='text-[#212121] text-[16px]'>Already have an account? <a href='/login' className='text-[#183835] font-[600]'>Log in</a></p>
          </div>
         </div>

 
        </div>
      </div>
    </div>
   </form>
  )
}

>>>>>>> e637b3d0f48a11f1dd9dbc602c58616be201a7bd
export default Signup