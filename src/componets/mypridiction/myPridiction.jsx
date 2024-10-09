
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import AnimatedButton from "./animatedButton"
import 'react-toastify/dist/ReactToastify.css';
import "../markets/market.css";
import { useSelector } from "react-redux";
import useMyPrediction from "./useMyPridiction";

import CustomTable from './TableComponents';
import EventList from "./MobileViewTable";

const Pridtiction = () =>{
  const isConnected = useSelector(state => state.wallet.isConnected);

  const {
    handleChange,
    selectedOption,
    winningEvents,
    losingEvents,
    myPrediction,
    claimReward,
    isLoading,
    pendingVotes
}  = useMyPrediction();
   
   
    const divStyle = {
        background: "linear-gradient(180deg, #1A1A1A -1.47%, #3F3F3F 30.25%, #626262 49.26%, #393939 74.55%, #3F0A4C 100%)",
        width: "100%",
        height: "50px",
        position: "relative"
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
         marginBottom:"30px"
    }}>
      <ToastContainer />
       <div style={{
             paddingTop:"7rem"
       }}>
         <h1 style={{
            textAlign:"center",
            color:"black"
         }}>My Predictions</h1>
       </div>

         
    
        

       {isConnected? <div style={{
        width:"100%",
        // height:"400px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"black",
       }}>
            {/* <label htmlFor="transaction-select">Select Option: </label> */}
            <div style={{
              width: "80%",
              display: "flex",
              
            }}>
              <select
                className="predictionSelect"
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  marginLeft:"auto",
                  fontWeight: "400",
                  lineHeight: "21.78px",
                  letterSpacing: "0.03em",
               

                }}
                id="transaction-select"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="last10">Recent Transactions</option>
                <option value="lastPending"> Last 10 Pending</option>
                <option value="allWinning"> Last 10 Won</option>
                <option value="lastLost"> Last 10 Lost</option>
                
              </select>
            </div>
            


            <div  className="mobileView" style={{
              width:"80%",
            }}>
                <div className="button-header" style={{
                  width:"80%",
                  display:"flex",
                 justifyContent:"space-between"
                }}>
                <span style={{
                  color:"black"
                }}>ID</span>
                <span style={{
                  // width:"115px"
                }}><span style={{
                  color:"black",
                  marginRight:"25px"
                  // color: data.status === "WON" ? "GREEN" 
                  // : data.status === "LOST" ? "RED" 
                  // : "BLUE" 
                }}>Status</span></span>
                 <span style={{
                  color:"black"
                }}>Action</span>

                  </div>
            </div>








            
            <div 
            className="desktopVersion"
            style={{
                width:"80%",
                // display:"flex",
                flexDirection:"column",
                gap:"2rem",
            }}>

         
            {
              isLoading &&  <SkeletonLoadingTable />
            }
            {
                   selectedOption==="last10" && <CustomTable myPrediction={myPrediction} claimReward={claimReward}/>

            }
            {
                   selectedOption==="allWinning" && <CustomTable myPrediction={winningEvents} claimReward ={claimReward}/>

            }
            {
                   selectedOption==="lastLost" && <CustomTable myPrediction={losingEvents} claimReward ={claimReward}/>

            }
            {
                   selectedOption==="lastPending" && <CustomTable myPrediction={pendingVotes} claimReward ={claimReward}/>

            }

            </div>
            {/* <div 
            className="desktopVersion"
            style={{
                width:"80%",
                // display:"flex",
                flexDirection:"column",
                gap:"2rem",
            }}>
                <div
                 style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginTop:"2rem"
                }}>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>S. No.</p>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Event ID</p>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Event Status</p>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Tokens Committed</p>
                      <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600",
                        marginRight:"3rem"
                    }}>Tokens Rewarded</p>
                     <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600",
                        marginRight:"3rem"
                    }}>Action</p>
                    
                </div>
                 {
                   selectedOption==="last10" && myPrediction.map((data,index) =>{
                        return(
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
                                    width:"10px",
                                    textAlign:"center"
                                }}>{index+1}</p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                      width:"66px",
                                      textAlign:"center"
                                }}>{data.event_id}</p>
                               <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                      width:"97px",
                                      textAlign:"center"
                                }}>
                                {data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase()}
                                </p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                     width:"150px",
                                     textAlign:"center"
                                }}>{data.token_staked}

                                
                                </p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                     width:"138px",
                                     textAlign:"center"
                                }}>{data.amount_rewarded===null?"Pending":data.amount_rewarded}</p>
                                <button 
                                  onClick={()=>{
                                    if(!data.is_claimed ){
                                      if(data.status ==="WON" ){
                                        claimReward(data.id)
                                      }
                                    }
                                  }
                                  }
                                  style={{
                                      backgroundColor:data.is_claimed ?" #00000080":"#DADADA26",
                                      color:"#FFFFFF",
                                      width:"120px",
                                      height:"35px",
                                      borderRadius:"5px",
                                      cursor: data.status === "WON" ?"pointer":"",
                                      border: "2px solid #FFFFFF",
                                    
                                  }}>
                                    {
                                      data.status === "WON" ? (
                                        !data.is_claimed ?<span>Claim</span>:<span>Claimed</span>
                                      ):("N/A")
                                    }
                                    {data.is_claimed &&

                                    <img style={{
                                      marginLeft:"5px",
                                      position:"absolute"
                                    }} src="clainmed.svg" alt="Claimed" />
                                    }
                                  </button>
                            </div>
                                <div style={arrowStyle}></div>
                            </div>
                        )
                    })
                 }
                 {
                  selectedOption==="allWinning" && winningEvents.map((data,index) =>{
                    return(
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
                              width:"10px",
                              textAlign:"center"
                            }}>{index+1}</p>
                            <p style={{
                                 fontSize:"1.1rem",
                                 fontWeight:"500",
                                  width:"66px",
                                textAlign:"center"
                            }}>{data.event_id}</p>
                              <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                      width:"97px",
                                      textAlign:"center"
                                }}> {data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase()}</p>
                            <p style={{
                              fontSize:"1.1rem",
                              fontWeight:"500",
                              width:"150px",
                              textAlign:"center"
                            }}>{data.token_staked}</p>
                            <p style={{
                                fontSize:"1.1rem",
                                fontWeight:"500",
                                 width:"138px",
                                 textAlign:"center"
                            }}>{data.amount_rewarded}</p>
                               <button 
                                  onClick={()=>{
                                    if(!data.is_claimed ){
                                      if(data.status ==="WON" ){
                                        claimReward(data.id)
                                      }
                                    }
                                  }
                                  }
                                  style={{
                                      backgroundColor:data.is_claimed ?" #00000080":"#DADADA26",
                                      color:"#FFFFFF",
                                      width:"120px",
                                      height:"35px",
                                      borderRadius:"5px",
                                      cursor: data.status === "WON" ?"pointer":"",
                                      border: "2px solid #FFFFFF",
                                    
                                  }}>
                                    {
                                      data.status === "WON" ? (
                                        !data.is_claimed ?<span>Claim</span>:<span>Claimed</span>
                                      ):("N/A")
                                    }
                                    {data.is_claimed &&

                                    <img style={{
                                      marginLeft:"5px",
                                      position:"absolute"
                                    }} src="clainmed.svg" alt="Claimed" />
                                    }
                                  </button>
                        </div>
                            <div style={arrowStyle}></div>
                        </div>
                    )
                })
                 }

                  {
                  selectedOption==="lastLost" && losingEvents.map((data,index) =>{
                    return(
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
                              width:"10px",
                              textAlign:"center"
                            }}>{index+1}</p>
                            <p style={{
                                 fontSize:"1.1rem",
                                 fontWeight:"500",
                                  width:"66px",
                                textAlign:"center"
                            }}>{data.event_id}</p>
                              <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500",
                                      width:"97px",
                                      textAlign:"center"
                                }}> {data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase()}</p>
                            <p style={{
                              fontSize:"1.1rem",
                              fontWeight:"500",
                              width:"150px",
                              textAlign:"center"
                            }}>{data.token_staked}</p>
                            <p style={{
                                fontSize:"1.1rem",
                                fontWeight:"500",
                                 width:"138px",
                                 textAlign:"center"
                            }}>{data.amount_rewarded}</p>
                               <button 
                                  onClick={()=>{
                                    if(!data.is_claimed ){
                                      if(data.status ==="WON" ){
                                        claimReward(data.id)
                                      }
                                    }
                                  }
                                  }
                                  style={{
                                      backgroundColor:data.is_claimed ?" #00000080":"#DADADA26",
                                      color:"#FFFFFF",
                                      width:"120px",
                                      height:"35px",
                                      borderRadius:"5px",
                                      cursor: data.status === "WON" ?"pointer":"",
                                      border: "2px solid #FFFFFF",
                                    
                                  }}>
                                    {
                                      data.status === "WON" ? (
                                        !data.is_claimed ?<span>Claim</span>:<span>Claimed</span>
                                      ):("N/A")
                                    }
                                    {data.is_claimed &&

                                    <img style={{
                                      marginLeft:"5px",
                                      position:"absolute"
                                    }} src="clainmed.svg" alt="Claimed" />
                                    }
                                  </button>
                        </div>
                            <div style={arrowStyle}></div>
                        </div>
                    )
                })
                 }

                 
            </div> */}
            <div 
            className="mobileView"
            style={{
                width:"80%",
                marginTop:"1rem",
                // display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                background:"linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)",
                // border:"1px solid black",
                border: "1px solid",

                borderImageSource:"linear-gradient(106.5deg, #A65A00 0.13%, #3330E9 99.87%)",


                borderRadius:"20px",
                padding:"1rem"
            }}>

              {/* <EventList /> */}

              
         
               
                 {
                   selectedOption==="last10" && myPrediction.map((data,index) =>{
                        return(
                     
                            <AnimatedButton data={data}
                            claimReward= {()=>{
                              if(!data.is_claimed ){
                                if(data.status ==="WON" ){
                                  claimReward(data.id)
                                }
                              }
                            }}
                            />
                        )
                    })
                 }

                {
                  selectedOption==="allWinning" && 

                  winningEvents.map((data,index) =>{
                    console.log(data);
                    return(
                 
                       <AnimatedButton data={data} 
                        claimReward= {()=>{
                          if(!data.is_claimed ){
                            if(data.status ==="WON" ){
                              claimReward(data.id)
                            }
                          }
                        }}
                        />
              
                    )
                })
                 }

                {
                  selectedOption==="lastPending" && 

                  pendingVotes.map((data,index) =>{
                    console.log(data);
                    return(
                 
                       <AnimatedButton data={data} 
                        claimReward= {()=>{
                          if(!data.is_claimed ){
                            if(data.status ==="WON" ){
                              claimReward(data.id)
                            }
                          }
                        }}
                        />
              
                    )
                })
                 }

                 
            </div>
       </div>
       :
       <div style={{
        marginTop:"2rem",
        textAlign:"center"
       }}>
        Please Connect Your Wallet 
        </div>
       }

    </div>
    )
};

export default Pridtiction;



const SkeletonLoadingTable = () =>{
  return(
    <div style={{
      width:"100%"
    }}>
   {
    Array(10).fill(0).map((_, index) => (
      <tr key={index}>
        <td style={{
          width:"100%"
        }}><div className="skeleton skeleton-text"></div></td>
        <td style={{
          width:"100%"
        }}><div className="skeleton skeleton-text"></div></td>
        <td style={{
          width:"100%"
        }}><div className="skeleton skeleton-text"></div></td>
        <td style={{
          width:"100%"
        }}><div className="skeleton skeleton-text"></div></td>
        <td style={{
          width:"100%"
        }}><div className="skeleton skeleton-text"></div></td>
        <td style={{
          width:"100%"
        }}><div className="skeleton skeleton-button"></div></td>
      </tr>
    ))
   }
    </div>
  )
}

