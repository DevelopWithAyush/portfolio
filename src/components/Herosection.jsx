import ayush from '../assets/images/myImage.png'
const Herosection = () => {

  return (
      <section id='home' className=' pt-[150px] xl:pt-10 relative container mx-auto gap-14  md:10 xl:gap-0 max-w-[88rem] flex flex-col-reverse xl:flex-row  items-center justify-start'>
      <div className=' relative    '>
        <div className='-z-1 w-[200.37px] md:w-[300px] xl:w-[332px] h-[300px] md:h-[500px] xl:h-[576.993px] rotate-[7.069deg] rounded-[576.993px] bg-[#01FFD1] blur-[150px] xl:blur-[203.6999969482422px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              <img className='z-10 relative' src={ayush} alt="image" />
          </div>
          {/* <div> */}
              <p className=' relative xl:absolute right-0 font-extrabold text-[#FFF] font-akira leading-[110%] capitalize  text-[24px]  md:text-[48px] '>hey <span className='text-[#01FFD1]'>,</span> <br />i am Video Editor <br />& web <span className='text-[#01FFD1]'>developer</span></p>
          {/* </div> */}
      
    </section>
  )
}

export default Herosection
