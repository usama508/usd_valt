/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>

            <h2 className='text-3xl font-bold text-sky-800 mb-2'>Sign in to Account</h2>
            <div className='border-2 w-10 border-sky-800 inline-block mb-2'></div>
            <div className='flex flex-col items-center'>
              <div className='bg-sky-200 w-64 rounded-lg p-2 flex items-center mb-3'>
                <div className='flex justify-between'>
                <FaRegEnvelope className='text-sky-400 mr-2' />
                <input type='email' placeholder='E-mail' className=' rounded-lg outline-none  text-sm flex-1' />
              </div></div>

              <div className='bg-sky-200 rounded-lg w-64 p-2 flex items-center mb-3'>
                <div className='flex justify-between'>
                <MdLockOutline className='text-sky-400 mr-2' />
                <input type='password' placeholder='Password' className='rounded-lg outline-none text-sm flex-1' />
              </div></div>
              <div className='flex justify-between w-64 mb-5'>
                <label className='flex items-center text-xs'><input type="checkbox" name="remember" className='mr-1'
                />Remember me</label>
                <Link href='#'>
                  <a className='text-xs'> Forgot Password</a>


                </Link>

              </div>
              <Link href="/">
                <a className='border-2 border-sky-800 text-sky-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-800 hover:text-white'>Log in</a>
              </Link>
              <p className='text-sky-400 my-3 '>-------OR-------</p>
              <div className='flex justify-center my-2'>
                <Link href='https://www.google.com/'>
                  <a className='border-2 border-gray-200  hover:text-sky-400 rounded-full p-3 mx-1'>
                    <FaGoogle className='text-sm' />
                  </a>


                </Link>

                <Link href='https://twitter.com/'>
                  <a className='border-2 border-gray-200  hover:text-sky-400 rounded-full p-3 mx-1'>
                    <FaTwitter className='text-sm' />
                  </a>


                </Link>

                <Link href='https://www.linkedin.com/'>
                  <a className='border-2 border-gray-200  hover:text-sky-400 rounded-full p-3 mx-1'>
                    <FaGithub className='text-sm' />
                  </a>


                </Link>

              </div>


              <p>Don't have a account?</p>
              <Link href='/signup'><a className='text-sky-800'><h5>sign up</h5></a></Link>

            </div>

          </div>
          


        </div>

      </div>
    </div>

  )
}

export default Login