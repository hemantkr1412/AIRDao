import { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "../client";
import useNavbar from "./useNavbar";
import Modal from "./model";



const wallets = [createWallet("io.metamask")
];


const Navbar = () => {

    const {
      connectWallet,
      disconnectWallet,
      chain
    } = useNavbar();


    const navigate = useNavigate()
    const [isToggled, setToggle] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    const getDocument = document.querySelector("#menu");
    if(isToggled){
      getDocument.style.display = "none";
    }else{
      getDocument.style.display = "flex";
    }
    
  }, [isToggled]);


 const handleClickMenu = () =>{
    setToggle(!isToggled);
  }

  
  const toggleModal = () => {
    setShowModal(!showModal);
  };


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
                   
                </div>
                <div>
                       
                          <ConnectButton
                          onConnect = {
                            (wallet) =>{
                              const walletAddress = wallet.getAccount()
                              if(walletAddress.address){
                                connectWallet(walletAddress.address);
                              }
                            }
                          }
                          onDisconnect ={
                            (info) =>{
                              disconnectWallet();
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
                          chain={chain}
                           />

                           {/* <button style={{
                            background: "linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                            color: "black",
                            width: "140px",
                            height: "35px",
                            borderRadius: "100px",
                            border: "none",
                            marginRight: "3rem",
                            cursor: "pointer",
                            boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.4)",
                           }} 
                           onClick={toggleModal}
                           >
                            Log in /Sign up
                           </button> */}



                        
                    </div>
            </div>
            <Modal 
            show={showModal} 
            onClose={toggleModal} 
            connectWallet={connectWallet}
            disconnectWallet={disconnectWallet}
            client={client}
            chain={chain}
            />

        </div>
        <div className="navmanu" style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      backgroundColor:  "black",
      width: "100%",
      height: "70px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      color:"#6B6C6C"
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
          
          <a href="/" style={{fontWeight:"600",fontSize:"0.8rem" ,cursor:"pointer",
                    color:"white",
                    textDecoration:"none",
                    marginTop:"5px"
                  }} >
                 
                AirDAO <span style={{
                  color:"#838283"
                }}>Markets</span>
                </a>
          <div style={{
            display:"flex",

          }}>       
              <ConnectButton
                onConnect = {
                  (wallet) =>{
                    const walletAddress = wallet.getAccount()
                    if(walletAddress.address){
                      connectWallet(walletAddress.address)
                    }
                  }
                }
                onDisconnect ={
                  (info) =>{
                    disconnectWallet();
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
            chain={chain}

            // auth={{
            //   // The following methods run on the server (not client)!
            //   isLoggedIn: async () => {
            //     const authResult = await isLoggedIn();
            //     if (!authResult) return false;
            //     return true;
            //   },
            //   doLogin: async (params) => await login(params),
            //   getLoginPayload: async ({ address }) =>
            //     generatePayload({ address }),
            //   doLogout: async () => await logout(),
            // }}
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
                    "1rem",cursor:"pointer",marginLeft:"7px"}}>My Predictions</p>
                     <p onClick={()=>{
                       window.open('https://airdao-markets.gitbook.io/airdao-markets', '_blank');
                      handleClickMenu()
                    }} style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem",cursor:"pointer",marginLeft:"7px"}}>Docs</p>
                    
            </div>
      
          </div>
      
      </div>

    </div>
    </>
    )
}

export default Navbar;