import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className=' container max-h-screen mx-auto'>

        {/* navbar */}
      <NavBar></NavBar>

      {/* banner */}
      <Banner></Banner>

      {/* recipe section */}
      <Recipes></Recipes>
      
      </body>
  
    </>
  )
}

export default App
