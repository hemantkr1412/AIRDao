import Card from "./card";
import ActiveMarket from "./markets/activemarkets";
import useEvent from "./useEvent";
const RecentMarkets = ({recentRef}) =>{
    const event = useEvent();
    console.log(event.recentEvent,"Recent Market");
    return(
        <div ref={recentRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            paddingTop:"3rem"
            
        }}>
           
           <ActiveMarket
            event={event.recentEvent}
            title={"Recent"}
            />

        </div>
    )
}

export default RecentMarkets;