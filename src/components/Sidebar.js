import React from 'react'
import Navbar from './Navbar'
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className='sidebar'>

    {/* Different components are being used because we do not want to re render everything whenever the page gets refreshed...ya dig? */}
    <Navbar/>
    <Search/>
    <Chats/>
  
    </div>
  )
}

export default Sidebar