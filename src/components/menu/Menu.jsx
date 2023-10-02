import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'
import './menu.css'

const Menu = () => {
	const [allBike, setAllBike] = useState([])
	const [selectAll, setSelectAll] = useState(true);
  const [cityCheckboxes, setCityCheckboxes] = useState({});
	useEffect(() => {
		const All = async () =>{
			try{
					const res = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
					setAllBike(res.data)
					console.log(res.data.sarea)
			}catch(err){
					console.log(err)
			}
		}
		All()
		},[])

		const uniqueCities = new Set()

		allBike.forEach(bike => {
			uniqueCities.add(bike.sarea)
		})

		const uniqueCityArray = Array.from(uniqueCities)

		useEffect(() => {
			// 初始化每個縣市站點 checkbox 的狀態
			const initialCityCheckboxes = {}
			allBike.forEach(bike => {
				initialCityCheckboxes[bike.sarea] = true
			})
			setCityCheckboxes(initialCityCheckboxes)
		}, [allBike])
	
		const handleSelectAll = () => {
			setSelectAll(!selectAll)
			const updatedCityCheckboxes = {}
			Object.keys(cityCheckboxes).forEach(city => {
				updatedCityCheckboxes[city] = !selectAll
			})
			setCityCheckboxes(updatedCityCheckboxes)
		};
	
		const handleCityCheckboxChange = (city) => {
			const updatedCityCheckboxes = { ...cityCheckboxes }
			updatedCityCheckboxes[city] = !updatedCityCheckboxes[city]
			setSelectAll(Object.values(updatedCityCheckboxes).every(checkbox => checkbox))
	
			setCityCheckboxes(updatedCityCheckboxes)
		}
  const [cities, setCities] = useState([])

  useEffect(() => {
		const fakeCitiesData = [
			{ name: '台北市', district: [allBike.sarea] },
			{ name: '新竹市', district: ['東區', '北區', '香山區'] },
			{ name: '桃園市', district: ['桃園區', '中壢區', '平鎮區', '龍潭區', '八德區'] },
			{ name: '新北市', district: ['板橋區', '新莊區', '中和區', '永和區', '三峽區'] },
			{ name: '台南市', district: ['中西區', '東區', '南區', '北區', '安平區'] }
		]
		
    setCities(fakeCitiesData)
  }, [])


  return (
    <div>
      <div className='dropdown'>
				<select className="selectcity">
					<option value="">選擇縣市</option>
					{cities.map(city => (
						<option key={city.name} value={city.name}>{city.name}</option>
					))}
				</select>
				<input type="text" placeholder='搜尋站點' className='search'/>
      </div>
			<div className=''>
				<input type="checkbox" name='selectall' className='checkbox' checked={selectAll} onChange={handleSelectAll}/>
				<label htmlFor="selectall">全部勾選</label>
			</div>
			<div className='sarea'>
				<div className='left'>
					{ uniqueCityArray.map( bike => (
						<div>
							<input 
							type="checkbox" 
							name='selectall' 
							className='checkbox'
							checked={cityCheckboxes[bike]}
              onChange={() => handleCityCheckboxChange(bike)}/>
							<label htmlFor="selectall">{bike}</label>
						</div>
					))}
				</div>
				<div>
				<img src={process.env.PUBLIC_URL + '/454752d8-b8a6-4b17-9a51-c89b9d4cb07e.png'} alt="" className='img' />
				</div>
			</div>
    </div>
  )
}

export default Menu
