import React from 'react'
import Connectbtn from './Connectbtn'
import Typed from 'typed.js';
import rightimg from "../assets/img/Connected world-bro.png"

function Banner() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['MERN Developer', 'wordpress developer'],
        typeSpeed: 120,
        backSpeed:50,
        loop:true,
        showCursor:false
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);




  return (
  <section className='banner' id='home'>
    <div className="left-banner">
        <p data-aos="fade-right" data-aos-duration="250">hey there</p>
        <h2 data-aos="fade-right" data-aos-duration="500">i am a <span ref={el}>wordpress developer</span></h2>
        <p data-aos="fade-right" data-aos-duration="750">Hello, I am <span>Ayush Dubey </span>, currently pursuing my B.Tech at MNIT Jaipur. I have been actively involved in website development for the past year.</p>
   <Connectbtn data-aos="fade-left" data-aos-duration="1000"/>
    </div>
    <div className="right-banner">
        <img src={rightimg} alt="" />
    </div>
    
  </section>
  )
}

export default Banner
