import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import NavSub from '../Components/NavSub'
import CourseMain from '../Components/CourseMain'
import PageEnd from '../Components/PageEnd'

const Page57 = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
    <div className='col-span-5 row-span-1'>
      <Navbar/> 
    </div>
        <div className='col-span-1 ml-10'>
        <SideBar/>
        </div>
        <div className='col-span-4 mr-10'>
          <NavSub/>
          <CourseMain/>
        </div>
    <div className='col-span-5 mx-10'>
      <PageEnd/>
    </div>
   </div>
  )
}

export default Page57
