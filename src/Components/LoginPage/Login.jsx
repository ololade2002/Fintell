
import React from 'react'
import './Login.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
});

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    navigate('/dashboard')
    reset();
  };


  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}  className=' mx-auto '>
     <div className='flex xl:flex-row flex-col-reverse justify-center items-center'>
      <div className='flex-1 flex flex-col items-center justify-center py-14 md:py-20 px-5 md:px-20 h-[100vh] bg-[#183835]'>
         <h2 className='text-[40px] md:text-[55px] text-[#bfdacb] leading-[1.3]'>Discover the powerful features of Fintell</h2>
         <p className='text-white font-raleway text-[16px] md:text-[19px] pt-5'>Seamlessly integrate trusted payment processors for secure and hassle-free financial transactions, 
          ensuring peace of mind for both you and your clients.</p>
       </div>

       <div className='flex-1 py-12 px-5 md:px-20'>
         <div className=' px-8 py-4 box'>
          <h2 className='font-[600] font-dmSans text-[31px] pb-1 text-center'>Log in to your account</h2>
          <p className='font-dmSans text-[19px] text-[#535252] font-[300]  text-center pb-4'>Welcome back! Please enter your details.</p>

          <div className='pt-6 flex flex-col gap-5'>
           <div className='flex flex-col gap-1'>
             <label className='text-[600] text-black font-dmSans text-[19px]' htmlFor="email">Email address</label>
             <input name="email" id="email" autoComplete='email'
             type='text' placeholder='you@example.com' {...register("email")} 
             className=' bg-[#f1fff8] placeholder:text-gray-700 p-2 rounded-lg'  />
             <p>{errors.email?.message}</p>
             
           </div>

           <div className='flex flex-col gap-1'>
             <label  className='text-[600] font-dmSans text-[19px]' htmlFor="password">Password:</label>
             <input name="password" id="password" autoComplete='current-password' type='password'
             placeholder='Enter 8 characters or more' {...register("password")} required  
             className=' bg-[#f1fff8] p-2 rounded-lg  placeholder:text-gray-700'  />
             <p>{errors.password?.message}</p>
           </div>

           <button type='submit' className='text-white bg-[#183835] mt-4 py-1.5 text-center rounded-lg font-raleway text-[19px] font-[500]'>Log In</button>

           <div className='text-center mt-4'>
            <p className='text-[#212121] text-[16px]'>Don't have an account? <a href='/signup' className='text-[#183835] font-[600]'>Create an account</a></p>
           </div>
          </div>

  
         </div>
       </div>
     </div>
    </form>
  )
}

export default Login