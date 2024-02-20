import React, { useContext, useState } from 'react'
import connectimg from "../assets/img/contact-img.svg"
import contactContext from '../Context/contactContext'
function Connect() {
  const context = useContext(contactContext)
  const {addcontact} = context;
const [credentials,setcredentials] = useState({firstName:"",lastName:"",email:"",message:""})


const onchange = (e)=>{
  setcredentials({...credentials,[e.target.name]:e.target.value})
}
const handleonclick = (e)=>{
  e.preventDefault()
  addcontact(credentials.firstName,credentials.lastName,credentials.email,credentials.message)
  setcredentials({firstName:"", lastName:"", email:"", message:""})
  alert("we will contact you soon")
}


  return (
    <section className='connect' id='connect'  > 
    <div className="connectleft" data-aos="fade-down" data-aos-duration="1000">
<img src={connectimg} alt="" />
    </div>
    <div className="connectright">
       <h3 data-aos="fade-down" data-aos-duration="200">connect</h3>
       <p data-aos="fade-down" data-aos-duration="200">Give your detail i will contact you soon</p>
       <form action="" className='form' onSubmit={handleonclick}>
        <div className="name" data-aos="fade-down" data-aos-duration="400">

  <input type="text"  name='firstName' required  className='input-field' placeholder='FirstName' onChange= {onchange} value={credentials.firstName}/>
  <input type="text"  name='lastName' required  className='input-field' placeholder='LastName' onChange= {onchange} value={credentials.lastName}/>
        </div>
        <input type="email" name='email' placeholder='Email' className='input-fieldemail' data-aos="fade-down" data-aos-duration="600" onChange= {onchange} value={credentials.email}/>
        <textarea required name="message"  cols="300" rows="10" placeholder='Why You Want To Connect Us ?' data-aos="fade-down" data-aos-duration="800" onChange= {onchange} value={credentials.message}></textarea>
        <button data-aos="fade-down" data-aos-duration="1000" onClick={handleonclick}>submit</button>
       </form>
    </div>
    </section>
  )
}

export default Connect;
