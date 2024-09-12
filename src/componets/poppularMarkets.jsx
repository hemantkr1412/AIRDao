import Card from "./card";
import ActiveMarket from "./markets/activemarkets";
import useEvent from "./useEvent";
const PopularMarkets = ({popularRef}) =>{
    const event = useEvent()

    console.log(event.popularEvent,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
    
    return(
        <div ref={popularRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            marginTop:"3rem",
            paddingTop:"3rem"
        }}>
           <ActiveMarket
            event={event.popularEvent}
            title={"Popular"}
            />

        </div>
    )
}

export default PopularMarkets;