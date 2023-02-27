import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>

        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Trusted by people across the world</h2>
            <p className='text-2xl py-6 text-gray-500'>Empower your business with our custom software development services. From design to implementation, our team of experienced developers will work closely with you to deliver solutions that meet your specific needs and exceed your expectations.
            </p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100+</p>
                <p className='text-gray-900 font-medium mt-2 text-base'>Completed Projects</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-900 font-medium mt-2 text-base'>Delivery</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600 '>30+</p>
                <p className='text-gray-900 font-medium mt-2 text-base'>Employees</p>
            </div>
        </div>

      </div>

    </div>
  )
}

export default About