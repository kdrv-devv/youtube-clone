import React from "react";
import { CiSearch } from "react-icons/ci";
const UserPage = () => {
  const UserData = JSON.parse(localStorage.getItem("token"));
  return (
    <div className="h-[673px] p-[20px] bg-[#212121] border-l border-l-[#a9a9a9] border-solid ">
      <div className="user-header w-[1200px]  h-[200px] rounded-[20px]"></div>

      <div className="user-photo flex items-center gap-5 mt-5">
        <div className="userFoto w-[150px] h-[150px] rounded-[100%] "></div>

        <div className="userData ">
          <h3 className=" text-white text-[40px] font-bold">{UserData.name}</h3>
          <h4 className=" text-white ">{`@${UserData.name} • 3 subscribers • 2 videos `}</h4>
          <h5 className=" text-[10px] text-white">Xayotda doim yutganlar ga'laba qozonadi...<b>more</b></h5>
          <div className=" flex gap-5 mt-[10px]">
            <button className=" h-[35px] bg-[#4b4a4a] font-[400] text-white flex items-center rounded-[20px] text-[12px] justify-center p-[10px]">customise channel</button>
            <button className=" h-[35px] bg-[#434242] font-[400] text-white flex items-center rounded-[20px] text-[12px] justify-center p-[10px]">Manage Videos</button>
          </div>
        </div>
      </div>

      <div className="user-Videos ">
        <div className="user-Videos-Top flex  gap-7 mt-[10px] pb-[10px]  border-b border-b-gray-500 border-solid">
            <h3 className="text-white font-[700] ">Home</h3>
            <h3 className="text-white font-[300] ">Shorts</h3>
            <h3 className="text-white font-[300] ">Community</h3>
            <button style={{color:"white",fontSize:"20px"}} ><CiSearch /></button>
        </div>

        <div className="user-videos-bottom ">
            <div>
                <img src="" alt="" />
            </div>

        </div>


      </div>



    </div>
  );
};

export default UserPage;
