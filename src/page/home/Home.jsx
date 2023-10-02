import React, { useState, useEffect } from 'react'
import Menu from '../../components/menu/Menu'
import ShowTable from '../../components/showtable/ShowTable'
import axios from 'axios'
import './home.css'

const Home = () => {
	const [allBike, setAllBike] = useState([])
	useEffect(() => {
		const All = async () =>{
			try{
					const res = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
					console.log(res.data);
					setAllBike(res.data)
			}catch(err){
					console.log(err);
			}
		}
		All()
		},[])
  return (
    <div className='home'>
			<h1 className='title'>站點資訊</h1>
			<Menu/>
			<ShowTable/>
    </div>
  )
}

export default Home
