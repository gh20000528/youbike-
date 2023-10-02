import React, { useState, useEffect } from 'react'
import Menu from '../../components/menu/Menu'
import ShowTable from '../../components/showtable/ShowTable'
import axios from 'axios'
import './home.css'

const Home = () => {

  return (
    <div className='home'>
			<h1 className='title'>站點資訊</h1>
			<Menu/>
			<ShowTable/>
    </div>
  )
}

export default Home
