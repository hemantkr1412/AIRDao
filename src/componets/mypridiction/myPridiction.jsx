
import { useEffect, useState } from "react";
import { useWallet } from "../../context/walletContext";
import useEvent from "../useEvent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Pridtiction = () =>{
    const event = useEvent();
    const [myPrediction,setMyprediction] = useState([]);
    const [winningEvents,setWinningEvent] = useState([]);
    const [selectedOption, setSelectedOption] = useState('last10');
    const [populateAgain,setPopilateAgain] = useState(false)

      // Handle the change in the select dropdown
    const handleChange = (event) => {
          setSelectedOption(event.target.value);
      };
    const wallet = useWallet();
    const populateMyPridiction = async () => {
        console.log("Enter in my prediction")
          const url = new URL(`http://127.0.0.1:8000/api/v1/event/my-predictions/`);
        url.searchParams.append("wallet_address",wallet.publicKey);
      
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      
        try {
          const response = await fetch(url, requestOptions);
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
          }
      
          const result = await response.json();
          console.log(result, ">>>>>>>>> MY Pridiction >>>>>>>>>");
          setMyprediction(result.results);
        } catch (error) {
          console.error("Error:", error);
        }
        
      };

      const populateWinnigPridiction = async () => {
        console.log("Enter in my prediction")
          const url = new URL(`http://127.0.0.1:8000/api/v1/event/winning-votes/`);
        url.searchParams.append("wallet_address",wallet.publicKey);
      
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      
        try {
          const response = await fetch(url, requestOptions);
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
          }
      
          const result = await response.json();
          console.log(result, ">>>>>>>>> Winnig Pridiction >>>>>>>>>");
          setWinningEvent(result.results);
          // setMyprediction(result.results);
        } catch (error) {
          console.error("Error:", error);
        }
        
      };
    


    useEffect(()=>{
        if(wallet.publicKey){
            console.log("My Prediction Effect if");
            console.log(wallet.publicKey);
            populateMyPridiction();
            populateWinnigPridiction();
        }
    },[wallet.publicKey,populateAgain])
   
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
        // justifyContent:"center",
        // alignContent:"center"
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



       {wallet.isWalletConnected? <div style={{
        width:"100%",
        // height:"400px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"black",
       }}>
            <label htmlFor="transaction-select">Select Option: </label>
            <select id="transaction-select" value={selectedOption} onChange={handleChange}>
              <option value="last10">Last 10 Transactions</option>
              <option value="allWinning">All Winning Events</option>
            </select>
            <div style={{
                width:"80%",
                // height:"400px",
                display:"flex",
                flexDirection:"column",
                gap:"2rem"
            }}>
                <div style={{
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
                    }}>Tokens Committed</p>
                      <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Tokens Rewarded</p>
                    {
                      selectedOption === "allWinning"&& <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Action</p>
                    }
                </div>
                 {/* <div style={{
                    background: "linear-gradient(180deg, #1A1A1A -1.47%, #3F3F3F 30.25%, #626262 49.26%, #393939 74.55%, #3F0A4C 100%)",
                    width:"100%",
                    height:"50px"
                 }}>

                 </div> */}
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
                                }}>{index+1}</p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500"
                                }}>{data.event_id}</p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500"
                                }}>{data.token_staked}</p>
                                <p style={{
                                    fontSize:"1.1rem",
                                    fontWeight:"500"
                                }}>{data.amount_rewarded===null?"Pending":data.amount_rewarded}</p>
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
                            }}>{index+1}</p>
                            <p style={{
                                fontSize:"1.1rem",
                                fontWeight:"500"
                            }}>{data.event_id}</p>
                            <p style={{
                                fontSize:"1.1rem",
                                fontWeight:"500"
                            }}>{data.token_staked}</p>
                            <p style={{
                                fontSize:"1.1rem",
                                fontWeight:"500"
                            }}>{data.amount_rewarded}</p>
                            <button 
                            onClick={()=>
                              event.claimReward(data.id,wallet.publicKey,populateAgain,setPopilateAgain)
                            }
                            style={{
                                backgroundColor:!data.is_claimed ?"#F2F2F2":"grey",
                                color:"black",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none",
                                cursor:!data.is_claimed ?"pointer":"",
                               
                            }}>
                              {!data.is_claimed ?"Claim":"Claimed"}
                            </button>
                        </div>
                            <div style={arrowStyle}></div>
                        </div>
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

