import React from "react";
function Instructor(){
return(
     <div className='py-[3952px] px-[88px]'>
        <table>
            <tr>
                <td>
                <img src={require('../src/images/instructors.png')} alt='img1' className='w-[622px] h-[426.77px] py-[0px]' radius='15px'/>
                </td>
                <td>
                <div className='text-center w-[500px] h-[400px]'>
                <h1 className='whitespace-nowrap font-poppins px-[100px]  text-[55px] font-semibold text-[#45776B]'>Become an instructor</h1>
                <h6 className='whitespace-nowrap font-semi-bold px-[100px] text-[20px] text-left font-poppins opacity-60 w-[600px]'>Instructor from around the world teach millions of students on <br/>Edfling course.We provide the tools and skills to teach what you <br />love.Instructor from around the world teach millions of students on <br />Edfling course.We provide the tools and skills to teach what you <br /> love </h6>
                <table>
                <tr>
                <td>
                <div className=' w-[350px] h-[100px] py-[30px] px-[110px]'>
                <button variant="contained" className='text-white px-[60px] py-[10px] bg-[#45776B] font-poppins rounded-[7px] whitespace-nowrap'>Explore more</button>
                </div>
                </td>
                <td>
                <div className=' w-[50px] h-[100px] py-[30px] px-[0px]'>
                <button variant="text" className=' px-[60px] py-[10px] text-[#45776B] font-poppins rounded-[7px] whitespace-nowrap'>Learn more</button>
                </div>

                </td>
                </tr>
                </table>
                </div>
                </td>
            </tr>
        </table>
     </div>
);
}
export default Instructor