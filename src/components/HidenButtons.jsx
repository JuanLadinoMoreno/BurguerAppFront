import React, { useEffect, useState } from 'react'

const HidenButtons = () => {

  const [backToTopButton, setBackToTopButton] = useState(false)
  const [wtsButton, setWtsButton] = useState(false)
  useEffect(() => {
    
    window.addEventListener("scroll", function () {

      //muestra los btns de hacia arriba y wts
      if(this.window.scrollY > 100){
        setBackToTopButton(true)
        setWtsButton(true)
        // console.log("asdasdasd");
      }else{
        setBackToTopButton(false)
        setWtsButton(false)
      }
    })
    
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    // const top = document.getElementById('btop');
    // top.classList.toggle('top-sticky')
  }
  

  return (
    <>
    {
      backToTopButton &&(
        
        <button href="#" id="btop" className="btn-top" onClick={scrollUp}>
          <span className="fas fa-angle-up"></span>
          </button>
      )

      
    }

    {
      wtsButton &&(

        <a href="https://wa.me/522441213082" id="bwts" target='blank' className="btn-wts"> <i className="fab fa-whatsapp"></i></a>
      )
    }

      {/* {
        // SCROLL ABAJO
        window.addEventListener("scroll", function () {

          const top = document.getElementById('btop');
          top.classNameList.toggle('top-sticky', window.scrollY > 0)

          const wts = document.getElementById('bwts');
          wts.classNameList.toggle('wts-sticky', window.scrollY > 0)
        })
      } */}
    </>
  )
}

export default HidenButtons
