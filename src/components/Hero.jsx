import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <hero className="text-white w-full max-w-[1000px] mt-[-100px] mx-auto h-screen text-center flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold text-6xl md:text-7xl lg:text-8xl ">SENSAI SAN</h1>
        <p className="text-4xl md:text-5xl lg:text-6xl my-2 md:my-3">Educational Tasks for Champions</p>
        <div className="flex justify-center items-center">
            <p className="text-2xl md:text-3xl lg:text-4xl">Learn by </p>
            <Typed 
                strings={['creating', 'studying', 'reviewing']} 
                typeSpeed={120} backSpeed={140}
                loop
                className="pl-2 text-2xl md:text-3xl lg:text-4xl"/>
        </div>
        <button className="bg-[#00df9a] font-bold text-[#000300] active:text-white w-[200px] rounded-md my-6 mx-auto py-3">Get Started</button>
    </hero>
  )
}

export default Hero