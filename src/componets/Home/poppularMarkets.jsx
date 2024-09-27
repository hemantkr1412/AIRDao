import ActiveMarket from "../markets/activemarkets";
const PopularMarkets = ({popularRef,popularEvent}) =>{
    // console.log(popularEvent);
    return(
        <div ref={popularRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            marginTop:"3rem",
            paddingTop:"3rem"
        }}>
           <ActiveMarket
            event={popularEvent}
            title={"Popular"}
            />

        </div>
    )
}

export default PopularMarkets;