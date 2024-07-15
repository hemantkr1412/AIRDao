// import Card from "./card";
import Card from "./markets/artiveCard";
import useEvent from "./useEvent";
const UpcomingMarkets = ({upComingRef}) =>{
    const event = useEvent()
    return(
        <div ref={upComingRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
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
                    }}>Upcoming Markets</p>
                </div>
                <div>
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
            <div style={{
                paddingLeft:"2%",
                paddingRight:"2%",
                paddingTop:"1rem",
                display:"flex",
                justifyContent:"space-between",
                flexWrap:"wrap",
                gap:"2rem",
            }}>
                {/* <Card isUpcominng={true}/>
                <Card isUpcominng={true}/>
                <Card isUpcominng={true}/> */}
                {
                    event.upcomingEvent.map(
                        (eventItem,index)=> {
                            return(
                                <div key={index+1}>
                                    <Card 
                                        eventItem={eventItem}
                                        isUpcominng={true}
                                        event={eventItem}
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

export default UpcomingMarkets;