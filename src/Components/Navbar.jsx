import React from 'react'
import Group18 from '../images/page 57,58,59,60,61/Images/Group 18.svg'
import Group19 from '../images/page 57,58,59,60,61/Images/Group19.svg'
import Vector from '../images/page 57,58,59,60,61/Images/Vector.svg'
import Ellipse from '../images/page 57,58,59,60,61/Images/Ellipse 215.png'
import '../CSS/Navbar.css'
import MenuIcon from '../images/page 57,58,59,60,61/Images/MenuIcon.svg'

const Navbar = () => {

  const navFunction = () =>{

  }

  return (
    <div className='nav-container  w-full h-full'>
    <div className='flex justify-center'>
      <img src={Group18} className='logo' alt='logo'/>
      <h1 className='name font-sans font-medium '>Edfling Courses</h1>
    </div>
    <div>
        <div className='list-elements nav-item2 h-full'>
            <li className=' font-sans font-normal text-lg'>Home</li>
            <li className=' font-sans font-normal text-lg'>Why Us</li>
            <li className=' font-sans font-medium text-lg' style={{color:'#215D4F'}}>Courses</li>
            <li className=' font-sans font-normal text-lg'>Mentors</li>
            <li className=' font-sans font-normal text-lg'>Contact us</li>
        </div>
    </div>
    <div className='nav-item3'>
        <img src={Group19} className='bell-icon mx-2' alt='bell icon'/>
        <img src={Vector} className='comments-icon mx-2' alt='comments icon'/>
        <img  src={Ellipse} className='profile-icon mx-2' alt='profile icon'/>
        <button onClick={navFunction()}><img src={MenuIcon} className='h-8 w-6 menu mx-2'/></button>
    </div>
    </div>
  )
}

export default Navbar
