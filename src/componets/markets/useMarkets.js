// import { useEffect, useState } from "react";
// import { useWallet } from "../../context/walletContext";
// import { ToastContainer, toast } from 'react-toastify';

// const useMarkets = () =>{
//     const wallet = useWallet();
//     const [activeEvent, setActiveEvent] = useState([]);
//     const [filteredEvent,setFiltredEvent] = useState(event.activeEvent);
//     const [categoryName,setCategoryName] = useState("All");
//     const [isPopulate,setPopulate] = useState(false);
//     const [feesData,setFeesData] = useState({
//         total_volume_locked:0,
//         total_platform_fee:0,
//         total_burn_fee:0
//     });

//     useEffect(() => {
//         console.log("<<<<CALLING USE MARKET>>>>")
//         populateEvent();
//         const retrievedData = JSON.parse(localStorage.getItem('feesData'));
//         setFeesData(retrievedData);
//      }, [isPopulate]);


//      const API_URL = "http://127.0.0.1:8000/api/v1"



//     const populateEvent = async () => {
//         await fetch(`${API_URL}/event/`)
//           .then((response) => response.json())
//           .then((data) => {
//            const responseData = data.results;
//             console.log(responseData,"Populate Event form use Event");

//            const activeEvent = responseData.filter((event) => {
//              return event.market === "active";
//            })
//            setActiveEvent(activeEvent);
//            setFiltredEvent(activeEvent);

//        }
//        )
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//       };


//     const handleCategory = (category) => {
//         setCategoryName(category)
//         if(category === 'All'){
//             setFiltredEvent(event.activeEvent);
//         }else{
//             const newFilteredEvent = event.activeEvent.filter((event) => event.category.name === category);
//             setFiltredEvent(newFilteredEvent);
//         }

//     };

//     const handleCommitToken = async(event_id,voteId,voteIndex,ammount) =>{
//         console.log("Handle Commit");
//         console.log(event_id,voteIndex,ammount)
//         const tx= await wallet.sendEthToContract(event_id,voteIndex,ammount)
  
//         console.log("TX>>>",tx);
//         console.log(accountDetails);
//         const account = JSON.parse(localStorage.getItem("accountDetails"));
  
//         // console.log(account,"ACCCCC");
//         if(tx){
//           toast.success("Transaction Successful", {
//             autoClose: 5000,
//             theme: "colored"
//             });
  
//           const data = {
//             account:account.id,
//             possible_result:voteId,
//             token_staked:ammount,
//             tx_hash:tx
//           }
//           console.log(JSON.stringify(data));
//           const requestOptions= {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: data ? JSON.stringify(data) : null,
//           }
//           await fetch(`${API_URL}/event/votes/create/`,requestOptions)
//             .then((response) => response.json())
//             .then((data)=>{
//                 setPopulate(!isPopulate);
//                 console.log(data,"Token Save in DB")
//             })
//             .catch((error)=> console.log(error))
//         }else{
//           toast.error("Something went wrong !");
//         }
        
//       }


//     return{
//         handleCategory,
//         activeEvent,
//         filteredEvent,
//         setFiltredEvent,
//         categoryName,
//         setCategoryName,
//         feesData,
//         setFeesData,
//         handleCommitToken
//     }

// }

// export default useMarkets;