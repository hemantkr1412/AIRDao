import { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/walletContext";

const Navbar = ({handleScroll,upComingRef,popularRef,recentRef,howItWorksRef,roadMapref,tokenDetailsRef}) => {

    const navigate = useNavigate()
    const [isToggled, setToggle] = useState(true);
    const [isDropdown,setIsDropdown] = useState(false);

    const wallet = useWallet();

    useEffect(() => {
    const getDocument = document.querySelector("#menu");
    if(isToggled){
      getDocument.style.display = "none";
    }else{
      getDocument.style.display = "flex";
    }
    
  }, [isToggled]);

  console.log(wallet.isWalletConnected);


  const getAddress = () => {
    if (!wallet.isWalletConnected) {
      return "Connect Wallet";
    }

    let wallettype = localStorage.getItem("wallettype");

    if (wallettype == "browser") {
      return `${wallet?.publicKey
        .toString()
        .slice(0, 4)}...${wallet?.publicKey.toString().slice(39)}`;
    }
    if (wallettype == "mobile") {
      return `${wallet?.mobile?.publicKey
        .toString()
        .slice(0, 4)}...${wallet?.mobile?.publicKey.toString().slice(39)}`;
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
                AIRDOA <span style={{
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
                  }} >Ranks</div>
                   <div onClick={()=>{
                      navigate("/myPridiction")
                    }} style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} >My Predictions</div>
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
                        <div className="dropdown1">
                            <button
                             style={{
                              backgroundColor:"white",
                              color:"black",
                              width:"140px",
                              height:"35px",
                              borderRadius:"5px",
                              border:"none",
                              marginRight:"3rem",
                              cursor:"pointer"
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
                                        Metamask
                                        <img  src="phantom.png" alt="phantom" style={{
                                          width:"20px",
                                          height:"20px",
                                         
                                       
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
                        </div>
                        
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
          <img  src="logoxenPlay.png" alt="XenPLay"style={{
            width:"120px",
            height:"50px"
          }}/>
          
          {!isToggled ?   <img className="maunuicon" src="cancel.png"  alt="Close" onClick={handleClickMenu} style={{
            width:"30px",
            height:"30px"
          }}/>
          :
          <img  src="Group.svg"  alt="Menu" onClick={handleClickMenu} style={{
            width:"50px",
            height:"40px"
          }}/>
          }
   
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
                    <a href="/" style={{fontWeight:"600",fontSize:"1.1rem" ,cursor:"pointer"}} >Home</a>
                    <p onClick={()=>{
                      navigate("/markets")
                      handleClickMenu()
                    }} style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem",cursor:"pointer"}}>Markets</p>
                    <p style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem"}}>Connect Wallet</p>
            </div>
      
          </div>
      
      </div>

    </div>
    </>
    )
}

export default Navbar;