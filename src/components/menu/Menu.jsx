import React from 'react'
import  { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import axios from 'axios'
import './menu.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const Menu = () => {
	const [allBike, setAllBike] = useState([])
	const [selectedCity, setSelectedCity] = useState('')
  const [selectedDistricts, setSelectedDistricts] = useState([])
	const [search, setSearch] = useState('')
	const [selectAll, setSelectAll] = useState(true);
	const [cityCheckboxes, setCityCheckboxes] = useState({});
	console.log(selectedDistricts)

	useEffect(() => {
		const fetchData = async () => {
		try {
			const res = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
			setAllBike(res.data)
		} catch (err) {
			console.log(err)
		}
	}

		fetchData()
	}, [])

	const sareaValues = allBike.map(station => station.sarea)
	const uniqueSareas = [...new Set(sareaValues)]
	
	const fakeCitiesData = [
		{ name: '台北市', district: uniqueSareas },
		{ name: '新北市', district: ['板橋區', '新莊區', '中和區', '永和區', '三峽區'] },
		{ name: '桃園市', district: ['桃園區', '中壢區', '平鎮區', '龍潭區', '八德區'] },
		{ name: '台中市', district: ['中區', '東區', '南區', '西區', '北區'] },
		{ name: '台南市', district: ['中西區', '東區', '南區', '北區', '安平區'] },
		{ name: '高雄市', district: ['楠梓區', '左營區', '鼓山區', '三民區', '苓雅區'] },
	]

	const handleCityChange = (event) => {
    const selectedCity = event.target.value
    setSelectedCity(selectedCity)

    const cityData = fakeCitiesData.find(city => city.name === selectedCity)
    const districts = cityData ? cityData.district : []
    setSelectedDistricts(districts)
  };

	const cleanhandler = () => {
		setSelectedCity('')
		setSelectedDistricts([])
	}

	const searchHandler = (e) => {
		e.preventDefault()

	}

	useEffect(() => {
		const initialCityCheckboxes = {}
		allBike.forEach(bike => {
			initialCityCheckboxes[bike.sarea] = true
		})
		setCityCheckboxes(initialCityCheckboxes)
	}, [allBike])

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    const updatedCityCheckboxes = {};
    Object.keys(cityCheckboxes).forEach((city) => {
      updatedCityCheckboxes[city] = !selectAll;
    });

    setCityCheckboxes(updatedCityCheckboxes);
  };

  const handleCityCheckboxChange = (district) => {
    const updatedCityCheckboxes = { ...cityCheckboxes };
    updatedCityCheckboxes[district] = !updatedCityCheckboxes[district];

    // 檢查是否全部選中，是的話設定全選狀態為 true
    const allChecked = Object.values(updatedCityCheckboxes).every((checkbox) => checkbox);
    setSelectAll(allChecked);

    setCityCheckboxes(updatedCityCheckboxes);
  };
  return (
    <div>
			<div className='selectcity'>
				<FormControl>
					<Select className="dropdown" onChange={handleCityChange} value={selectedCity}>
					<MenuItem value="" disabled className="defaultMenuItem">請選擇縣市</MenuItem>
						{fakeCitiesData.map((city, index) => (
							<MenuItem key={index} value={city.name} className="cityitem">{city.name}</MenuItem>
						))}
					</Select>
				</FormControl>
				<input 
					type="text" 
					placeholder='搜尋站點' 
					className='search'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					/>
				<AiOutlineSearch 
					className='searchicon' 
					onClick={searchHandler}
				/>
				<button onClick={cleanhandler} className='cleanbtn'>一鍵刪除</button>
			</div>
			<div className=''>
				<input 
					type="checkbox" 
          name='selectall' 
          className='checkbox' 
          checked={selectAll} 
          onChange={handleSelectAll}  />
				<label htmlFor="selectall">全部勾選</label>
			</div>
			<div className='sarea'>
				<div className='left'>
					{ selectedDistricts.map( (district, index) => (
						<div key={index}>
							<input 
							type="checkbox"
							name='select'
							className='checkbox'
							checked={cityCheckboxes[district]}
              onChange={() => handleCityCheckboxChange(district)}
							value={district}/>
							<label htmlFor="select">{district}</label>
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
