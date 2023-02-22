import React from 'react'

import { BsFillTelephoneFill} from "react-icons/bs";
import { HiSupport } from "react-icons/hi";
import { FiAperture } from "react-icons/fi";
import { AiOutlineArrowRight} from "react-icons/ai";

import supportImg from "../assets/support.jpg"

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
       
       <div className='w-full h-[700px] bg-gray-900/90 absolute'>
         <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
       </div>

       <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
               <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
               <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
               <p className='py-4 text-3xl text-slate-300'>Need a reliable and experienced team to develop your software? Look no further than our software development company. With a proven track record of success, we have the expertise and talent to turn your vision into reality, on time and within budget.</p>
          </div>
       

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
              
              <div className='p-8'>
                <BsFillTelephoneFill className='w-16 h-11 p-2.5 bg-indigo-600 text-white rounded-lg mt-[-3rem]'/>
                <h3 className='font-bold text-2xl my-6'>Sales</h3>
                <p className='text-gray-600 text-xl'>Our experienced developers and designers can create custom software solutions that fit your unique needs. Our dedicated sales team will guide you through the process and ensure your satisfaction. Contact us today for more information!.</p>
              </div>

              <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2'/></p>
              </div>

            </div>

            <div className='bg-white rounded-xl shadow-2xl'>
              
              <div className='p-8'>
                <HiSupport className='w-16 h-11 p-1.5 bg-indigo-600 text-white rounded-lg mt-[-3rem]'/>
                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                <p className='text-gray-600 text-xl'>Experience technical difficulties with your application? Our team at POWERSOFT offers reliable technical support to help you get back on track. Our expert developers will quickly diagnose and solve any issues, ensuring your application runs smoothly.</p>
              </div>

              <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2'/></p>
              </div>

            </div>

            <div className='bg-white rounded-xl shadow-2xl'>
              
              <div className='p-8'>
                <FiAperture className='w-16 h-11 p-2 bg-indigo-600 text-white rounded-lg mt-[-3rem]'/>
                <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                <p className='text-gray-600 text-xl'>Our team at POWERSOFT is available for interviews and comments on application development and related topics. We can provide expert insights and analysis to enhance your coverage. Contact us today to arrange an interview or for more information.</p>
              </div>

              <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2'/></p>
              </div>

            </div>
           </div>

        </div>

    </div>
  )
}

export default Support