import React, { useState } from 'react'
import "./navbar.css"
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import News from '../../page/News'


const Navbar = () => {
  const [ open, setOpen ] = useState(false)
  const location = useLocation()

  const openHandler = () => {
    setOpen(!open)
  }
  return (
    <div className='navbar'>
      <img src="https://www.youbike.com.tw/region/assets/images/logo.svg" alt="" className='logo'/>
      <div className='hamburger'>
        { open ? 
          <AiOutlineClose onClick={ openHandler }/>:
          <AiOutlineMenu onClick={ openHandler }/>
        }
        { open && 
          <div className='phonemenu'>
            <nav>
              <ul className='list'>
                <li>使用說明</li>
                <li>收費方式</li>
                <li><Link to="/" style={{ color: location.pathname === '/' ? '#677510' : '' }}>站點資訊</Link></li>
                <li><Link to="/news" style={{ color: location.pathname === '/news' ? '#677510' : '' }}>最新消息</Link></li>
                <li>活動專區</li>
              </ul>
            </nav>
            <button className='btn'>登入</button>
          </div>
        }
      </div>
      <div className='item'>
        <nav>
          <ul className='list'>
            <li>使用說明</li>
            <li>收費方式</li>
            <li><Link to="/" style={{ color: location.pathname === '/' ? '#B5CC22' : '' }}>站點資訊</Link></li>
            <li><Link to="/news" style={{ color: location.pathname === '/news' ? '#B5CC22' : '' }}>最新消息</Link></li>
            <li>活動專區</li>
          </ul>
        </nav>
        <button className='btn'>登入</button>
      </div>
    </div>
  )
}

export default Navbar
