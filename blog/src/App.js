import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Blog from './Components/Blog.jsx'
import Addblog from './Components/Addblog'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Blog/>}/>
          <Route path='/add' element={<Addblog/>}/>
          
          </Routes>
      
       </div>
  )
}

export default App