/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'


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
        <Footer/>
    </div>
  )
}

export default Layout