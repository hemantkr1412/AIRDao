
import { useState } from "react";
import "./market.css";
import Modal from "../model";

const Card = ({isPopular,isRecent,isUpcominng,event}) =>{
    const [showModal, setShowModal] = useState(false);
    const [voteId,setVoteId] = useState(null);
    const [voteIndex,setVoteIndex] = useState(null)

    const toggleModal = () => {
      setShowModal(!showModal);
    };
    return(
        <div className="cardContainer2" style={{
            background: (isUpcominng || isRecent) ?"rgba(196, 154, 108, 1)": "linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)",
            boxShadow:(isUpcominng || isRecent) ?"2px 4px 8px 0px rgba(196, 154, 108, 0.8)":"2px 4px 8px 0px #00000040",
            border:(isUpcominng || isRecent) ?"":"0.5px solid white"

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
                            color:(isUpcominng || isRecent) ?"rgb(0,0,0,0.8)":"rgb(0,0,0,0.8)",
                            marginTop:"0.5rem",
                            fontSize:"0.9rem",
                           
                        }}>
                    Event ID : 00{event.id}
                    </div> 
                    <div style={{
                            fontSize:"1rem",
                            fontWeight:"500",
                            color:(isUpcominng || isRecent) ?"black":"rgb(0,0,0,1)",
                        }}>
                        {event.event_name}
                    </div>
                    <div
                    className="resulationDate"
                     style={{
                            // color:"rgb(0,0,0,0.8)",
                            color:(isUpcominng || isRecent) ?"rgb(0,0,0,0.8)":"rgb(0,0,0,0.8)",
                            // marginTop:"0.5rem",
                           
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
                    (

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
                                {
                                    event.possible_results.map((result,index) =>{
                                        return(
                                            <div>
                                            {(!isUpcominng && !isRecent) &&
                                            <button  onClick={()=>{
                                                toggleModal()
                                                setVoteId(result.id)
                                                setVoteIndex(index)
                                            }} style={{
                                                    marginTop:"20px",
                                                    backgroundColor:index === 0 ?"green":"red",
                                                    color:"white",
                                                    width:"120px",
                                                    height:"35px",
                                                    borderRadius:"5px",
                                                    border:"none",
                                                    cursor:"pointer"
                                                }}
                                                >Vote {result.result} 
                                            </button>}
                                            {
                                            (isUpcominng || isRecent) && 
                                                    <button 
                                                // className="votMultiButon"
                                                style={{
                                                    backgroundColor:index === 0 ?"rgb(0, 128, 0,0.6)":"rgb(255, 0, 0,0.6)",
                                                    color:"rgb(255, 255, 255,0.7)",
                                                    width:"120px",
                                                    height:"35px",
                                                    borderRadius:"5px",
                                                    border:"none",
                                                    // cursor:"pointer"
                                                }}
                                                >Vote {result.result} </button>
                                                }
                                                <p  style={{
                                                    fontSize:"1.1rem",
                                                    // color:"blue",
                                                    marginTop:"0.5rem",
                                                    textAlign:"center",
                                                    fontWeight:"600",
                                                    color:(isUpcominng || isRecent) ?"rgb(0,0,0,0.8)":"blue"
                                                }}>
                                                    {result.percentage}%
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                                
                                {/* <div>
                                <button  onClick={()=>{
                                    toggleModal()
                                    setVoteId()
                                }} style={{
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
                                </div> */}
                                <Modal 
                                event={event}
                                show={showModal} onClose={toggleModal} 
                                voteId={voteId}
                                voteIndex={voteIndex}
                                />
                                {/* <div>
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
                                </div> */}
                            
        
                            </div>
                    )
                    

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
                  
                    {event.possible_results.map((result,index)=> {
                        return(
                             <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                    }}>
                            <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                            <p  style={{
                                fontSize:"1.1rem",
                                // color:"black",
                                fontWeight:"500",
                                color:(isUpcominng || isRecent) ?"black":"black"
                            }}>{result.result}</p>
                    
                        
                        </div>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                        }}>
                           {(isPopular || isRecent) && <div style={{
                                fontSize:"1.1rem",
                                // color:"green",
                                marginRight:"0.5rem",
                                color:(isUpcominng || isRecent) ?"rgb(0,0,0,0.8)":"green"
                            }}>{result.percentage}%</div>}
                           {(!isUpcominng && !isRecent) && <button
                           onClick={()=>{

                                console.log("Cliked")
                                toggleModal()
                                setVoteId(result.id)
                                setVoteIndex(index)
                            }} 
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
                                (isUpcominng || isRecent) && 
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
                     <Modal 
                        event={event}
                        show={showModal} onClose={toggleModal} 
                        voteId={voteId}
                        voteIndex={voteIndex}
                        

                    />
                        
                </div>

                }
                
            </div>

            <div className="cardfooter" style={{
                borderTop:"1px solid rgba(112, 112, 112,0.5)",
                display:"flex",
                paddingLeft:"1rem",
                paddingRight:"1rem",
                justifyContent:"space-between",
                // gap:'3rem'
            }}> 
                {   
                    (isPopular || isRecent) && <p style={{
                            // color:"rgb(0,0,0,0.8)",
                            color:(isUpcominng || isRecent) ?"rgb(0,0,0,0.8)":"rgb(0,0,0,0.8)",
                            marginTop:"0.5rem",
                        }}>${Number(event.token_volume_in_doller).toFixed(2)}</p>
                }
                <p  style={{
                            // color:"rgb(0,0,0,0.8)",
                            color:(isUpcominng || isRecent) ?"rgb(0,0,0,0.8)":"rgb(0,0,0,0.8)",

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