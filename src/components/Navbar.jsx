import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import {menu,close,mylogo} from '../assets'

const Navbar = () => {
  const [active, setactive] = useState("")
  const [Toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link className='gap-2 flex items-center' to="/"
           onClick={()=>
           {
            setactive("")
            window.scroll(0,0)
          }}>
            <img src={mylogo} alt="mylogo" className='h-9 w-9 object-contain'/>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Srinjoy &nbsp;<span className='sm:block hidden'>| Software Developer</span></p>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=>(
              <li
              key={link.id}
              className={`${active===link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>setactive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>  
            ))}
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img className='w-[28px] h-[28px] object-contain cursor-pointer' src={Toggle?close:menu} alt="menu" onClick={()=>setToggle(!Toggle)}>
            </img>
            <div className={`${!Toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link)=>(
              <li
              key={link.id}
              className={`${active===link.title?"text-white":"text-secondary"} text-poppins font-medium text-[16px] cursor-pointer`}
              onClick={()=>{setactive(link.title)
                 setToggle(!Toggle)}}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>  
            ))}
          </ul>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar