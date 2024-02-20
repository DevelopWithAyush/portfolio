import React from 'react'

function Footer() {
    const date = new Date().getFullYear()
  return (
   <footer className='footer'>
    <div className="footer-socialmedia">
    <a target='next' href='https://www.instagram.com/developwithayush/' data-aos="fade-down" data-aos-duration="200" className=" socialmedia instagram"><i class="fa-brands fa-instagram"></i></a>
          <a target='next' href='https://github.com/DevelopWithAyush' data-aos="fade-down" data-aos-duration="400" className=" socialmedia github"><i class="fa-brands fa-github"></i></a>
          <a target='next' href='https://www.facebook.com/profile.php?id=61554674960585' data-aos="fade-down" data-aos-duration="600" className=" socialmedia facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a target='next' href='/' data-aos="fade-down" data-aos-duration="800" className=" socialmedia x"><i class="fa-brands fa-x-twitter"></i></a>
          <a target='next' href='/' data-aos="fade-down" data-aos-duration="1000" className=" socialmedia linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
          
    </div>
    <p>Copyright © {date} DevelopWithAyush.com</p>

   </footer>
  )
}

export default Footer
