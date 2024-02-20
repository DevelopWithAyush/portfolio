import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Connectbtn() {
    return (
        <a href="/" class="connectbtn" data-aos="fade-right" data-aos-duration="1000">
           <Link to= "#connect"><span>connect</span></Link> 
            <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </a>
    )
}

export default Connectbtn
