import Aboutme from "../components/Aboutme"
import CallToAction from "../components/CallToAction"
import Herosection from "../components/Herosection"
import Project from "../components/Project"
import Services from "../components/Services"
import Steps from "../components/Steps"
import Tech from "../components/Tech"

const Home = ({ setConnect }) => {
  return (
      <>
      <Herosection/>
      <Aboutme/>
      <Project/>
      <Tech/>
      <Services/>
      <Steps/>
      <CallToAction setConnect={setConnect} />
      </>
  )
}

export default Home
