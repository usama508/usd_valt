import React from 'react'
import { CgClose } from "react-icons/cg";
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

function SignUp() {
  return (
    <div>
   




    <div >
      <div className="flex justify-end pr-12  cursor-pointer pt-5">
        <Link href={"/"}>
          <CgClose className="text-xl " />
        </Link>
      </div>
      <div className="mx-auto lg:p-6  flex justify-center sm:p-8 ">
        <div className=" flex justify-center lg:rounded-xl w-fit lg:shadow-2xl lg:mx-48  ">
          
          <div className="dark:bg-[#334155] lg:bg-white rounded-r-xl lg:px-7 ">
            <h2 className="mb-3 mt-3 text-sky-800 text-3xl font-semibold text-center">
              Sign up for an account
            </h2>
          
            <form
              noValidate=""
              action=""
              className="space-y-8 ng-untouched ng-pristine ng-valid mt-3"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className='flex justify-center'>
                <FaRegEnvelope className='text-sky-400 mr-2' />
                <input type='email' placeholder='E-mail' className=' rounded-lg outline-none  text-sm flex-1' />
                </div></div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                  <MdLockOutline className='text-sky-400 mr-2' />
                <input type='password' placeholder='Password' className='rounded-lg outline-none text-sm flex-1' />
                  </div>
                 
                </div>
                </div>
                <div className='flex items-center'>
              
              <Link href="/">
                <a className='border-2  items-center border-sky-800 text-sky-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-800 hover:text-white'>Sign Up</a>
              </Link></div>
            </form>

            <div className="flex items-center w-full my-4">
              <hr className="w-full " />
              <p className="px-3">OR</p>
              <hr className="w-full " />
            </div>
            
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
            <p className='items-center'>Already have a account?</p>
              <Link href='/signup'><a className='text-sky-800'><h5>log in</h5></a></Link>
           
             
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default SignUp