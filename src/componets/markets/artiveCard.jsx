import "./market.css";

const Card = ({isPopular,isRecent,isUpcominng,event}) =>{
    console.log(event)
    return(
        <div className="cardContainer2" style={{
            backgroundColor:"white",
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
                    <img src={event.avatar} alt="profile" style={{
                        width:"70px",
                        height:"70px",
                        borderRadius:"50%",
                    }} />
                    </div>
                    <div>
                    <div style={{
                            fontSize:"1rem",
                            fontWeight:"600",
                           
                        }}>
                        {event.event_name}
                    </div>
                    <div style={{
                            color:"rgb(112, 112, 112)",
                            marginTop:"0.5rem",
                            fontSize:"0.9rem",
                           
                        }}>Resolution Date : {event.resolution_date}</div>
                    </div>
                    
                    
                    
                    
                </div>
                {isUpcominng && <p className="startDate" >Start Date:  {event.start_date}</p>}
                {
                    !isUpcominng && <p style={{
                    textAlign:"center",
                }}>.</p>
                }
                {
                    event.possible_results.length === 2 &&
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
                        <button style={{
                                marginTop:"20px",
                                backgroundColor:"red",
                                color:"white",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none"
                            }}
                            >Vote Yes</button>
                        <button style={{
                                marginTop:"20px",
                                backgroundColor:"green",
                                color:"white",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none"
                            }}
                            >Vote No</button>
                    

                    </div>

                }
                {
                    event.possible_results.length !== 2 &&
                    <div style={{
                    marginTop:"0.5rem",
                    width:"100%",
                    height:"120px",
                    display:"flex",
                    flexDirection:"column",
                    gap:"1rem",
                    overflowY:"scroll",
                    scrollbarWidth: "none",
                   
                    
                }}>
                  
                    {event.possible_results.map((result)=> {
                        return(
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
                            }}>{result.result}</p>
                        
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
                        )
                    })}
                        
                </div>

                }
                
            </div>

            <div style={{
                borderTop:"1px solid rgba(112, 112, 112,0.5)",
                display:"flex",
                paddingLeft:"1rem",
                paddingRight:"1rem",
                justifyContent:"space-between",
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
                        }}>Last Date: {event.end_date}</p>
            </div>
        </div>
    )
}

export default Card;