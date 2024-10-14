"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // If using EmailJS for sending emails
import { motion, Variants } from 'framer-motion'


// Define the function with explicit types
const createIconVariants = (duration: number, offset: number): Variants => ({
  initial: { y: offset },
  animate: {
    y: [offset, -offset],
    transition: {
      duration: duration,
      ease: "linear" as const, // Type assertion to specify the exact type
      repeat: Infinity,
      repeatType: "reverse" as const, // Type assertion to specify the exact type
    },
  },
});

// You can define your duration and offset here
const duration: number = 1; // Change this to your desired duration
const offset: number = 5; // Change this to your desired offset

const Contact = () => {
  const variants = createIconVariants(duration, offset);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setLoading(true);  // Start loading when form is submitted

    
    try {
      // EmailJS configuration
      await emailjs.send('service_bev8thq', 'template_lf204fc', {
        email,
        message,
      }, '3RbUsOJYoVbeghzw6');
      
      // If email is successfully sent
      setIsSent(true);
      setLoading(false);  // Stop loading
      setEmail('');
      setMessage('');
      setError('');

      // Hide the success message after 5-10 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000); // 5 seconds

    } catch (err) {
      console.error(err);
      setError('Failed to send the message. Please try again.');
      setLoading(false);  // Stop loading on error
    }
    };

    return (
      <div className="items-center justify-center">
        <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1.5 }}
           viewport={{ once: true }}       
        >
          <h1 className="font-black lg:text-[85px] kraken-gradient text-[70px] max-sm:text-[50px]">HAPPY TO CONNECT</h1>
        </motion.div>  
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}        
        className="flex max-w-[1240px] mx-auto mt-1 justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col slider_background rounded-xl px-7 py-8 my-5 text-sm shadow-xl lg:w-[809px] w-[380px] carousel_width">
            <label className="text-[16px] leading-6 font-normal text-[#043F48]">Email Address:</label>
            <input
              type="email"
              className="px-3 py-2 my-2 bg-custom rounded-lg"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="text-[16px] leading-6 font-normal text-[#043F48]">Description:</label>
            <textarea
              className="px-3 py-2 my-2 bg-custom rounded-lg"
              name="message"
              rows={8}
              cols={90}
              placeholder="Tell me in detail what you need :)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <motion.div 
              initial="initial"
              animate="animate"
              variants={variants}            
            className="flex lg:justify-end justify-center">
              <button
                className="w-[170px] rounded-lg bg-[#8CE2F1] text-[#038AA2] py-2 mt-8 shadow-lg text-[16px] font-bold"
                type="submit"
                disabled={loading}  // Disable button while loading
              >
                {loading ? 'Sending...' : 'Submit'}  {/* Show 'Sending...' when loading */}
              </button>
            </motion.div>
  
            <div className="lg:text-end text-center lg:mt-2 lg:justify-end justify-center mt-5">
              {isSent && (
                <p className="text-[#DFFAFF] font-normal text-[12px]">Message sent! We will get back to you the soonest!</p>
              )}
  
              {error && (
                <p className="text-[#FF0000] font-normal text-[12px]">{error}</p>
              )}
            </div>
          </form>
        </motion.div>  
      </div>
    );
  };

export default Contact;
