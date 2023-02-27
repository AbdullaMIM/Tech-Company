import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'

const Pricing = () => {
  return (
    <div name="pricing" className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'> </div>
        
           <div className='max-w-[1240px] mx-auto py-12'>

            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>Competitive pricing for expert IT services.</h3>
                <p className='text-3xl'>Choose the perfect package for your needs and let us take care of the rest.</p>
            </div>

            <div className='grid md:grid-cols-2'>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-4xl font-bold py-4 flex'>$39<span className='text-xl text-slate-500 flex flex-col justify-end'>/project</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Get the STANDARD package for following services.</p>
                    <div className='text-xl relative'>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>UI/UX Design</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Software Development(Medium Level)</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Software Updates</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Maintenance and Update(Medium Level)</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Cloud Solutions(Medium Level)</p>

                        <button className='w-full py-3 my-4'>Get Started</button>
                    </div>
                </div>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-4xl font-bold py-4 flex'>$79<span className='text-xl text-slate-500 flex flex-col justify-end'>/project</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Get the STANDARD package for following services.</p>
                    <div className='text-xl'>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Software Development(Large Level)</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Product Development(Large Level)</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Customized Software Development</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Cloud Solutions(Large Level)</p>
                        <p className='flex py-4'><AiOutlineCheck className='w-10 h-5 mr-5 mt-2 text-green-600'/>Maintenance and Update(Large Level)</p>
                       <button className='w-full py-3 my-4'>Get Started</button>
                    </div>
                </div>
                
            </div>
 
           
        
        </div>
    </div>
  )
}

export default Pricing