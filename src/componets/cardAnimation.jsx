// CardAnimation.jsx
import React from "react";
import "./cardAnimation.css";

const cards = [
  {
    title: "Are social media platforms facing more regulations?",
    content: "Discover whether new regulations are being imposed on popular social media platforms. Understand the reasons behind these potential regulations and how they could affect users and companies.",
    boxShadow: "-2px 3px 16px 2px #C02A2A4D"
  },
  {
    title: "Are social media platforms facing more regulations?",
    content: "Discover whether new regulations are being imposed on popular social media platforms. Understand the reasons behind these potential regulations and how they could affect users and companies.",
    boxShadow: "2px 6px 12px 0px #2D2AC04D"
  },
  {
    title: "Are social media platforms facing more regulations?",
    content: "Discover whether new regulations are being imposed on popular social media platforms. Understand the reasons behind these potential regulations and how they could affect users and companies.",
    boxShadow: "0px 4px 16px 2px #15808E4D"
  },
  {
    title: "Are social media platforms facing more regulations?",
    content: "Discover whether new regulations are being imposed on popular social media platforms. Understand the reasons behind these potential regulations and how they could affect users and companies.",
    boxShadow: "4px -6px 16px 0px #4E8B004D"
  },
];








const CardAnimation = ({cardNo}) => {
  return (
    <div className="card-container">
      {/* {cards.map((card, index) =>{
        if(index === cardNo){
            return(<div key={index} className="card" style={{ boxShadow: card.boxShadow,
                filter: index === 1 || index ===3 ? 'blur(2px)' : 'none', 
            }}>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>)
        }
        
        })} */}
        <div className="card" style={{ 
            boxShadow: "4px -6px 16px 0px #4E8B004D",
            filter: cardNo === 1 || cardNo ===3 ? 'blur(2px)' : 'none', 
            }}>
            <div style={{
                // padding:"1rem",
                paddingBottom:"0",
            }}>
                <div style={{
                    display:"flex",
                    gap:"1rem"
                }}>
                    <div>
                    <img src={"profile.jpg"} alt="profile" style={{
                        width:"70px",
                        height:"70px",
                        borderRadius:"50%",
                    }} />
                    </div>
                    <div>
                    <div style={{
                            color:"rgb(112, 112, 112)",
                            marginTop:"0.5rem",
                            fontSize:"0.9rem",
                           
                        }}>
                    Event ID : 001
                    </div> 
                    <div style={{
                            fontSize:"1rem",
                            fontWeight:"600",
                           
                        }}>
                        will biden dropout ?
                    </div>
                    <div style={{
                            color:"rgb(112, 112, 112)",
                            // marginTop:"0.5rem",
                            fontSize:"0.9rem",
                           
                        }}>Resolution Date : 01-01-2024</div>
                    </div>
                    
                    
                    
                    
                </div>
                <p className="startDate" >Start Date:  01-01-2024</p>
                <div style={{
                    marginTop:"0.5rem",
                    width:"100%",
                    height:"120px",
                    display:"flex",
                    justifyContent:"space-around",
                    gap:"1rem",
                    overflowY:"scroll",
                    scrollbarWidth: "none",
                   
                    
                    }}>
                        <div>
                        <button style={{
                                marginTop:"20px",
                                backgroundColor:"green",
                                color:"white",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none",
                                cursor:"pointer"
                            }}
                            >Vote Yes </button>
                            <p  style={{
                                fontSize:"1.1rem",
                                color:"blue",
                                marginTop:"0.5rem",
                                textAlign:"center",
                                fontWeight:"600"
                            }}>70%</p>
                        </div>
                        <div>
                        <button style={{
                                marginTop:"20px",
                                backgroundColor:"red",
                                color:"white",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none",
                                 cursor:"pointer"
                            }}
                            >Vote No </button>
                            <p style={{
                                fontSize:"1.1rem",
                                color:"blue",
                                marginTop:"0.5rem",
                                textAlign:"center",
                                fontWeight:"600"
                            }}>30%</p>
                        </div>
                    

                </div>
            </div>
        </div>

    </div>
  );
};

export default CardAnimation;
