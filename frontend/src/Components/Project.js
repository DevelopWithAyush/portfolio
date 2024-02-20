import React from 'react'
import projectbg from '../assets/img/color-sharp2.png'

function Project() {
    return (
        <section className='project' id='project'>
            <div className="projectcontainer">
                <div className="content">
                    <h3 data-aos="fade-down" data-aos-duration="500">project</h3>
                    <p data-aos="fade-down" data-aos-duration="1000">Over the past year, I have successfully completed several projects utilizing the skills and technologies I acquired. These projects primarily involved the development of web applications using a stack that includes React for the frontend, Express for the backend, and MongoDB as the database and  I have also worked on projects involving WordPress. </p>
               
                </div>
            </div>
            <img src={projectbg} alt="" className='project-bg-right' />
        </section>
    )
}

export default Project
