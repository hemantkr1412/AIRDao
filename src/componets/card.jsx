import "./navbar.css";

const Card = ({isPopular,isRecent,isUpcominng}) =>{
    return(
        <div className="cardContainer" style={{
            opacity: isRecent && "0.7",
            backgroundColor:"white"
        }}>
           
           <div style={{
            padding:"1rem",
            paddingBottom:"0",
           }}>
                <div style={{
                    display:"flex",
                    gap:"1rem"
                }}>
                    <div>
                    <img src="profile.jpg" alt="profile" style={{
                        width:"70px",
                        height:"70px",
                        borderRadius:"50%"
                    }} />
                    </div>
                    <div>
                        <div style={{
                            fontSize:"1rem",
                            fontWeight:"600"
                        }}>Presidential Election Winner 2024</div>
                        <div style={{
                            color:"rgb(112, 112, 112)",
                            marginTop:"0.5rem",
                            fontSize:"0.9rem",
                        }}>Resolution Date : 1 June 2024</div>
                    </div>
                </div>
                {isUpcominng && <p className="startDate" >Start Date: 22 April 2024</p>}
                {
                    !isUpcominng && <p style={{
                    textAlign:"center",
                }}>.</p>
                }
                <div style={{
                    marginTop:"0.5rem",
                    width:"100%",
                    height:"120px",
                    display:"flex",
                    flexDirection:"column",
                    gap:"1rem",
                    overflowY:"scroll",
                    scrollbarWidth: "none"
                    
                }}>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                    }}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                            <p style={{
                                fontSize:"1.1rem",
                                color:"rgb(112, 112, 112)"
                            }}>D Trump</p>
                        
                        </div>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                           {(isPopular || isRecent) && <div style={{
                                fontSize:"1.1rem",
                                color:"green",
                                marginRight:"0.5rem",
                            }}>70%</div>}
                            <button style={{
                                backgroundColor:"#F2F2F2",
                                color:"black",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none"
                            }}
                            >Vote</button>

                        </div>
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                    }}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                            <p style={{
                                fontSize:"1.1rem",
                                color:"rgb(112, 112, 112)"
                            }}>D Trump</p>
                        
                        </div>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                           {(isPopular || isRecent) && <div style={{
                                fontSize:"1.1rem",
                                color:"red",
                                marginRight:"0.5rem",
                            }}>20%</div>}
                            <button style={{
                                backgroundColor:"#F2F2F2",
                                color:"black",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none"
                            }}
                            >Vote</button>

                        </div>
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                    }}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                            <p style={{
                                fontSize:"1.1rem",
                                color:"rgb(112, 112, 112)"
                            }}>D Trump</p>
                        
                        </div>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                            {(isPopular || isRecent)  && <div style={{
                                fontSize:"1.1rem",
                                color:"red",
                                marginRight:"0.5rem",
                            }}>10%</div>}
                            <button style={{
                                backgroundColor:"#F2F2F2",
                                color:"black",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none"
                            }}
                            >Vote</button>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                borderTop:"1px solid rgba(112, 112, 112,0.5)",
                display:"flex",
                paddingLeft:"1rem",
                gap:'3rem'
            }}> 
                {
                    (isPopular || isRecent) && <p style={{
                            color:"rgb(112, 112, 112)",
                            marginTop:"0.5rem",
                        }}>$6,336 Vol</p>
                }
                <p  style={{
                            color:"rgb(112, 112, 112)",
                            marginTop:"0.5rem",
                            textAlign:"center"
                        }}>Last Date: 22 May 2024</p>
            </div>
        </div>
    )
}

export default Card;