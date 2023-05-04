import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>HomePage
    <div>
        <Link to='/product'>
        <h2 style={{cursor:"pointer"}}>Go To Product PAge</h2>
        </Link></div>
    </div>
  )
}

export default HomePage