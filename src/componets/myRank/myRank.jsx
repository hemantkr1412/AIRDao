import { useEffect, useState } from "react";
import "../markets/market.css";

const MyRank = () =>{
    const [leaderBoard,setLeaderboard ]= useState([]);

    // const API_URL = "http://127.0.0.1:8000/api/v1"
    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;

    useEffect(()=>{
        populateLeaderBoard()
    },[])

    const populateLeaderBoard = async () =>{
        await fetch(`${API_URL}/event/top-votes/`)
        .then((response) => response.json())
        .then((data)=>{
          setLeaderboard(data)
          console.log(data,"??????????????TOP RANK?????????????")
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

       <div style={{
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"black",
        marginBottom:"30px"
       }}>
            <div style={{
                width:"80%",
                display:"flex",
                flexDirection:"column",
                gap:"2rem"
            }}>
                <div className="leaderBoardHeadings" style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginTop:"2rem"
                }}>
                    <p>Rank</p>
                    <p>Wallet Address</p>
                    <p>Amount</p>
                </div>
                 
                {
                   leaderBoard.map((data,index) =>{
                        return(
                            <>
                            <div key={"data"+data.id} style={divStyle}>
                               <div style={{
                                display:"flex",
                                justifyContent:"space-between",
                                padding:"0.7rem",
                                color:"white"
                            }}>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                }}>{index+1}</p>
                                <p className="leaderboardAccountDesktop" style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500"
                                }}>{data.account.account}</p>
                                <p className="leaderboardAccountMobile"  style={{
                                    fontSize:"0.9rem",
                                    fontWeight:"500"
                                }}>{ `${data.account.account
                                    .toString()
                                    .slice(0, 4)}...${data.account.account.toString().slice(39)}`}</p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500"
                                }}>${Number(data.total_reward_usd).toFixed(2)}</p>
                                
                            </div>
                                <div style={arrowStyle}></div>
                            </div>
                            
                            </>
                        )
                    })
                 }
            </div>

       </div>

    </div>
    )
};

export default MyRank;

