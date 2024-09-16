import { useEffect, useState } from "react";
import Card from "./card";
import ActiveMarket from "./markets/activemarkets";
import useEvent from "./useEvent";
const PopularMarkets = ({popularRef}) =>{
    const event = useEvent();
    const [popularEventList,setPopularEventList] = useState([])

    useEffect(() =>{
       const data=  JSON.parse(localStorage.getItem('popularMarket'));
       if(data){
        setPopularEventList(data)
       }

    },[])

    

    // console.error(event.popularEvent,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
    
    return(
        <div ref={popularRef} style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            marginTop:"3rem",
            paddingTop:"3rem"
        }}>
           <ActiveMarket
            event={popularEventList}
            title={"Popular"}
            />

        </div>
    )
}

export default PopularMarkets;