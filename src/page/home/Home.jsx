import React, { useState, useEffect } from 'react'
import Menu from '../../components/menu/Menu'
import ShowTable from '../../components/showtable/ShowTable'
import axios from 'axios'
import { SearchBikeContextProvider } from '../../context/searchBikeContext'
import './home.css'

const Home = () => {
  

  return (
    <div className='home'>
			<h1 className='title'>站點資訊</h1>
      <SearchBikeContextProvider>
        <Menu/>
        <ShowTable/>
      </SearchBikeContextProvider>
    </div>
  )
}

export default Home
