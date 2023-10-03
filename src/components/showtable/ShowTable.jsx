import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'
import './showtable.css'

const ShowTable = () => {
  const [allBike, setAllBike] = useState([])
	useEffect(() => {
		const All = async () =>{
			try{
					const res = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
					setAllBike(res.data)
			}catch(err){
					console.log(err);
			}
		}
		All()
		},[])
  return (
    <div className='table'>
      <table className='biketable'>
        <thead>
          <tr>
            <th>縣市</th>
            <th>區域</th>
            <th>站點名稱</th>
            <th>可借車輛</th>
            <th>可還空位</th>
          </tr>
        </thead>
        <tbody>
        {allBike.slice(0, 6).map((station, index) => (
            <tr key={index} className={ index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>台北市</td>
              <td>{station.sarea}</td>
              <td>{station.sna}</td>
              <td>{station.sbi}</td>
              <td>{station.bemp}</td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  )
}

export default ShowTable
