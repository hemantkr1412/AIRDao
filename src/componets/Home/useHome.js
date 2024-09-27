import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useHome = () => {
  const [recentEvent, setrecentEvent] = useState([]);
  const [popularEvent, setpopularEvent] = useState([]);
  const [upcomingEvent, setupcomingEvent] = useState([]);
  const reRender = useSelector((state) => state.reRender.reRender); 

  const API_URL = import.meta.env.VITE_APP_BACKEND_URL;

  useEffect(() => {
    populateUpcomingEvent();
    populatePopularMarrket();
    populateRecentEvent();
  }, [reRender]);

  const populateUpcomingEvent = async () => {
    await fetch(`${API_URL}/event/markets/upcoming/`)
      .then((response) => response.json())
      .then((data) => {
        // const responseData = data;
        // const recentList = responseData.filter((event) => {
        //   return event.market === "recent";
        // });

        // const sortedRecentList = recentList.sort((a, b) => {
        //   const dateA = new Date(a.resolution_date);
        //   const dateB = new Date(b.resolution_date);
        //   return dateB - dateA;
        // });

        // let latestSixItems = sortedRecentList.slice(0, 6);
        // setrecentEvent(latestSixItems);

        // const popularEvent = responseData.filter((event) => {
        //   return event.market === "popular";
        // });
        // setpopularEvent(popularEvent);

        // const upcomingEvent = responseData.filter((event) => {
        //   return event.market === "upcoming";
        // });
        // console.log(data)
        setupcomingEvent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const populateRecentEvent = async () => {
    await fetch(`${API_URL}/event/recent-event/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setrecentEvent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };





const populatePopularMarrket = async () => {
    try {
      const response = await fetch(`${API_URL}/event/popular-markets/`);
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        console.error("Failed to fetch popular markets:", response.statusText);
        return;
      }
  
      const data = await response.json();
  
      // console.log(data, "Fetched data");
  
      // Check if data is empty
      if (data.length === 0) {
        console.log("No data found, not updating state");
        return;
      }
  
      // Update the state if data is valid
      setpopularEvent(data);
      // console.log("Updated popularEvent:", data);
  
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("Error while fetching popular markets:", error);
    }
  };


  




  return {
    upcomingEvent,
    popularEvent,
    recentEvent,
  };
};

export default useHome;
