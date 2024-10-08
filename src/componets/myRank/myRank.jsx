import { useEffect, useState } from "react";
import "../markets/market.css";
import VolumeProfitCards from "./LeaderBaordComp";


const MyRank = () =>{
    const [leaderBoardVolume,setLeaderboardVolume ]= useState([]);
    const [leaderBoardProfit,setLeaderboardProfit] = useState([]);
    const [mobileTab,setMobileTab] = useState("volume");

    // const API_URL = "http://127.0.0.1:8000/api/v1"
    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;

    useEffect(()=>{
        populateLeaderBoard();
        populateLeaderBoardProfit();
    },[])

    const populateLeaderBoard = async () =>{
        await fetch(`${API_URL}/event/top-votes/`)
        .then((response) => response.json())
        .then((data)=>{
          setLeaderboardVolume(data)
        //   console.log(data,"??????????????TOP RANK?????????????")
        })
        .catch((error)=> console.log(error))
    }

    const populateLeaderBoardProfit = async () =>{
        await fetch(`${API_URL}/event/top-profits/`)
        .then((response) => response.json())
        .then((data)=>{
          console.log(data,"??????????????Profit?????????????")
          setLeaderboardProfit(data)
        })
        .catch((error)=> console.log(error))
    }





    const divStyle = {
        background: "linear-gradient(180deg, #1A1A1A -1.47%, #3F3F3F 30.25%, #626262 49.26%, #393939 74.55%, #3F0A4C 100%)",
        width: "100%",
        height: "50px",
        position: "relative",
      };
    
      const arrowStyle = {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-25px",
        width: 0,
        height: 0,
        borderRight: "25px solid #3F0A4C",  // Match the last color of the gradient
        borderTop: "25px solid transparent",
        borderBottom: "25px solid transparent"
      };

    return(
    <div style={{width:"100%",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        // alignContent:"center"
    }}>
       
       <div style={{
             paddingTop:"7rem"
       }}>
         <h1 style={{
            textAlign:"center",
            color:"black"
         }}>Leaderboard</h1>
       </div>


       <div
       className="ldr-btn-cls"
       style={{
        width:"93%",
        // backgroundColor:"white",
        height:"50px",
        // display:"flex",
        justifyContent:"space-between",
        padding:"3%"
       }}>
        <button 
        onClick={() =>{
          setMobileTab("volume")
        }
        }
        style={{
          width:"45%",
          height:"35px",
          borderRadius:"50px",
          background: mobileTab ==="volume"?"linear-gradient(93.79deg, #F7931A 1.62%, #2D28FF 102.43%)":"rgba(0, 0, 0, 0.5)",
          border:"none",
          color:"white",
          cursor:"pointer",

        }}>
          Volume
        </button>
        <button 
         onClick={() =>{
          setMobileTab("profit")
        }
        }
        style={{
          width:"45%",
          height:"35px",
          borderRadius:"50px",
          background: mobileTab ==="profit"?"linear-gradient(93.79deg, #F7931A 1.62%, #2D28FF 102.43%)":"rgba(0, 0, 0, 0.5)",
          border:"none",
          color:"white",
           cursor:"pointer"
        }}>
          Profit
        </button>


       </div>

       <div style={{
        width:"100%",
        margin:"0px auto"
       }}>
              {/* <CustomTable /> */}
              <VolumeProfitCards 
              leaderBoardVolume={leaderBoardVolume}
              leaderBoardProfit={leaderBoardProfit}
              mobileTab={mobileTab}
              />
       </div>

       

    </div>
    )
};

export default MyRank;

