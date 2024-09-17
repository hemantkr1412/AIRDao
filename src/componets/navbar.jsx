import { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/walletContext";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "./client";
import { useAddress } from "@thirdweb-dev/react";
import useEvent from "./useEvent";


const wallets = [createWallet("io.metamask")];


const Navbar = ({handleScroll,upComingRef,popularRef,recentRef,howItWorksRef,roadMapref,tokenDetailsRef}) => {

   

    const navigate = useNavigate()
    const [isToggled, setToggle] = useState(true);
    const [isDropdown,setIsDropdown] = useState(false);

    const walletContext = useWallet();

    const event = useEvent();
  

    useEffect(() => {
    const getDocument = document.querySelector("#menu");
    if(isToggled){
      getDocument.style.display = "none";
    }else{
      getDocument.style.display = "flex";
    }


    // const walletDetails = localStorage.getItem('wallet'); 
    // if(walletDetails === 'metamask'){
    //   wallet.connectWallet()
    // }
    
  }, [isToggled]);

  console.log(walletContext.isWalletConnected);


  const getAddress = () => {
    if (!walletContext.isWalletConnected) {
      return "Connect Wallet";
    }

    let wallettype = localStorage.getItem("wallettype");

    if (wallettype == "browser" && walletContext?.publicKey) {
      // console.error(wallet?.publicKey)
      
    
      return `${walletContext?.publicKey
        .toString()
        .slice(0, 4)}...${walletContext?.publicKey.toString().slice(39)}`;
    }
    if (wallettype == "mobile") {
      return `${walletContext?.mobile?.publicKey
        .toString()
        .slice(0, 4)}...${walletContext?.mobile?.publicKey.toString().slice(39)}`;
    }

    return "Connect Wallet";
  };




 const handleClickMenu = () =>{
    setToggle(!isToggled);
  }
    return (
    <>
        <div className="navbar" >
            <div style={{

                display: 'flex',
                alignItems: 'center',
                height: '80px',
                backgroundColor: 'black',
                justifyContent:"space-between"
            }}>
                <div style={{
                    paddingLeft:"1rem"
                }}>

                <a href="/" style={{fontWeight:"600",fontSize:"1.1rem" ,cursor:"pointer",
                    color:"white",
                    textDecoration:"none"
                  }} >
                  {/* <img src="logoxenPlay.png" alt="logo" style={{
                    width:"200px",
                    height:"70px"
                }}/> */}
                AirDAO <span style={{
                  color:"#838283"
                }}>Markets</span>
                </a>
                </div>
                
                <div style={{
                    display:"flex",
                    color:"white",
                    width:"50%",
                    gap:"4rem",
                    // justifyContent:"",
                    justifyContent:"center",
                    alignItems: 'center',
                }}>
                    <div onClick={()=>{
                      navigate('/')
                    }} 
                    style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} 
                    >Home</div>
                        <div onClick={()=>{
                      navigate("/markets")
                    }} style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} >Markets</div>
                   <div onClick={()=>{
                      navigate("/myRank")
                    }} style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} >Leaderboard</div>
                   <div onClick={()=>{
                      navigate("/myPrediction")
                    }} style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} >My Predictions</div>
                  <div onClick={()=>{
                      window.open('https://airdao-markets.gitbook.io/airdao-markets', '_blank');
                    }} style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} >Docs</div>
                    {/* <div>
                        <button style={{
                            backgroundColor:"white",
                            color:"black",
                            width:"140px",
                            height:"35px",
                            borderRadius:"5px",
                            border:"none"
                        }}>
                            Connect Wallet
                        </button>
                    </div> */}
                </div>
                <div>
                        {/* <button style={{
                            backgroundColor:"white",
                            color:"black",
                            width:"140px",
                            height:"35px",
                            borderRadius:"5px",
                            border:"none",
                            marginRight:"3rem",
                            cursor:"pointer"
                        }}

                        onClick={() => setIsDropdown(!isDropdown)}
                        >
                            {getAddress()}
                            <img src="downArrow.svg" alt="down-arrow" style={{
                              marginLeft:"0.4rem",
                              rotate:isDropdown?"180deg":"0deg"
                            }}/>
                        </button> */}
                        {/* <div className="dropdown1">
                            <button
                             style={{
                              background:"linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                              color:"black",
                              width:"140px",
                              height:"35px",
                              borderRadius:"100px",
                              border:"none",
                              marginRight:"3rem",
                              cursor:"pointer",
                              boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.4)",
                          }}
                             className="para-link2" > {getAddress()}
                              <img src="downArrow.svg" alt="down-arrow" style={{
                              marginLeft:"0.4rem",
                              rotate:isDropdown?"180deg":"0deg"
                            }}/>
                             </button>
                                <div className="dropdown-content1">
                                    <div className="column" style={{
                                    width:"100%",
                                    height:"auto"
                                    }}>
                                    {!wallet.isWalletConnected ?<>
                                    <a onClick={()=>{
                                        wallet.connectWallet()
                                      }} style={{
                                        padding:"1rem",
                                        borderBottom: "1px solid rgba(164, 164, 164, 1)"
                                      }}>
                                        <span >Metamask</span>
                                        <img  src="metamask-icon.svg" alt="phantom" style={{
                                          width:"20px",
                                          height:"20px",
                                          marginLeft:"10px",
                                        
                                         
                                       
                                        }}/>
                                      </a>
                                      </> :
                                      <>
                                      <a onClick={
                                        ()=>{
                                          wallet.disconnect();
                                        }
                                      } style={{
                                        padding:"1rem",
                                        borderBottom: "0px solid rgba(164, 164, 164, 1)"
                                      }}>
                                        Disconnect
                                      </a>
                                      </>}
                                    </div>
                                </div>
                        </div> */}


                      
                          <ConnectButton
                          onConnect = {
                            (wallet) =>{
                              const walletAddress = wallet.getAccount()
                              if(walletAddress.address){
                                walletContext.setIsWalletConnected(true);
                                console.log(walletAddress.address);
                                walletContext.setPublicKey(walletAddress.address);
                                event.setWalletDetails(walletAddress.address);
                              }
                            }
                          }
                           client={client} wallets={wallets} 
                           connectButton={{
                            label: "Connect Wallet",
                            style:{
                              background: "linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                              color: "black",
                              width: "140px",
                              height: "35px",
                              borderRadius: "100px",
                              border: "none",
                              marginRight: "3rem",
                              cursor: "pointer",
                              boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.4)",
                            }
                          }}
                      
                           />
                        {/* </button> */}
                        
                    </div>
            </div>
        </div>
        <div className="navmanu" style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      backgroundColor:  "black",
      // color:"--primary-color",
      width: "100%",
      height: "70px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      color:"#6B6C6C"
      // padding:"1rem 0.4rem",
    }}>
      <div style={{
        width:"100%",
        display:"flex",
        height:"100%",
        justifyContent:"space-between",
      }}>
          <div style={{
            padding:"1rem 0.4rem",
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
          }}>
          {/* <img  src="logoxenPlay.png" alt="XenPLay"style={{
            width:"120px",
            height:"50px"
          }}/> */}
          <a href="/" style={{fontWeight:"600",fontSize:"0.8rem" ,cursor:"pointer",
                    color:"white",
                    textDecoration:"none",
                    marginTop:"5px"
                  }} >
                  {/* <img src="logoxenPlay.png" alt="logo" style={{
                    width:"200px",
                    height:"70px"
                }}/> */}
                AIRDAO <span style={{
                  color:"#838283"
                }}>Markets</span>
                </a>
          <div style={{
            display:"flex",

          }}>
            {/* <div className="dropdown1" style={{
                        fontWeight:"600",
                        
                      }}>
                              <button
                              style={{
                                background:"linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                                color:"black",
                                width:"100px",
                                height:"25px",
                                borderRadius:"100px",
                                border:"none",
                                cursor:"pointer",
                            }}
                              className="para-link2" > {getAddress()}
                                <img src="downArrow.svg" alt="down-arrow" style={{
                                marginLeft:"0.4rem",
                                rotate:isDropdown?"180deg":"0deg"
                              }}/>
                              </button>
                                  <div className="dropdown-content1">
                                      <div className="column" style={{
                                      width:"100%",
                                      height:"auto"
                                      }}>
                                      {!walletContext.isWalletConnected ?<>
                                      <a onClick={()=>{
                                          walletContext.connectWallet()
                                        }} style={{
                                          padding:"1rem",
                                          borderBottom: "1px solid rgba(164, 164, 164, 1)"
                                        }}>
                                          Metamask
                                          
                                        </a>
                                        </> :
                                        <>
                                        <a onClick={
                                          ()=>{
                                            walletContext.disconnect();
                                          }
                                        } style={{
                                          padding:"1rem",
                                          borderBottom: "0px solid rgba(164, 164, 164, 1)"
                                        }}>
                                          Disconnect
                                        </a>
                                        </>}
                                      </div>
                                  </div>
            </div> */}
              <ConnectButton
                onConnect = {
                  (wallet) =>{
                    const walletAddress = wallet.getAccount()
                    if(walletAddress.address){
                      walletContext.setIsWalletConnected(true);
                      console.log(walletAddress.address);
                      walletContext.setPublicKey(walletAddress.address);
                      event.setWalletDetails(walletAddress.address);
                    }
                  }
                }
            client={client} wallets={wallets} 
            connectButton={{
              label: "Connect Wallet",
              style:{
                background:"linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                color:"black",
                width:"100px",
                height:"25px",
                borderRadius:"100px",
                border:"none",
                cursor:"pointer",
              }
            }}
            
            />

          {!isToggled ?   <img className="maunuicon" src="cancel.png"  alt="Close" onClick={handleClickMenu} style={{
            width:"25px",
            height:"25px"
          }}/>
          :
          <img  src="Group.svg"  alt="Menu" onClick={handleClickMenu} style={{
            width:"40px",
            height:"30px"
          }}/>
          }
          </div>
         
   
          </div>
        <div 
          id="menu"
          style={{
            marginTop:"4rem",
            width:"100%",
            position: "absolute",
            backgroundColor:"white",
            color:"#6B6C6C",
            display:"none",
            flexDirection:"column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}>
            <div style={{
                width:"100%",
                padding:"1rem",
                color:"black"
            }}>
                    <a href="/" style={{fontWeight:"600",fontSize:"1.1rem" ,cursor:"pointer",color:"black",textDecorationLine:"none",marginLeft:"7px"}} >Home</a>
                    <p onClick={()=>{
                      navigate("/markets")
                      handleClickMenu()
                    }} style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem",cursor:"pointer",marginLeft:"7px"}}>Markets</p>
                    <p onClick={()=>{
                      navigate("/myRank")
                      handleClickMenu()
                    }} style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem",cursor:"pointer",marginLeft:"7px"}}>Leaderboard</p>
                    <p onClick={()=>{
                      navigate("/myPrediction")
                      handleClickMenu()
                    }} style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem",cursor:"pointer",marginLeft:"7px"}}>My Prediction</p>
                     <p onClick={()=>{
                       window.open('https://airdao-markets.gitbook.io/airdao-markets', '_blank');
                      handleClickMenu()
                    }} style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem",cursor:"pointer",marginLeft:"7px"}}>Docs</p>
                    {/* <p
                    onClick={() =>  wallet.connectWallet()}
                     style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem"}}>{wallet.isWalletConnected ? getAddress(): "Connect Wallet"}</p> */}
                    
            </div>
      
          </div>
      
      </div>

    </div>
    </>
    )
}

export default Navbar;