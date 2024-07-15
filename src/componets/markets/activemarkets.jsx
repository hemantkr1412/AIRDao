import Card from "./artiveCard";
import { useEffect, useState } from "react";


const ActiveMarket = ({popularRef}) =>{

    const [eventData,setEventData] = useState();
    const [activeEvent,setActiveEvent] = useState();
    const [recentEvent,setRecentEvent] = useState();
    const [upcomingEvent,setUpcomingEvent] = useState();
  
    useEffect(() => {
    populateEvent();
    }, []);

    
    const populateEvent = async()=>{
        await fetch( "http://52.66.253.239/api/v1/event/")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const responseData = data.results;
        //   console.log(responseData);

          const today = new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth()+1).padStart(2,'0');
          const day = String(today.getDate()).padStart(2,'0');

          const formattedDate = `${year}-${month}-${day}`;

        //   console.log(formattedDate)

            const recent = [];
            const active = [];
            const upcoming = [];

            responseData.forEach(event => {
                const startDate = new Date(event.start_date);
                const endDate = new Date(event.end_date);

                if (endDate < today) {
                    recent.push(event);
                } else if (startDate < today && endDate >= today) {
                    active.push(event);
                } else if (startDate >= today) {
                    upcoming.push(event);
                }
            });

            setRecentEvent(recent);
            setActiveEvent(active);
            setUpcomingEvent(upcoming);
        

          setEventData(responseData)
       

        })
        .catch((error) => {
          console.error("Error:", error);
        });
        
    }


    return(
        <div ref={popularRef} 
        style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            marginTop:"3rem",
            paddingTop:"3rem"
        }}>
            <div style={{
                width:"96%",
                display:"flex",
                justifyContent:"space-between",
                marginLeft:"2%",
                marginRight:"2%"
            }}>
                <div>
                    <p style={{
                        fontSize:"1.5rem",
                        fontWeight:"700"
                    }}>Active Markets</p>
                </div>
                <div>
                    <input className="inpt" type="text" placeholder="Search" style={{
                    width:"200px",
                    height:"10px",
                    borderRadius:"5px",
                    border:"1px solid grey",
                    padding:"1rem",
                    // backgroundColor:"white",
                    marginRight:"1rem"
                    
                }} />
                    <select style={{
                        width:"200px",
                        height:"50px",
                        borderRadius:"5px",
                        borderColor:"rgba(112, 112, 112,0.3)",
                        padding:"1rem",
                        backgroundColor:"transparent",
                    
                    }}>
                        <option>
                           All Categories
                        </option>
                    </select>
                </div>
               
            </div> 
            <div
            className="cardMainBox"
             style={{
                padding:"2%",
                // display:"flex",
                // justifyContent:"space-between",
                // flexWrap:"wrap",
                gap:"2rem",
            }}>
                {
                    activeEvent&& activeEvent.map(
                        (event,index)=> {
                            return(
                                <div key={index+1}>
                                    <Card isPopular={true}
                                        event={event}
                                        // isUpcominng={true}
                                    />
                                </div>
                            )
                        }
                    )
                }
                {/* <Card isPopular={true}/> */}
                {/* <Card isPopular={true}/> */}
                {/* <Card isPopular={true}/> */}
                
            </div>
            <div style={{
                width:"96%",
                display:"flex",
                justifyContent:"space-between",
                marginLeft:"2%",
                marginRight:"2%"
            }}>
                <div>
                    <p style={{
                        fontSize:"1.5rem",
                        fontWeight:"700"
                    }}>Upcoming Event</p>
                </div>
                <div>
                    <input className="inpt" type="text" placeholder="Search" style={{
                    width:"200px",
                    height:"10px",
                    borderRadius:"5px",
                    border:"1px solid grey",
                    padding:"1rem",
                    // backgroundColor:"white",
                    marginRight:"1rem"
                    
                }} />
                    <select style={{
                        width:"200px",
                        height:"50px",
                        borderRadius:"5px",
                        borderColor:"rgba(112, 112, 112,0.3)",
                        padding:"1rem",
                        backgroundColor:"transparent",
                    
                    }}>
                        <option>
                           All Categories
                        </option>
                    </select>
                </div>
               
            </div> 
            <div
            className="cardMainBox"
             style={{
                padding:"2%",
                // display:"flex",
                // justifyContent:"space-between",
                // flexWrap:"wrap",
                gap:"2rem",
            }}>
                {
                    upcomingEvent&& upcomingEvent.map(
                        (event,index)=> {
                            return(
                                <div key={index+1}>
                                    <Card isPopular={true}
                                        event={event}
                                        isUpcominng={true}
                                    />
                                </div>
                            )
                        }
                    )
                }
                {/* <Card isPopular={true}/> */}
                {/* <Card isPopular={true}/> */}
                {/* <Card isPopular={true}/> */}
                
            </div>
            <div style={{
                width:"96%",
                display:"flex",
                justifyContent:"space-between",
                marginLeft:"2%",
                marginRight:"2%"
            }}>
                <div>
                    <p style={{
                        fontSize:"1.5rem",
                        fontWeight:"700"
                    }}>Recent Markets</p>
                </div>
                <div>
                    <input className="inpt" type="text" placeholder="Search" style={{
                    width:"200px",
                    height:"10px",
                    borderRadius:"5px",
                    border:"1px solid grey",
                    padding:"1rem",
                    // backgroundColor:"white",
                    marginRight:"1rem"
                    
                }} />
                    <select style={{
                        width:"200px",
                        height:"50px",
                        borderRadius:"5px",
                        borderColor:"rgba(112, 112, 112,0.3)",
                        padding:"1rem",
                        backgroundColor:"transparent",
                    
                    }}>
                        <option>
                           All Categories
                        </option>
                    </select>
                </div>
               
            </div> 
            <div
            className="cardMainBox"
             style={{
                padding:"2%",
                // display:"flex",
                // justifyContent:"space-between",
                // flexWrap:"wrap",
                gap:"2rem",
            }}>
                {
                    recentEvent&& recentEvent.map(
                        (event,index)=> {
                            return(
                                <div key={index+1}>
                                    <Card isPopular={true}
                                        event={event}
                                        isRecent={true}
                                    />
                                </div>
                            )
                        }
                    )
                }
                {/* <Card isPopular={true}/> */}
                {/* <Card isPopular={true}/> */}
                {/* <Card isPopular={true}/> */}
                
            </div>

        </div>
    )
}

export default ActiveMarket;