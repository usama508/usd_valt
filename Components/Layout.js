/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import  Action from './Action'


function Layout({children}) {
  return (
    <div>
      <Head>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
       <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
        <Navbar/>
        
        <main>
            {children}

        </main>
        <Action/>
        <Footer/>
    </div>
  )
}

export default Layout