import React, { useState, useEffect } from 'react'
import Select from '../../components/select/Select'
import axios from 'axios'

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
    <div>
      <h1>站點資訊</h1>
			<div>
				<Select/>
				<input type="text" name="" id="" />
			</div>
			<div>
				<span>checkbox</span>
			</div>
			<div>
				<span>table</span>
			</div>
    </div>
  )
}

export default Home
