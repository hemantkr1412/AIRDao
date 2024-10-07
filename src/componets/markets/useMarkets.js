import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

const useMarket = () => {
    const { id, account } = useSelector(state => state.accountDetails);
    const reRender = useSelector((state) => state.reRender.reRender); 
    const categoriesList = useSelector((state) => state.categories.categoriesList);
    const [kpisData, setKpiData] = useState({
        total_volume_locked: 0,
        total_platform_fee: 0,
        total_burn_fee: 0
    });
    const [activeEvent, setActiveEvent] = useState([]);
    const [filteredEvent, setFilteredEvent] = useState([]);
    const [categoryName, setCategoryName] = useState("All");
    const [isLoading,setIsLoading] = useState(true)

    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;

    useEffect(() => {
        populateKPI();
        populateActiveEvent();
    }, [reRender]);

    const populateKPI = async () => {
        try {
            const response = await fetch(`${API_URL}/event/kpi`);
            const data = await response.json();

            if (data.error || Object.keys(data).length === 0) {
                console.log("No valid data found or error in response.");
                return;
            }

            console.log(data, "KPI data fetched");
            localStorage.setItem('feesData', JSON.stringify(data));
            setKpiData(data);

        } catch (error) {
            console.log("Error fetching KPI data:", error);
        }
    };

    const populateActiveEvent = async () => {
        try {
            const response = await fetch(`${API_URL}/event/markets/active/`);
            const data = await response.json();
            setActiveEvent(data);
            setFilteredEvent(data); 
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching event data:", error);
        }
    };


    const handleCategory = (category) => {
        setCategoryName(category);
        if (category === 'All') {
            setFilteredEvent(activeEvent);
        } else {
            const newFilteredEvent = activeEvent.filter((event) => event.category.name === category);
            setFilteredEvent(newFilteredEvent);
        }
    };


    const handleCommitToken = async (event_id, voteId, voteIndex, amount) => {
        console.log("Handle Commit");
        console.log(event_id, voteIndex, amount);
        console.error("ACCOUNT ID",id)

        if(id){
          const tx = await wallet.sendEthToContract(event_id, voteIndex, amount);
    
          console.log("TX>>>", tx);

          if (tx) {
              toast.success("Transaction Successful", {
                  autoClose: 5000,
                  theme: "colored"
              });
      
              const data = {
                  account: id,
                  possible_result: voteId,
                  token_staked: amount,
                  tx_hash: tx
              };
      
              const requestOptions = {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
              };
      
              await fetch(`${API_URL}/event/votes/create/`, requestOptions)
                  .then((response) => response.json())
                  .then((data) => {
                      console.log(data, "Token Save in DB");
      
                  })
                  .catch((error) => console.log(error));
          } else {
              toast.error("Something went wrong!");
          }
        }else{
          toast.error("Something went wrong! Please reconnect your wallet");
        }
        
        
    };

    return {
        kpisData,
        activeEvent,
        categoriesList,
        filteredEvent,
        categoryName,
        handleCategory,
        handleCommitToken,
        isLoading
    };
};

export default useMarket;
