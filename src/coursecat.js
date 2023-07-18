import React from 'react';
import './index.css';
function Coursecat(){
return (
 <div className='py-[2887px]'>
    <div className='text-center'>
    <h1 className='text-[48px] font-poppins font-semi-bold text-[#45776B]'>Course Categories</h1>
    <h6 className='text-[24px] font-poppins text-[#000000] opacity-50'>Most popular course categories available for you</h6>
    </div>
    <div>
    <table>
      <tr>
            <td className='space-x-1 px-14 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle1.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-poppins font-bold text-[#45776B]'>Design</h4>
            </a>
            </td>
            <td className='space-x-1 px-5 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle2.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-poppins font-bold text-[#45776B]'>Development</h4>
              </a>

            </td>
            <td className='space-x-1 px-5 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle3.jpg')} alt='img1' height='226px' width='310px' radius='15px'/> <h4 className='text-center font-bold text-[#45776B]'>Marketing</h4>
            </a>
                   

            </td>
            <td className='space-x-1 px-5 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle4.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-bold font-poppins text-[#45776B]'>IT/Software</h4>
            </a>
                   

            </td>
      </tr>
      <tr>
      <td className='space-x-1 px-14 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle5.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-poppins font-bold text-[#45776B] '>Personal Development</h4>
            </a>
          
            </td>
            <td className='space-x-1 px-4 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle6.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-poppins font-bold text-[#45776B]'>Business</h4>
            </a>

            </td>
            <td className='space-x-1 px-4 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle7.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-poppins font-bold text-[#45776B]'>Academics</h4>
            </a>
                   

            </td>
            <td className='space-x-1 px-5 py-5'>
            <a href=" "> <img src={require('../src/images/Rectangle8.jpg')} alt='img1' height='226px' width='310px' radius='15px'/>
            <h4 className='text-center font-poppins font-bold text-[#45776B]'>Music</h4>
            </a>
            </td>
      </tr>
    </table>
    </div>
    <div className='px-[660px] py-5'>
       <button variant="contained" className='text-white font-poppins px-[90px] py-[7px] bg-[#45776B] rounded-[7px] whitespace-nowrap'>Explore more</button>
    </div>
         
</div>
);
}
export default Coursecat