import React from 'react'

const Explore = () => {
    
  return (
    <div className='w-full h-[673px] px-[30px] py-[7px] bg-[#212121]'>
         <div className='grid grid-cols-[repeat(4,1fr)] mt-[30px] gap-4'>
                <div className='w-[350px] h-[300px]'>
                    <div className='w-full h-[210px]'>
                    <iframe  className='w-full h-full rounded-[10px]'   src="https://www.youtube.com/embed/OjgLV-dZfpE?si=_NEn3_uyjipBiQ2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  
                  
                    <div className=' flex items-center gap-3 mt-[10px]'>
                        <img className=' w-[55px]  rounded-[100%]' src="https://yt3.ggpht.com/AGG9gXYHZ6cSudAmnu4AqlM6f3QyDjE_6g71pqeU0FiTnDuFh5DG7xWIeIfKtchktFqGVpSLyQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                        <div>
                            <h4 className=' text-white '>Podcast #2</h4>
                            <p  className=' text-white text-[10px]'>72K views · 4 months ago</p>
                        </div>
                    </div>

                </div>


              


        </div>
    </div>
  )
}

export default Explore