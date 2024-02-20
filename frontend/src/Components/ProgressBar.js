import React from 'react'
import { Circle } from 'rc-progress';

function ProgressBar(props) {
  const {percent,skillname ,duration} = props
  
  return (
    <div className='progressbar' data-aos="flip-down" data-aos-duration={duration}>
      <Circle
       percent={percent}
       strokeColor="rgba(153,45,117,1)"
       strokeWidth={11}
       trailColor='white'
       trailWidth={10}
       strokeLinecap='round'
       className='circlebar'
       >40%</Circle>
<h4 className='skillsname'>{skillname}</h4>
    </div>
  )
}

export default ProgressBar
