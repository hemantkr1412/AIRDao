import { useEffect, useState } from "react";
import Card from "./artiveCard";
import useEvent from "../useEvent";


const ActiveMarket = ({popularRef,event,title}) =>{

    const eventUse = useEvent();
    

    const [searchedEvent,setSearchedEvent] = useState(event);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [filtredEvent,setFilterEvent] = useState([])

    useEffect(()=>{
        setFilterEvent(event);
        setSearchedEvent(event);
    },[event]);


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        if(e.target.value === 'All'){
            setSearchedEvent(event);
            setFilterEvent(event)
        }else{
            console.log(event);
            const newFilteredEvent = event?.filter((event) => event.category.name === e.target.value);
            setSearchedEvent(newFilteredEvent);
            setFilterEvent(newFilteredEvent);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        // console.log(filtredEvent,"Handle Search Change");
        const filteredEvents = filtredEvent?.filter(event =>
            event.event_name.toLowerCase().includes((e.target.value).toLowerCase())
        );

        setSearchedEvent(filteredEvents);
    };

    



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
                    }}>{title} Markets</p>
                </div>
                <div>
                    <input className="inpt" type="text" placeholder="Search" 
                    value={searchTerm}
                    onChange={(e)=>handleSearchChange(e)}
                    style={{
                    width:"200px",
                    height:"10px",
                    borderRadius:"5px",
                    border:"1px solid grey",
                    padding:"1rem",
                    // backgroundColor:"white",
                    marginRight:"1rem"
                  
                }} />
                    {title === "Active" && <select style={{
                        width:"200px",
                        height:"50px",
                        borderRadius:"5px",
                        borderColor:"rgba(112, 112, 112,0.3)",
                        padding:"1rem",
                        backgroundColor:"transparent",
                    
                    }}>
                              <option value="">Sort By</option>
                              <option value="new">New</option>
                              <option value="ending_soon">Ending soon</option>
                             
                    </select>}
                    {title !== "Active" && (
                        <select
                        style={{
                            width: "200px",
                            height: "50px",
                            borderRadius: "5px",
                            borderColor: "rgba(112, 112, 112, 0.3)",
                            padding: "1rem",
                            backgroundColor: "transparent",
                        }}
                        onChange={(e)=>handleCategoryChange(e)}
                        value={selectedCategory}
                        >
                        <option value="All">All Categories</option>
                        {eventUse?.categories?.map((category) => (
                            <option key={category.name} value={category.name}>
                            {category.name}
                            </option>
                        ))}
                        </select>
                    )}
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
                     title =="Active" &&  searchedEvent?.map(
                        (eve,index)=> {
                            return(
                                <div key={index+1}>
                                    <Card isPopular={true}
                                        event={eve}
                                        // isUpcominng={true}
                                    />
                                </div>
                            )
                        }
                    )
                }
                {
                     title =="Recent" &&  searchedEvent.map(
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
                {
                     title =="Upcoming" &&  searchedEvent.map(
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
                 {
                     title =="popular" &&  searchedEvent.map(
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
             
                
            </div>

        </div>
    )
}

export default ActiveMarket;