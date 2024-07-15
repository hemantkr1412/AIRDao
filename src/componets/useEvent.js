import { useEffect, useState } from "react";

const useEvent = ()=>{
    const [activeEvent, setActiveEvent] = useState([]);
    const [recentEvent,setrecentEvent] = useState([]);
    const [popularEvent,setpopularEvent] = useState([]);
    const [upcomingEvent,setupcomingEvent] = useState([]);

       useEffect(() => {
         populateEvent();
       }, []);

       const populateEvent = async () => {
         await fetch("http://52.66.253.239/api/v1/event/")
           .then((response) => response.json())
           .then((data) => {
            const responseData = data.results;
             console.log(responseData);

            const activeEvent = responseData.filter((event) => {
              return event.market === "active";
            })
            setActiveEvent(activeEvent);

            const recentList = responseData.filter((event) => {
              return event.market === "recent";
            })

            console.log(recentEvent,"recnet")
            setrecentEvent(recentList);

            const popularEvent = responseData.filter((event) => {
                return event.market === "popular";
            })
            setpopularEvent(popularEvent);
            const upcomingEvent = responseData.filter((event) => {
                return event.market === "upcoming";
            })

            setupcomingEvent(upcomingEvent)
        }
        )
           .catch((error) => {
             console.error("Error:", error);
           });
       };

    return{
        activeEvent,
        recentEvent,
        popularEvent,
        upcomingEvent
    }
}

export default useEvent;