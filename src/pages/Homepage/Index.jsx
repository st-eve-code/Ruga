import React from 'react';
import Header from '../../components/Header';
import InfiniteScroll from '../../components/InfiniteScroll';

function Index() {
  return (
    <div className="p-2" style={{backgroundColor: 'rgb(11,11,11)'}}>
      <Header />
      
      {/* Welcome Hero Section */}
      <div className="flex items-center justify-center px-4 md:px-8 lg:px-16 -mt-8 md:-mt-12">
        <div className="max-w-3xl text-center">
          {/* Animated Badge */}
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
            <span className="text-xs md:text-sm text-gray-300 font-light tracking-wide" style={{fontFamily: "'Poppins', sans-serif"}}>
              ✨ YOUR FITNESS JOURNEY STARTS HERE
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{fontFamily: "'Poppins', sans-serif"}}>
            Transform Your Body,
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Elevate Your Mind
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed" style={{fontFamily: "'Poppins', sans-serif", fontWeight: 300}}>
            Discover world-class fitness programs designed to push your limits, build strength, and unlock your true potential.
          </p>
          
          {/* CTA Button */}
          <button className="group relative px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm md:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50" style={{fontFamily: "'Poppins', sans-serif"}}>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore More
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Infinite Scroll Section */}
      <InfiniteScroll/>
    </div>
  )
}

export default Index
