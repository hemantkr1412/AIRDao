// import Card from "./card";
import Card from "./markets/artiveCard";
import useEvent from "./useEvent";
import ActiveMarket from "./markets/activemarkets";
const UpcomingMarkets = ({upComingRef}) =>{
    const event = useEvent()
    return(
        <div ref={upComingRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            paddingTop:"3rem"
        }}>
            <ActiveMarket
            event={event.upcomingEvent}
            title={"Upcoming"}
            />
    

        </div>
    )
}

export default UpcomingMarkets;