import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {



  return (
    <div className='w-full h-[calc(100vh-64px)] bg-black p-8 text-white px-16 flex justify-between items-center ${
      '>
      <div>
        <h1 className='text-[6vw] font-bold '>Welcome to CineQuest</h1>
        <p className='opacity-60 font-medium text-[1.25vw] mt-6 mr-4'>Find your favorite movies | Winter Assignment Project by Mohit Verma (1st year ChE)</p>
        
      </div>
      <div>
        <img 
        className=' h-[40vh] object-cover bg-center rounded-lg'
        src="https://images.adsttc.com/media/images/5f7d/fef2/63c0/170a/9100/0273/large_jpg/Jiangnan_Photography.jpg?1602092773" alt="" />
      </div>
    </div>
  )
}

export default Home