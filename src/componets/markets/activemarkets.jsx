import { useEffect, useState } from "react";
import Card from "./artiveCard";
import { useSelector } from "react-redux";
import useMarket from "./useMarkets";
import SkeletonGrid from "./CardSkeleton";




const ActiveMarket = ({popularRef,event,title,marketCategory,isLoading}) =>{
    const categoriesList = useSelector((state) => state.categories.categoriesList);

    // const {
    //     handleCommitToken
    // } = useMarket();



    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;
    

    const [searchedEvent,setSearchedEvent] = useState(event);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [filtredEvent,setFilterEvent] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        setFilterEvent(event);
        setSearchedEvent(event);
        
        if (title === "Active") {
            setSelectedCategory('');
        }

        const handleResize = () => {
            if (window.innerWidth <= 750) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };
    
        window.addEventListener('resize', handleResize);

        handleResize();
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [event, title])


    const handleCategoryChange = async(e,callBy) => {
        if(callBy =="category"){
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
        }else{
            setSelectedCategory(e.target.value);
            const API_URI = `${API_URL}/event/sorted-event?sort_by=${e.target.value}`
            const requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
            };
            try {
                const response = await fetch(API_URI, requestOptions);
            
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
                }
            
                const result = await response.json();
                // console.log(result, ">>>>>>>>> NEW >>>>>>>>>");
                
                if(marketCategory === 'All'){
                    setSearchedEvent(result);
                    setFilterEvent(result);
                }else{
                    const newFilteredEvent = result.filter((event) => event.category.name === marketCategory);
                    setSearchedEvent(newFilteredEvent);
                    setFilterEvent(newFilteredEvent);
                }
              } catch (error) {
                console.error("Error:", error);
              }
            

        }
       
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
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
            <div className="marktesTab" style={{
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
                <div style={{
                    display:"flex",
                    flexDirection:isSmallScreen?"column":"row",
                    marginTop: isSmallScreen ? "20px":""
                }}>
                    <input type="text" placeholder="Search" 
                    value={searchTerm}
                    onChange={(e)=>handleSearchChange(e)}
                    style={{
                    width:isSmallScreen ? "90%" : "200px",
                    height:"15px",
                    borderRadius:"5px",
                    border:"1px solid grey",
                    padding:"1rem",
                    // backgroundColor:"white",
                    marginRight:"1rem",
                    display: title === "Active" ? "inline" : (isSmallScreen ? "none" : "inline")
                    }} />


                    <div style={{
                        display:"flex",
                        marginTop: title === "Active" ? (isSmallScreen ? "20px":""):"",
                        marginBottom:"10px",
                        gap:"2px"
                    }}>
                    {title === "Active" && <select 
                    onChange={(e)=>handleCategoryChange(e,"sortBy")}
                    value={selectedCategory}
                    style={{
                        width:"200px",
                        height:"50px",
                        borderRadius:"5px",
                        borderColor:"rgba(112, 112, 112,0.3)",
                        padding:"1rem",
                        backgroundColor:"transparent",
                        
                    }}>
                              <option value="" hidden disabled selected>Sort By</option>
                              <option value="new">New</option>
                              <option value="ending_soon">Ending soon</option>
                              <option value="volume">Volume</option>
                             
                    </select>}
                    {/* {title !== "Active" && ( */}
                        <select
                        style={{
                            width: "200px",
                            height: "50px",
                            borderRadius: "5px",
                            borderColor: "rgba(112, 112, 112, 0.3)",
                            padding: "1rem",
                            backgroundColor: "transparent",
                            display: title === "Active" ? (isSmallScreen ? "inline" : "none") : "inline"
                        }}
                        onChange={(e)=>handleCategoryChange(e,"category")}
                        value={selectedCategory}
                        >
                        <option value="All">All Categories</option>
                        {categoriesList?.map((category) => (
                            <option key={category.name} value={category.name}>
                            {category.name}
                            </option>
                        ))}
                        </select>
                        </div>
                    {/* )} */}
                </div>
               
            </div> 
            {
                isLoading ? <SkeletonGrid /> :
                
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
                                        isRecent={false}
                                        // handleCommitToken={handleCommitToken}
                                        // isUpcominng={false}
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
                                    <Card 
                                        isPopular={false}
                                        event={event}
                                        isRecent={true}
                                        // isPopular={false}
                                        // handleCommitToken={handleCommitToken}
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
                                    <Card 
                                        isPopular={false}
                                        event={event}
                                        isUpcominng={true}
                                        isRecent={false}
                                        // handleCommitToken={handleCommitToken}
                                    />
                                </div>
                            )
                        }
                    )
                }
                 {
                     title =="Popular" &&  searchedEvent.map(
                        (event,index)=> {
                            return(
                                <div key={index+1}>
                                    <Card isPopular={true}
                                        event={event}
                                        // handleCommitToken={handleCommitToken}
                                        // isUpcominng={true}
                                    />
                                </div>
                            )
                        }
                    )
                }
             
                
            </div>
           }

        </div>
    )
}

export default ActiveMarket;