import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const searchBikeContext = createContext();

export const SearchBikeContextProvider = ({ children }) => {
  const [bike, setBike] = useState([]);
	const [allBike, setAllBike] = useState([])

  const searchBike = (e) => {
    // 你的搜索邏輯
		setBike(e)
  };


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
    <searchBikeContext.Provider value={{ bike, searchBike, allBike }}>
      {children}
    </searchBikeContext.Provider>
  );
};
