
import ActiveMarket from "../markets/activemarkets";
import SkeletonGrid from "../markets/CardSkeleton";
const UpcomingMarkets = ({upComingRef,upcomingEvent,isLoading}) =>{
    
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
                isLoading ={isLoading}
                
                />
            
           
    

        </div>
    )
}

export default UpcomingMarkets;