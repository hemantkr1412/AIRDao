
import ActiveMarket from "../markets/activemarkets";
const UpcomingMarkets = ({upComingRef,upcomingEvent}) =>{
    return(
        <div ref={upComingRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            paddingTop:"3rem"
        }}>
            <ActiveMarket
            event={upcomingEvent}
            title={"Upcoming"}
            

            />
    

        </div>
    )
}

export default UpcomingMarkets;