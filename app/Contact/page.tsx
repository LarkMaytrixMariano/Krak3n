import React from 'react'
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className='items-center justify-center '>
      <div>
          <h1 className='font-black lg:text-[100px] kraken-gradient text-[70px]'>LET'S TALK</h1>
      </div>  
      <div className="flex max-w-[1240px] mx-auto mt-1 justify-center ">
          <form className="flex flex-col bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 py-8 my-5   text-sm shadow-xl lg:w-[800px] w-[450px]" action=''>
              <label className='text-[16px] leading-6 font-normal text-[#043F48] '>Email Address:</label>
              <input type="email" className="px-3 py-2 my-2 bg-custom rounded-lg" name="email"/>
              <label className='text-[16px] leading-6 font-normal text-[#043F48]'>Description:</label>
              <textarea className="px-3 py-2 my-2 bg-custom rounded-lg" name="Message" rows={8} cols={90} placeholder='Tell me in detail what you need :)'/> 

                  <div className='flex lg:justify-end justify-center'>
                      <button className="w-[170px] rounded-lg bg-[#8CE2F1] text-[#038AA2] py-2 mt-8 shadow-lg text-[16px] font-bold">Submit</button>
                  </div>
                  <div className='lg:text-end  text-center lg:mt-2 lg:justify-end justify-center mt-5'>
                   <p className='text-[#DFFAFF] font-normal text-[12px]'>Message sent! We will get back to you the soonest!</p>
                  </div>
          </form>
        </div>
    </div>
    
  )
}

export default Contact