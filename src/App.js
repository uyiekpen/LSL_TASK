import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Details from './Components/Details'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
    </div>
        <Routes>
            <Route exact path ="/" element={<Home/>}/> 
            <Route exact path="/Details/:id" element={<Details/>}/>
        </Routes>
      
    </BrowserRouter>
  )
}

export default App