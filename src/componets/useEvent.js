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
    const [isOpeningWallet,setOpeningWallet] = useState(false)


    
    const wallet = useWallet();

       useEffect(() => {
         populateEvent();
         populatecategories();
         populateSortList();
         populateMyPridiction();
        populateAccountData();
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
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/account/`, requestOptions);
        
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




       const populateSortList = async () =>{
        await fetch("http://127.0.0.1:8000/api/v1/event/sorted-event")
        .then((response) => response.json())
        .then((data)=>console.log(data,"use Event ################"))
        .catch((error)=> console.log(error))
      }

      const populatecategories = async () =>{
        await fetch("http://127.0.0.1:8000/api/v1/event/categories/")
        .then((response) => response.json())
        .then((data)=>setcategories(data.results))
        .catch((error)=> console.log(error))
      }

       const populateEvent = async () => {
         await fetch("http://127.0.0.1:8000/api/v1/event/")
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

    
    const handleCommitToken = async(event_id,voteId,voteIndex,ammount) =>{
      console.log(event_id,voteId,ammount)
      const tx= await wallet.sendEthToContract(event_id,voteIndex,ammount)

      console.log("TX>>>",tx)
      // console.log(accountDetails);
      const account = JSON.parse(localStorage.getItem("accountDetails"));

      // console.log(account,"ACCCCC");
      if(tx){
        toast.success("Transaction Successful");
        const data = {
          account:account.id,
          possible_result:voteId,
          token_staked:ammount,
          tx_hash:tx
        }
        console.log(JSON.stringify(data));
        const requestOptions= {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data ? JSON.stringify(data) : null,
        }
        await fetch(`http://127.0.0.1:8000/api/v1/event/votes/create/`,requestOptions)
          .then((response) => response.json())
          .then((data)=>console.log(data,"use Event ################"))
          .catch((error)=> console.log(error))
      }else{
        toast.error("Something went wrong !");
      }
      
    }


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
        const response = await fetch(`http://127.0.0.1:8000/api/v1/user/account/`, requestOptions);
    
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
        const url = new URL(`http://127.0.0.1:8000/api/v1/event/my-predictions/`);

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
    }
}

export default useEvent;