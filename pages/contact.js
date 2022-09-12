import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { HiLocationMarker } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


function Contact() {
  return (
    <div className='bg-sky-800 w-screen h-auto md:h-screen '>
      <div className='flex justify-around items-center mx-20 md:flex-row flex-col'>
        <div className='md:w-1/2 w-full md:p-10 my-10 md:my-0 flex-col'>
          <h1 className='text-4xl font-semibold text-white'>Get In Touch</h1>
          <p className='text-gray-300 font-semibold text-sm my-5'>

            Fill up the form and our Team will get back to you within 12 hours.</p>
          <div className='flex-col my-20 gap-5 flex'>
            <div className='flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full 
                   rounded-lg group cursor-pointer items-center'>
              <BsTelephoneFill className='text-xl text-white group-hover:text-gray-400' />
              <p className='text-white text-base font-semibold group-hover:text-gray-400'>
                +92-0123456789

              </p>

            </div>

            <div className='flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full 
                   rounded-lg group cursor-pointer items-center'>
              <GrMail className='text-xl text-white group-hover:text-gray-400' />
              <p className='text-white text-base font-semibold group-hover:text-gray-400'>
                info@abc.com

              </p>

            </div>

            <div className='flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full 
                   rounded-lg group cursor-pointer items-center'>
              <HiLocationMarker className='text-xl text-white group-hover:text-gray-400' />
              <p className='text-white text-base font-semibold group-hover:text-gray-400'>
                High St,Lahore

              </p>

            </div>

          </div>
          <div className='flex gap-8 justify-center md:justify-start'>
            <FaInstagram className='text-2xl text-white hover:text-gray-400 cursor-pointer' />
            <FaTwitter className='text-2xl text-white hover:text-gray-400 cursor-pointer' />
            <FaYoutube className='text-2xl text-white hover:text-gray-400 cursor-pointer' />
            <FaPinterest className='text-2xl text-white hover:text-gray-400 cursor-pointer' />
            <FaGithub className='text-2xl text-white hover:text-gray-400 cursor-pointer' />
          </div>

        </div>
        <div className='bg-white p-12 rounded-lg shadow-md'>
          <form >
            <div className='grid xl:grid-cols-2 xl:gap-10'>
              <input type="text"
                name='firstName'
                id='firstName'
                className='form-control block w-full px-3 py-2 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md  transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='First Name'
                required={true} />

              <input type="text"
                name='lastName'
                id='lastName'
                className='form-control block w-full px-3 py-2 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md  transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Last Name'
                required="" />

            </div><br/>
            <input type="email"
              name='email'
              id='email'
              className='form-control block w-full px-3 py-2 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md  transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Email'
              required={true} /><br/>

            <input type="subject"
              name='subject'
              id='subject'
              className='form-control block w-full px-3 py-2 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md  transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Subject'
              required={true}/><br/>
              <div className='flex justify-center'>
                <textarea
                      rows="3"
                      id='text_area'
                      className='form-control block w-full px-3 py-2 text-base font-normal
                       text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md  transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      placeholder='Your Message'
                      required={true} />

              </div><br/>
              <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>

                  Send Message

              </button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact