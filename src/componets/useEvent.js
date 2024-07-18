import { useEffect, useState } from "react";

const useEvent = ()=>{
    const [activeEvent, setActiveEvent] = useState([]);
    const [recentEvent,setrecentEvent] = useState([]);
    const [popularEvent,setpopularEvent] = useState([]);
    const [upcomingEvent,setupcomingEvent] = useState([]);
    const [categories,setcategories] = useState([]);
    const [sortBylist,setSortBylist] = useState([]);

       useEffect(() => {
         populateEvent();
         populatecategories();
         populateSortList();
       }, []);


       const populateSortList = async () =>{
        await fetch("https://xenplay.xyz/api/v1/event/sorted-event")
        .then((response) => response.json())
        .then((data)=>console.log(data,"use Event ################"))
        .catch((error)=> console.log(error))
      }

      const populatecategories = async () =>{
        await fetch("https://xenplay.xyz/api/v1/event/categories/")
        .then((response) => response.json())
        .then((data)=>setcategories(data.results))
        .catch((error)=> console.log(error))
      }

       const populateEvent = async () => {
         await fetch("https://xenplay.xyz/api/v1/event/")
           .then((response) => response.json())
           .then((data) => {
            const responseData = data.results;
            //  console.log(responseData);

            const activeEvent = responseData.filter((event) => {
              return event.market === "active";
            })
            setActiveEvent(activeEvent);

            const recentList = responseData.filter((event) => {
              return event.market === "recent";
            })

            // console.log(recentEvent,"recnet")
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
        upcomingEvent,
        categories,
    }
}

export default useEvent;