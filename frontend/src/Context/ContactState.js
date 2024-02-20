import React from 'react'
import ContactContext from './contactContext'

function ContactState(props) {

    const addcontact = async(firstName,lastName,email,message)=>{

        try {
            const response = await fetch(`https://portfolio-nu-weld-39.vercel.app//api/contact/addcontact`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify({firstName,lastName,email,message})
            })
            if(response.ok){
                console.log(
                    "contact add to mongoose"
                )
            }
        } catch (error) {
            
        }
    }

  return (
<ContactContext.Provider value={{addcontact}}>{props.children}</ContactContext.Provider>
  )
}

export default ContactState
