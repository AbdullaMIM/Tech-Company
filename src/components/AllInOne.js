import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const AllInOne = () => {
  return (
    <div name='platform' className='w-full my-32'>
        
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>All In One Platform</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>From design to development, testing, and deployment, we provide end-to-end services to deliver high-quality software that meets your business needs.</p>
            
            <div className='grid sm:gid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>UI/UX Design</h3>
                     <p className='text-lg pt-2 pb-4'>Design your application with eye-catching interfaces.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Software Development</h3>
                     <p className='text-lg pt-2 pb-4'>Develop your application with latest technologies.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Software Update</h3>
                     <p className='text-lg pt-2 pb-4'>Update your application with current trends.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Maintenance and Update</h3>
                     <p className='text-lg pt-2 pb-4'>Get the software maintenance, including bug fixes, updates, and enhancements.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Cloud Solutions</h3>
                     <p className='text-lg pt-2 pb-4'>Get seamless cloud solutions for your business needs.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Quality Assurance</h3>
                     <p className='text-lg pt-2 pb-4'>Ensuring quality by identifying bugs, corner cases & performance bottlenecks.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Product Development</h3>
                     <p className='text-lg pt-2 pb-4'>Bringing your vision to life by building you great digital products.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                       <AiOutlineCheckCircle className='w-10 h-8 mr-4 text-green-600'/>
                    </div>
                    <div>
                     <h3 className='font-bold text-lg'>Customized Software Development</h3>
                     <p className='text-lg pt-2 pb-4'>Helping you build your dream digital product.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AllInOne