import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Herobar } from './Components/Herobar'
import { MainComponent1 } from './Components/MainComponents1'
import { MainComponents2 } from './Components/MainComponents2'
import { MainComponents3 } from './Components/MainComponents3'
import { MainComponents4 } from './Components/MainComponents4'
import { Footer } from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Herobar />
      <MainComponent1 />
      <MainComponents3 />
      <div className='maincomponentsDiv'>
        <MainComponents2 image="girl.png"
          firstpara="Wireless"
          secondpara="Reliable Wireless Solutions"
          thirdpara="Discover Wireless Freedom with Velionex – Explore flexible, high-speed options that keep you connected wherever you are."
          listItems={["Stay connected anywhere", "Seamless setup", "Flexible plans"]}
          button="Explore Wireless"
        />
        <MainComponents2 image="man.png"
          firstpara="Internet"
          secondpara="Internet Powerful Connections"
          thirdpara="Explore High-Speed Internet with Velionex – Flexible plans to keep you connected, every day."
          listItems={["Fast, Reliable Speeds ", "Customized Options", "Dependable Service"]}
          button="Explore Internet"
        />
        <MainComponents2 image="movie.png"
          firstpara="Directv"
          secondpara="DirectvPremium Entertainment"
          thirdpara="Explore DIRECTV with Velionex – tailored plans to bring you the best in TV and streaming, wherever you are."
          listItems={["Hundreds of Channels ", "Stream on Any Device", "Crystal-Clear HD and"]}
          button="Explore Directv" />
      </div>
        <MainComponents4  />
       <Footer/>
    </>
  )
}

export default App
