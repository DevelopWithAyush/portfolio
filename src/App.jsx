import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Connect from './components/Connect'
import { useState } from 'react'

const App = () => {

  const [connect,setConnect] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Header setConnect={setConnect} />
        <Connect connect={connect } setConnect={setConnect} />
        <Routes>
          <Route path="/" element={<Home  setConnect={setConnect} />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  
    </>
  )
}

export default App
