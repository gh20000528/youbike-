import React, { useContext } from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'
import { searchBikeContext } from '../../context/searchBikeContext'
import './showtable.css'

const ShowTable = () => {
  const { bike, allBike } = useContext(searchBikeContext)

  const dataToDisplay = bike.length > 0 ? bike : allBike;

  
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
        {dataToDisplay.map((station, index) => (
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
