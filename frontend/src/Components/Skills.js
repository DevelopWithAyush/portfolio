import React from 'react'
import ProgressBar from './ProgressBar'
import skillbg from "../assets/img/color-sharp.png"


function Skills() {
   
    return (
        <section className="skills" id='skills' >
            <div data-aos="fade-down" data-aos-duration="1000">
                <div className="skillscontainer">
                    <div>
                    <h3 data-aos="fade-down" data-aos-duration="500">Skills</h3>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        In the past year, I have acquired various skills in website development through diverse resources such as YouTube, Instagram, and Google.</p>
                        </div>
                    <div className="skillrow" >
                        <ProgressBar percent= "65" skillname ="React" duration = "330"></ProgressBar>
                        <ProgressBar percent= "78" skillname ="Node.js" duration = "660"></ProgressBar>
                        <ProgressBar percent= "85" skillname ="mongodb" duration = "990"></ProgressBar>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={skillbg} alt="bg" />
        </section>
    )
}

export default Skills
