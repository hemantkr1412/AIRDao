import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = ({handleScroll,upComingRef,popularRef,recentRef,howItWorksRef,roadMapref,tokenDetailsRef}) => {
    const [isToggled, setToggle] = useState(true);

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

                <img src="logoxenPlay.png" alt="logo" style={{
                    width:"200px",
                    height:"60px"
                }}/>
                </div>
                
                <div style={{
                    display:"flex",
                    color:"white",
                    width:"60%",
                    gap:"4rem",
                    justifyContent:"right",
                    paddingRight:"3rem",
                    alignItems: 'center',
                }}>
                    <div>Home</div>
                    <div>Markets</div>
                    <div>
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
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '5vh',
                backgroundColor: 'white',
                gap:"2.5rem",
                boxShadow:"10px 10px black",
                
            }}>
                    <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(upComingRef)
                    }}>Upcoming Predictions</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(popularRef)
                    }}>Popular Market</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(howItWorksRef)
                    }}>How it Works</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(roadMapref)
                    }}>Road Map</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(tokenDetailsRef)
                    }}>Token Details</p>
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
          <img  src="Group.png"  alt="Menu" onClick={handleClickMenu} style={{
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
                    <p style={{fontWeight:"600",fontSize:"1.1rem"}} >Home</p>
                    <p style={{fontWeight:"600",fontSize:"1.1rem",marginTop:
                    "1rem"}}>Markets</p>
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