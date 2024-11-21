import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";
import { FaCompass } from "react-icons/fa6";
import { MdOutlineSubscriptions } from "react-icons/md";

const Dashboard = () => {
  const {pathname} = useLocation()
  const navigate  = useNavigate()  
  const DashBoardStyle = 'pl-[10px] w-full h-[40px]  flex items-center gap-3 cursor-pointer'

  return (
    <div>
      <div className='flex'>

        <div className= 'flex flex-col  pt-[10px]  w-[300px] h-[673px] bg-[#212121]'>
               <div className={`${DashBoardStyle} ${pathname === "/" && "bg-[#303030]"}`}>
               <MdHomeFilled  style={{ color: "white", fontSize: "30px" }}  />
               <button onClick={()=>{navigate("/")}}><h5 className=' text-white text-[19px]'>Home</h5></button>
               </div>


               <div className='pl-[10px] w-full h-[40px]  flex items-center gap-3 cursor-pointer'>
               <FaCompass  style={{ color: "white", fontSize: "25px" }}  />
               <button onClick={()=>{navigate("/explore")}}><h5 className=' text-white text-[19px]'>Explore</h5></button>
               </div>


               <div className='pl-[10px] w-full h-[40px]  flex items-center gap-3 cursor-pointer'>
               <MdOutlineSubscriptions style={{ color: "white", fontSize: "25px" }}  />
               <button onClick={()=>{navigate("/subscribe")}}><h5 className=' text-white text-[19px]'>Subscriptions</h5></button>
               </div>
         

        </div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Dashboard