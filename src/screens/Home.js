import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
   const navigate = useNavigate();    
    const navigateToabout = () => {
      
        navigate('about')
    }

  return (
    <div>

   <button onClick={navigateToabout}>Home</button>

    </div>

  )
}

export default Home