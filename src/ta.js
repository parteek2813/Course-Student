import React from "react";

function Ta(){
    return (
        <div className=' py-[4466px] px-[88px]'>
        <table>
        <tr>
            <td>
                <div className=' w-[600px] h-[362px]'>
                    <div className=' w-[600px] h-[285px]'>
                       <div className='w-[527px] h-[120px]'>
                                <h1 className='text-[#45776B] poppins font-semibold text-[40px]'>Become an Teaching<br /> Assistant (TA)</h1>
                       </div>
                          <div className='h-[150px] w-[600px] opacity-60 '>
                          <h1 className='py-[10px] font-poppins text-[18px]'>Instructor from around the world teach millions of students on<br /> Edfling course.We provide the tools and skills to teach what you <br />love.Instructor from around the world teach millions of students on<br /> Edfling course.We provide the tools and skills to teach what you<br /> love </h1>
                          </div>
                    </div>
                    <div className=' w-[335px] h-[56px] '>
                         <button variant="contained" className='text-white bg-[#45776B] font-poppins rounded-[7px] h-[56px] w-[213px] '>Join as a TA</button>
                         <button variant="text" className="whitespace-nowrap text-[#45776B] h-[40px] px-[40px] w-[92px] text-[16px] text-center">Learn more</button>
                    </div>
                </div>
            </td>
            <td>
                <div className=' w-[729.94px] h-[633.91px]'>
                   <img src={require('../src/images/TA.png')}/>
                     
                </div>
            </td>
        </tr>

        </table>
        </div>
    );
}
export default Ta