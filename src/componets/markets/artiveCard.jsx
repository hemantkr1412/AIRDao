
import { useState } from "react";
import "./market.css";
import Modal from "../model";

const Card = ({isPopular,isRecent,isUpcominng,event}) =>{
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
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
                            color:"rgb(112, 112, 112)",
                            marginTop:"0.5rem",
                            fontSize:"0.9rem",
                           
                        }}>
                    Event ID : 00{event.id}
                    </div> 
                    <div style={{
                            fontSize:"1rem",
                            fontWeight:"600",
                           
                        }}>
                        {event.event_name}
                    </div>
                    <div style={{
                            color:"rgb(112, 112, 112)",
                            // marginTop:"0.5rem",
                            fontSize:"0.9rem",
                           
                        }}>Resolution Date : {formatDate(event.resolution_date)}</div>
                    </div>
                    
                    
                    
                    
                </div>
                {isUpcominng && <p className="startDate" >Start Date:  {formatDate(event.start_date)}</p>}
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
                        <div>
                        <button  onClick={toggleModal} style={{
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
                        <Modal show={showModal} onClose={toggleModal} />
                        <div>
                        <button  onClick={toggleModal} style={{
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
                                color:"black",
                                fontWeight:"500"
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
                            }}>0%</div>}
                           {! isUpcominng && <button 
                            className="votMultiButon"
                            style={{
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none",
                                cursor:"pointer"
                            }}
                            >Vote</button>}
                            {
                                isUpcominng && 
                                <button 
                            // className="votMultiButon"
                            style={{
                                backgroundColor:"#F2F2F2",
                                color:"#7D7D7D",
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                border:"none",
                                // cursor:"pointer"
                            }}
                            >Vote</button>
                            }

                        </div>
                        </div>
                        )
                    })}
                        
                </div>

                }
                
            </div>

            <div className="cardfooter" style={{
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
                        }}>Last Date:  {formatDate(event.end_date)}</p>
            </div>
        </div>
    )
}

export default Card;


const formatDate = (dateString) => {
    // console.log(dateString);
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
        hour12: false
    };
    const formattedDate = date.toLocaleDateString('en-CA', options).replace(/, /g, ' ');
    const [datePart, timePart] = formattedDate.split(' ');
    return `${datePart} UTC : ${timePart}`;
};
