
import ActiveMarket from "./activemarkets";
import useEvent from "../useEvent";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Markets = ()=>{

    const event = useEvent();

    //  console.log(event)


    
    
    const [filteredEvent,setFiltredEvent] = useState(event.activeEvent);
    const [categoryName,setCategoryName] = useState("All");
    const [feesData,setFeesData] = useState({
        total_volume_locked:0,
        total_platform_fee:0,
        total_burn_fee:0
    });
    // console.log(event.activeEvent,"<<---ACTIVE EVENT --->>")


    useEffect(() => {
        console.log("use Effect of Markets");
        setFiltredEvent(event.activeEvent); // Update filtered events
        console.log(event.activeEvent, "Active Event from Market");
        
        const retrievedData = JSON.parse(localStorage.getItem('feesData'));
        setFeesData(retrievedData); // Refresh fees data
    }, [event.activeEvent, event.leaderBoard, event.popularEvent, event.upcomingEvent]); // Add other dependencies if needed
    

    const handleCategory = (category) => {
        setCategoryName(category)
        if(category === 'All'){
            setFiltredEvent(event.activeEvent);
        }else{
            const newFilteredEvent = event.activeEvent.filter((event) => event.category.name === category);
            setFiltredEvent(newFilteredEvent);
        }

    };

   


    
    return(
    <div style={{width:"100%",
        minHeight:"100vh",
        marginBottom:"2rem"
    }}>
         <ToastContainer />
       
        <div style={{
            width:"100%",
            minHeight:"95vh",
            display:"flex",
        }}>
          
            <div  
            className="marketContainer"
            style={{
                 minHeight:"95vh",

            }}>
                    <div
                    className="marketSubNav"
                     style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    // backgroundColor: 'white',
                    background:"linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                    gap:"2.5rem",
                    marginTop:"5rem",
                    // position:"sticky",
                    // boxShadow:"1px 2px 2px black",
                    boxShadow: "rgba(0, 0, 0, 0.35) 5px 2px 5px"
                    
                }}>
                     <p 
                     onClick={
                        ()=>handleCategory("All")
                        // notify
                    } 
                     style={{
                            fontWeight:categoryName === "All" ? "700":"500",
                            cursor:"pointer"
                        }} >All</p>
                    {
                        event.categories&&(event.categories).map((category) =>{
                            return(
                                <p key={category.name} onClick={
                                    ()=>handleCategory(category.name)
                                } style={{
                                    fontWeight:categoryName === category.name ? "700":"500",
                                    cursor:"pointer",

                                    }} >{category.name}</p>
                            )
                        })
                    }
                       
            </div>

            {/* <div className="filterSearchMobile">
                <div>
                    <p style={{
                    fontWeight:"500",
                    color:"rgba(0, 0, 0, 0.5)",
                    fontSize:"1.1rem"

                }}>Filter</p> 
                </div>
                <div>
                    <input type="text" placeholder="Search" style={{
                    width:"200px",
                    height:"8px",
                    borderRadius:"5px",
                    borderColor:"rgba(112, 112, 112,0.3)",
                    padding:"1rem",
                    backgroundColor:"white",
                    marginRight:"1rem"
                }} />
                 <img src="filter.svg" alt="filter" style={{
                    width:"30px",
                    height:"auto"
                }} />
                </div>
                

            </div> */}
                <div 
                className="tokenInfoContainer"
                style={{
                    gap:"2rem",
                    marginTop:"5rem",
                }}>

                    <div
                    className="valueContainer"
                     style={{
                        height:"120px",
                        background:"linear-gradient(180deg, #F0E68C 0%, #F5DEB3 100%)",
                        borderRadius:"5px",
                        // boxShadow:"#3E6FD9 0px 8px 23px",
                        padding:"1rem",
                        border:"1px solid rgba(212, 144, 0, 1)",
                        color:"black",
                        boxShadow: "2px 3px 12px 0px rgba(0, 0, 0, 0.4)"

                    }}>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <h3>Total Value Locked</h3>
                            <img src="lock.svg" alt="filter" style={{
                                width:"30px",
                                height:"auto"
                            }} />
                        </div>
                        <div>
                            <h1>${feesData.total_volume_locked}</h1>
                        </div>

                    </div>
                    <div 
                      className="valueContainer"
                    style={{
                        
                        height:"120px",
                        background:"linear-gradient(180deg, #F0E68C 0%, #F5DEB3 100%)",
                        borderRadius:"5px",
                        // boxShadow:"#3E6FD9 0px 8px 23px",
                        padding:"1rem",
                        border:"1px solid rgba(212, 144, 0, 1)",
                        color:"black",
                        boxShadow: "2px 3px 12px 0px rgba(0, 0, 0, 0.4)"
                    }}>
                         <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <h3>Total Fees Generated</h3>
                            <img src="cash.svg" alt="filter" style={{
                                width:"30px",
                                height:"auto"
                            }} />
                        </div>
                        <div>
                            <h1>${feesData.total_platform_fee}</h1>
                        </div>

                    </div>
                    <div 
                      className="valueContainer"
                    style={{
                        height:"120px",
                        background:"linear-gradient(180deg, #F0E68C 0%, #F5DEB3 100%)",
                        borderRadius:"5px",
                        // boxShadow:"#3E6FD9 0px 8px 23px",
                        padding:"1rem",
                        border:"1px solid rgba(212, 144, 0, 1)",
                        color:"black",
                        boxShadow: "2px 3px 12px 0px rgba(0, 0, 0, 0.4)"
                    }}>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <h3>Total Tokens Burnt</h3>
                            <img src="fire.svg" alt="filter" style={{
                                width:"30px",
                                height:"auto"
                            }} />
                        </div>
                        <div>
                            <h1>{0}</h1>
                        </div>

                    </div>

                </div>
                <ActiveMarket 
                    event={filteredEvent}
                    title={"Active"}
                />


            </div>


        </div>


        
    </div>
    
)
}

export default Markets;