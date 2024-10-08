import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Event.css";
import Modal from '../markets/model';
import { useSelector } from 'react-redux';
import SkeletonLoader from './Skeleton';
import { ToastContainer } from 'react-toastify';
const Event = () =>{
    // const { id } = useParams(); 
    // const { id, account } = useSelector(state => state.accountDetails);
    const { id: paramId } = useParams(); 
    const { id: accountId, account } = useSelector(state => state.accountDetails);
    const reRender = useSelector((state) => state.reRender.reRender); 
    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;
    const [showModal, setShowModal] = useState(false);
    const [voteId,setVoteId] = useState(null);
    const [voteIndex,setVoteIndex] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [isRecent, setIsRecent] = useState(false);

   
    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const isUpcominng= false;
    // const isRecent = false;
    // const isPopular = false;

    const [eventData,setEventData] = useState([]);
    const [voteData,setVoteData] = useState([])

    useEffect(()=>{
        populateEvent();

    },[accountId,reRender]);

    const populateEvent = async () => {
        const url = new URL(`${API_URL}/event/${paramId}`)
        if(accountId){
            url.searchParams.append("account_id",accountId);
        }
        const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(url, requestOptions);
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
            }
        
            const result = await response.json();
            console.log(result);
            setEventData(result.event);
            setVoteData(result.votes);
            if (result?.event?.end_date) {
                
                // Parse the event end date
                const eventEndDate = new Date(result.event.end_date);
          
                // Get the current date and time
                const currentDate = new Date();
          
                // Compare event end date with current date
                if (eventEndDate > currentDate) {
                  setIsRecent(false); // Future date
                //   console.log("Future date")
                } else {
                  setIsRecent(true);  // Past date
                //   console.log("Past date")
                }
              }
            setIsLoading(false)
          } catch (error) {
            console.error("Error:", error);
          }
      };




    if(isLoading){
        return(
            <div style={{ 
                width: "100%", 
                minHeight: "100vh",
                backgroundColor:"white"
                }}>
                    <SkeletonLoader />
             
            </div>
        )
    }


    // console.log(id);
    return(
        <div  style={{ 
        width: "100%", 
        minHeight: "100vh",
        backgroundColor:"white"
        }}>

            <div style={{
                 maxWidth: "900px",
                 margin: "0px auto",
                 padding: "20px",
                 minHeight:"100vh",
                 display:"flex",
                 flexDirection:"column",
                 
            }}>
                
                <ToastContainer />

                

                <div style={{
                    display:"flex",
                    marginTop:"7rem",
                    justifyContent:"space-between"
                }}>
                    <div style={{
                        display:"flex",
                        gap:"1rem",
                    }}>
                    <div>
                        <img src={eventData?.avatar} alt="profile" style={{
                            width:"70px",
                            height:"70px",
                            borderRadius:"50%",
                            boxShadow: "2px 4px 8px 0px #00000040",
                        }} />
                    </div>
                    <div>
                        <div style={{
                            display:"flex",
                            gap:"4rem"
                        }}>
                            <p className='event-subheading'>Event ID : 00{eventData?.id}</p>
                            <p className='event-subheading'>Volume: ${eventData?.token_volume_in_doller}</p>
                        </div>
                        <p className='event-title'>{eventData?.event_name}</p>
                        <div className='event-data-box'>
                            <p className='event-subheading'>Last Date:  {formatDate(eventData?.end_date)}</p>
                            <p className='event-subheading'>Resolution Date : {formatDate(eventData?.resolution_date)}</p>
                        </div>
                    </div>
                    </div>
                    
                    <div>
                        <img
                        onClick={() =>
                            window.open(`https://testnet.airdao.io/explorer/tx/0x${eventData?.create_event_tx_receipt}`)
                        }
                        style={{
                            width:"30px",
                            height:"30px",
                            cursor:"pointer"
                        }} src='link-svgrepo-com.svg' alt='linkIcon' />
                    </div>
                    
                    
                </div>

                <div style={{
                    marginTop: "2rem",
                    background: "linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)",
                    height: "auto",
                    width: "88%",  // Fixed spacing issue
                    maxWidth: "900px",
                    borderRadius: "10px",
                    boxShadow: (false) ? "2px 4px 8px 0px rgba(196, 154, 108, 0.8)" : "2px 4px 8px 0px #00000040",
                    padding: "40px 6%"
                }}>
                    
                {
                 
                    <div 
                    style={{
                    marginTop:"0.5rem",
                    width:"100%",
                    height:"auto",
                    display:"flex",
                    flexDirection:"column",
                    gap:"2rem",
                    justifyContent:"space-between",
                    overflowY:"scroll",
                    scrollbarWidth: "none",
                   }}>
                  
                    {eventData?.possible_results?.map((result,index)=> {
                        return(
                             <div
                             key={`${index}+${result.percentage}`}
                             style={{
                            display:"flex",
                            justifyContent:"space-between",
                            // paddingTop:index ===0 ?"":"1rem",
                            // borderTop:index ===0 ?"":"1px solid grey"
                            }}>
                            
                                <div style={{
                                display:"flex",
                                alignItems:"center",
                                width:"33%"
                                }}>
                                    <p  style={{
                                        fontSize:"1.1rem",
                                        // color:"black",
                                        fontWeight:"500",
                                        color:(isUpcominng || isRecent) ?"black":"black"
                                    }}>{result.result}</p>
                                
                                </div>
                                <div style={{
                                    width:"33%",
                                    display:"flex",
                                    justifyContent:"center",
                                }}>
                                <p  style={{
                                    fontSize:"1.1rem",
                                    // color:"black",
                                    fontWeight:"500",
                                    color:(isUpcominng || isRecent) ?"black":"black"
                                }}>{result.percentage}%</p>
                                </div>
                                <div style={{
                                    display:"flex",
                                    justifyContent:"right",
                                    width:"33%"
                                }}>
                            
                                {(!isUpcominng && !isRecent) && <button
                                onClick={()=>{

                                        console.log("Cliked")
                                        toggleModal()
                                        setVoteId(result.id)
                                        setVoteIndex(index)
                                    }} 
                                    style={{
                                        width: "120px",
                                        height: "35px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer",
                                        color:"white",
                                        backgroundColor: result.result === 'Yes' ? 'green' : result.result === 'No' ? 'red' : undefined
                                      }}
                                      className={result.result !== 'Yes' && result.result !== 'No' ? 'votMultiButon' : ''}
                                    // className="votMultiButon"
                                    // style={{
                                    //     width:"120px",
                                    //     height:"35px",
                                    //     borderRadius:"5px",
                                    //     border:"none",
                                    //     cursor:"pointer"
                                    // }}
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
                        event={eventData}
                        show={showModal} onClose={toggleModal} 
                        voteId={voteId}
                        voteIndex={voteIndex}
                        

                    />
                        
                   </div>
                   

                }

                </div>

                {(accountId&& voteData.length !==0) &&<div style={{
                    marginTop: "2rem",
                    background: "linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)",
                    height: "auto",
                    width: "88%",  // Fixed spacing issue
                    maxWidth: "900px",
                    borderRadius: "10px",
                    boxShadow: "2px 4px 8px 0px #00000040",
                    padding: "40px 6%"
                }}>
                    <p style={{
                        textAlign:"center",
                        fontSize:"1.5rem",
                        marginBottom:"1rem"
                    }}>My Votes</p>
                   
                    {
                       voteData?.map((vote,index) =>{
                            return(
                            <div 
                            key={index}
                            style={{
                                paddingTop:index ===0 ?"":"5px",
                                borderTop:index ===0 ?"":"1px solid grey",
                                paddingBottom:"8px",
                            }}
                            className='vote-details'> 
                            <div className='vote-details-box'>
                                <p style={{
                                    fontWeight:"600"
                                }}>Serial No: {index +1}</p>
                                <p>Tokens Committed: <span style={{
                                    // fontWeight:"600"
                                }}>{vote.token_staked}</span></p>
                                <p>Tokens Rewarded: <span style={{
                                    // fontWeight:"600"
                                }}>{vote.amount_rewarded === null?"N/A":vote.amount_rewarded}</span></p>
                            </div>
                            <div className='vote-details-box'>
                                <p style={{
                                    fontWeight:"600"
                                }}>Event Status : <span style={{
                                    fontWeight:"600"
                                }}>{vote.status}</span></p>
                                <p>Committed Hash:    <img
                            onClick={() =>
                            window.open(`https://testnet.airdao.io/explorer/tx/${vote.tx_hash}`)
                            }
                            style={{
                            width:"15px",
                            height:"15px",
                            cursor:"pointer"
                            }} src='link-svgrepo-com.svg' alt='linkIcon' /></p>
                                <p>Rewarded Hash: {vote.amount_rewarded === null?"N/A":<img
                            onClick={() =>
                            window.open(`https://testnet.airdao.io/explorer/tx/${vote.claimed_tx_hash
                            }`)
                            }
                            style={{
                            width:"15px",
                            height:"15px",
                            cursor:"pointer"
                            }} src='link-svgrepo-com.svg' alt='linkIcon' />
                            }
                            </p>
                            </div>
                            <div className='vote-details-box-button'>
                                <p style={{
                                    fontWeight:"600",
                                    textAlign:"center"
                                }}>Voted</p>
                                <button style={{
                                width:"120px",
                                height:"35px",
                                borderRadius:"5px",
                                // border:"none",
                                // cursor:"pointer",
                                backgroundColor:"transparent"
                            }}>{vote.possible_result.result}</button>
                            </div>

                                
                            </div>
                                
                            )
                        })
                    }
                </div>}


            </div>
            
        </div>
    )
}

export default Event;

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