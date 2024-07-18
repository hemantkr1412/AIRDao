import { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({handleScroll,upComingRef,popularRef,recentRef,howItWorksRef,roadMapref,tokenDetailsRef}) => {
    const navigate = useNavigate()
    const [isToggled, setToggle] = useState(true);
    const [isDropdown,setIsDropdown] = useState(false);

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
    return (
    <>
        <div className="navbar">
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

                <a href="/" style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                    textDecoration:"none"
                  }} ><img src="logoxenPlay.png" alt="logo" style={{
                    width:"200px",
                    height:"70px"
                }}/>
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
                      navigate("/markets")
                    }} style={{fontWeight:"500",fontSize:"1rem" ,cursor:"pointer",
                    color:"white",
                  }} >Ranks</div>
                   <div onClick={()=>{
                      navigate("/markets")
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
                        <button style={{
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
                            Connect Wallet
                            <img src="downArrow.svg" alt="down-arrow" style={{
                              marginLeft:"0.4rem",
                              rotate:isDropdown?"180deg":"0deg"
                            }}/>
                        </button>
                        {isDropdown&& <div style={{
                          position:"absolute",
                          marginTop:"10px",
                          width:"140px",
                          backgroundColor:"white",
                          display:"flex",
                          flexDirection:"column",
                          borderRadius:"10px",
                          cursor:"pointer"
                      
                        }}>
                          <p style={{
                            padding:"1rem",
                            borderBottom: "1px solid rgba(164, 164, 164, 1)"
                          }}>
                            Phantom
                          </p>
                          {/* <hr /> */}
                          <p style={{
                            padding:"1rem",

                          }}>
                            Solfare
                          </p>


                        </div>}
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