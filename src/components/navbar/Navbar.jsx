import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import News from '../../page/News'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://www.youbike.com.tw/region/assets/images/logo.svg" alt="" className='logo'/>
      <div className='item'>
        <nav>
          <ul className='list'>
            <li>使用說明</li>
            <li>收費方式</li>
            <li><Link to="/">站點資訊</Link></li>
            <li><Link to="/news">最新消息</Link></li>
            <li>活動專區</li>
          </ul>
        </nav>
        <button className='btn'>登入</button>
      </div>
    </div>
  )
}

export default Navbar
