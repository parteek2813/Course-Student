import React from 'react'
import '../CSS/SideBar.css'
import Download from '../images/page 57,58,59,60,61/Images/Download.svg'
const NavSub = () => {
  return (
    <div className='w-full grid rounded' style={{background:'#215D4F'}}>
      <ul className='inline-block'>
        <ul className='flex float-left'>
        <li className='mx-8 my-4 font-sans font-normal text-lg decoration-white'>Ask your Doubt</li>
        <li className='mx-8 my-4 font-sans font-normal text-lg decoration-white'>Watch Hint Video</li>
        <li className='mx-8 my-4 font-sans font-normal text-lg decoration-white'>Watch Later</li>
        </ul>
        <ul className='flex float-right'>
        <li className='mx-8 my-4 font-sans font-normal text-lg decoration-white'>Download Notes</li>
        <li><img src={Download} alt='Download' className='mx-8 my-6 right-0'/></li>
        </ul>
      </ul>
    </div>
  )
}

export default NavSub
