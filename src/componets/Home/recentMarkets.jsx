
import ActiveMarket from "../markets/activemarkets";
const RecentMarkets = ({recentRef,recentEvent,isLoading}) =>{
    return(
        <div ref={recentRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            paddingTop:"3rem"
            
        }}>
           
           <ActiveMarket
            event={recentEvent}
            title={"Recent"}
            isLoading={isLoading}
            />

        </div>
    )
}

export default RecentMarkets;