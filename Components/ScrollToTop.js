import React from 'react'
import {useEffect,useState} from 'react'


function ScrollToTop() {
    const [backToTop,setBackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp =()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {
                backToTop && (
                    <button style={{
                        position: "fixed",
                        bottom: "50px",
                        right:"25px",
                        height: "50px",
                        width: "50px",
                        fontSize: "50px",
                        color: ' rgb(56 189 248)'
                    }}
                    onClick={scrollUp}>
                    <ion-icon name="chevron-up-circle"></ion-icon>
                    
                       
                    </button>
                )
            }
            
        </div>
    )
}

export default ScrollToTop;