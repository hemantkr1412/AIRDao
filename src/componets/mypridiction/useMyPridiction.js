import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
const useMyPrediction = ()=>{
    const { id, account } = useSelector(state => state.accountDetails);

    const [myPrediction,setMyprediction] = useState([]);
    const [winningEvents,setWinningEvent] = useState([]);
    const [losingEvents,setLosingEvent]=useState([]);
    const [selectedOption, setSelectedOption] = useState('last10');
    const [populateAgain,setPopilateAgain] = useState(false);
    const [isLoading,setIsloading] = useState(true);



    useEffect(()=>{
        if(account){
            console.log("My Prediction Effect if");
            populateMyPridiction();
            populateWinnigPridiction();
            populateLosingPridiction();
        }
    },[account,populateAgain])


    // const API_URL = "http://127.0.0.1:8000/api/v1"
    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;
     

      // Handle the change in the select dropdown
    const handleChange = (event) => {
          setSelectedOption(event.target.value);
      };
  
    const walletInLowerCase = account?.toLowerCase();


    const populateMyPridiction = async () => {
        console.log("Enter in my prediction")
          const url = new URL(`${API_URL}/event/my-predictions/`);
          url.searchParams.append("wallet_address",walletInLowerCase);
      
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      
        try {
          const response = await fetch(url, requestOptions);
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
          }
      
          const result = await response.json();
          console.error(result, ">>>>>>>>> MY Pridiction >>>>>>>>>");
          setMyprediction(result);
          setIsloading(false);
        } catch (error) {
          console.error("Error:", error);
        }
        
    };

      const populateWinnigPridiction = async () => {
        console.log("Enter in my prediction")
          const url = new URL(`${API_URL}/event/winning-votes/`);
        url.searchParams.append("wallet_address",walletInLowerCase);
      
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      
        try {
          const response = await fetch(url, requestOptions);
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
          }
      
          const result = await response.json();
          console.log(result, ">>>>>>>>> Winnig Pridiction >>>>>>>>>");
          setWinningEvent(result);
          setIsloading(false);
          // setMyprediction(result.results);
        } catch (error) {
          console.error("Error:", error);
        }
        
      };

      const populateLosingPridiction = async () => {
        console.log("Enter in my prediction")
          const url = new URL(`${API_URL}/event/losing-votes/`);
        url.searchParams.append("wallet_address",walletInLowerCase);
      
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      
        try {
          const response = await fetch(url, requestOptions);
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
          }
      
          const result = await response.json();
          console.error(result, ">>>>>>>>> Losing Pridiction >>>>>>>>>");
          setLosingEvent(result);
          setIsloading(false);
          // setMyprediction(result.results);
        } catch (error) {
          console.error("Error:", error);
        }
        
      };
      

      
    const claimReward = async(voteId) =>{
      console.log(voteId);
      const data = {
        vote_id:voteId,
        account: account.toLowerCase(),
      };
    
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    
      try {
        toast.info("Please Wait ! Tx is processing...",{
          autoClose: 10000,
          theme: "colored",
        })

        const response = await fetch(`${API_URL}/event/claim-reward/`, requestOptions);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
        }
        toast.success("Amount Claimed", {
          autoClose: 5000,
          theme: "colored"
        });

        const result = await response.json();
        

        console.log(result, ">>>>>>>>> Claimed >>>>>>>>>");
        setPopilateAgain(!populateAgain)
      } catch (error) {
        toast.error("Something went wrong!")
        console.error("Error:", error);
      }
    }



    return{
        handleChange,
        selectedOption,
        winningEvents,
        losingEvents,
        myPrediction,
        claimReward,
        isLoading
    }
    



};


export default useMyPrediction;