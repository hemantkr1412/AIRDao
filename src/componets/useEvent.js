import { useEffect, useState } from "react";
import { useWallet } from "../context/walletContext";
import { ToastContainer, toast } from 'react-toastify';


const useEvent = ()=>{
    const [activeEvent, setActiveEvent] = useState([]);
    const [recentEvent,setrecentEvent] = useState([]);
    const [popularEvent,setpopularEvent] = useState([]);
    const [upcomingEvent,setupcomingEvent] = useState([]);
    const [categories,setcategories] = useState([]);
    const [sortBylist,setSortBylist] = useState([]);
    const [myPrediction,setMyprediction] = useState([]);
    const [walletDetails,setWalletDetails] = useState(null);
    const [isOpeningWallet,setOpeningWallet] = useState(false);
    const [isPopulate,setPopulate] = useState(false);
    const [leaderBoard,setLeaderboard ]= useState([]);

    // const API_URL = "http://127.0.0.1:8000/api/v1"
     const API_URL = "https://airdaomarkets.xyz/api/v1"
    
    const wallet = useWallet();

       useEffect(() => {
          console.log("Calling Use Effect")
         populateEvent();
         populatecategories();
         populateSortList();
         populateMyPridiction();
         populateAccountData();
         populateKPI();
         populatePopularMarrket();
       }, [walletDetails]);


       const populateAccountData = async () =>{
        if(walletDetails){
          const data = {
            account: walletDetails,
          };
        
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
        
          try {
            const response = await fetch(`${API_URL}/user/account/`, requestOptions);
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
            }
        
            const result = await response.json();
            console.log(result, ">>>>>>>>> Account Details >>>>>>>>>");
            localStorage.setItem('accountDetails', JSON.stringify(result));
            // populateMyPridiction(walletDetails);
          } catch (error) {
            console.error("Error:", error);
          }
        }
       }


       const populateKPI = async () =>{
        await fetch(`${API_URL}/event/kpi`)
        .then((response) => response.json())
        .then((data)=>{
          if(!data.error){
            localStorage.setItem('feesData', JSON.stringify(data));
          }
          console.log(data,"!!!!!!!!!!!!!!!KPI!!!!!!!!!!!!!!")
        })
        .catch((error)=> console.log(error))
       }

       const populateLeaderBoard = async () =>{
        await fetch(`${API_URL}/event/top-votes`)
        .then((response) => response.json())
        .then((data)=>{
          setLeaderboard(data)
          console.log(data,"??????????????TOP RANK?????????????")
        })
        .catch((error)=> console.log(error))
       }
       



       const populateSortList = async () =>{
        await fetch(`${API_URL}/event/sorted-event`)
        .then((response) => response.json())
        .then((data)=>console.log(data,"Populate Event ################"))
        .catch((error)=> console.log(error))
      }

      const populatecategories = async () =>{
        await fetch(`${API_URL}/event/categories/`)
        .then((response) => response.json())
        .then((data)=>setcategories(data))
        .catch((error)=> console.log(error))
      }

       const populateEvent = async () => {
         await fetch(`${API_URL}/event/`)
           .then((response) => response.json())
           .then((data) => {
            const responseData = data;
             console.log(responseData,"Populate Event form use Event");

            const activeEvent = responseData.filter((event) => {
              return event.market === "active";
            })

            setActiveEvent(activeEvent);

            const recentList = responseData.filter((event) => {
              return event.market === "recent";
            })

            const sortedRecentList = recentList.sort((a, b) => {
              const dateA = new Date(a.resolution_date);
              const dateB = new Date(b.resolution_date);
              return dateB - dateA; 
            });
            
            let latestSixItems = sortedRecentList.slice(0, 6);
            console.error(latestSixItems)


            // console.log(recentEvent,"recnet")
            setrecentEvent(latestSixItems);

            

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

    
       const handleCommitToken = async (event_id, voteId, voteIndex, amount) => {
        console.log("Handle Commit");
        console.log(event_id, voteIndex, amount);
        
        const tx = await wallet.sendEthToContract(event_id, voteIndex, amount);
    
        console.log("TX>>>", tx);
        const account = JSON.parse(localStorage.getItem("accountDetails"));
    
        if (tx) {
            toast.success("Transaction Successful", {
                autoClose: 5000,
                theme: "colored"
            });
    
            const data = {
                account: account.id,
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
                    // setPopulate(!isPopulate);
                    console.log(data, "Token Save in DB");
    
                    // Call to refresh the events and leaderboard after success
                    populateEvent();  
                    populatePopularMarrket();     // Refresh event data
                    populateLeaderBoard();  // Refresh leaderboard data
                    populateKPI();          // Refresh KPI data
                })
                .catch((error) => console.log(error));
        } else {
            toast.error("Something went wrong!");
        }
    };

    const createAccount = async (wallet) => {
      const data = {
        account: wallet,
      };
    
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    
      try {
        const response = await fetch(`${API_URL}/user/account/`, requestOptions);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
        }
    
        const result = await response.json();
        console.log(result, ">>>>>>>>> Account Details >>>>>>>>>");
        localStorage.setItem('accountDetails', JSON.stringify(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };


    const populateMyPridiction = async () => {
      if(walletDetails){
        const url = new URL(`${API_URL}/event/my-predictions/`);

      // console.log(wallet.publicKey);
      

      url.searchParams.append("wallet_address",walletDetails);
    
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
        // console.log(result, ">>>>>>>>> MY Pridiction >>>>>>>>>");
        setMyprediction(result.results);
      } catch (error) {
        console.error("Error:", error);
      }
      }
    };



    const claimReward = async(voteId,walletAdress,populateAgain,setPopilateAgain) =>{
      console.log(voteId);
      const data = {
        vote_id:voteId,
        account: walletAdress.toLowerCase(),
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
        console.error("Error:", error);
      }
    }



    const populatePopularMarrket = async () =>{
      await fetch(`${API_URL}/event/popular-markets`)
      .then((response) => response.json())
      .then((data)=>{
        
        console.log(data,"!!!!!!!!!!!!!!!POPILAR MARKET!!!!!!!!!!!!!!")
        if(data){
           localStorage.setItem('popularMarket', JSON.stringify(data));
        }
        setpopularEvent(data);

       
      })
      .catch((error)=> console.log(error))
     }



    








    
    // console.log(activeEvent,"<<---From use Event Active --->>")



    return{
        activeEvent,
        recentEvent,
        popularEvent,
        upcomingEvent,
        categories,
        handleCommitToken,
        createAccount,
        myPrediction,
        setMyprediction,
        walletDetails,
        setWalletDetails,
        isOpeningWallet,
        setOpeningWallet,
        claimReward,
        setLeaderboard,
        leaderBoard
    }
}

export default useEvent;