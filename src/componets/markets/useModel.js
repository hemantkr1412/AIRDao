import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ethers } from "ethers";
import { abi } from '../../configs';
import { reRenderSliceActions } from '../store/slice/rerenderSlice';


const useModel = () =>{
    const { id, account } = useSelector(state => state.accountDetails);
    const dispatch = useDispatch();

    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;

    // console.log(id);






    async function sendEthToContract(event_id,voteIndex, ethAmount) {
        toast.info("Please Wait ! Trying to Open your wallet",{
          theme: "colored",
          })
        // Create a provider using MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // Get the signer (the user connected with MetaMask)
        const signer = provider.getSigner();
        // Create a contract instance connected to the signer
        const contract = new ethers.Contract("0xDA1b75390b9F29F88F839CA94eA9Ce73367c72a0", abi, signer);
        // Convert the ETH amount to Wei
        console.log(ethAmount);
        // const amountInWei = ethers.utils.parseEther(ethAmount);
        const amountInWei = ethers.utils.parseUnits(ethAmount, "ether");
        console.log(amountInWei);
        try {
          try {
    
            const tx = await contract.submitPrediction(event_id, voteIndex, {value: amountInWei});
            toast.info("Please Wait ! Tx is processing...",{
              autoClose: 25000,
              theme: "colored",
              })
            await tx.wait()
            console.log("Registeration Success");
            console.log(tx.hash)
     
            return tx.hash
          } catch (error) {
            // toast.error("Try Again")
            // toast.dismiss()
            console.log(`${error}`)
            const errorString = typeof error === 'object' ? JSON.stringify(error) : error;

                // Check for the specific sentence in the error string
                if (errorString.includes("user rejected transaction")) {
                    console.log("The transaction was rejected by the user.");
                    return "rejected"
                } else {
                    console.log("No transaction rejection detected.");
                }
          }
        } catch (error) {
            console.error("Error sending ETH to contract:", error);
        }
    }
    





    // const handleCommitToken = async (event_id, voteId, voteIndex, amount) => {
    //     console.log("Handle Commit");
    //     console.log(event_id, voteIndex, amount);
    //     // console.error("ACCOUNT ID",id)

    //     if(id){
    //       const tx = await sendEthToContract(event_id, voteIndex, amount);
    
    //       console.log("TX>>>", tx);


    //       if(tx=="rejected"){
    //         toast.error("The transaction was rejected by the user.");
    //       }else if (tx) {
    //           toast.success("Transaction Successful", {
    //               autoClose: 5000,
    //               theme: "colored"
    //           });
      
    //           const data = {
    //               account: id,
    //               possible_result: voteId,
    //               token_staked: amount,
    //               tx_hash: tx
    //           };
      
    //           const requestOptions = {
    //               method: "POST",
    //               headers: {
    //                   "Content-Type": "application/json",
    //               },
    //               body: JSON.stringify(data),
    //           };
      
    //           await fetch(`${API_URL}/event/votes/create/`, requestOptions)
    //               .then((response) => response.json())
    //               .then((data) => {
    //                   console.log(data, "Token Save in DB");
    //                   dispatch(reRenderSliceActions.toggleReRender());
    //               })
    //               .catch((error) => console.log(error));
    //       } else {
    //           toast.error("Something went wrong!");
    //       }
    //     }
    //     else{
    //       toast.error("Something went wrong! Please reconnect your wallet");
    //     }
        
        
    // };


    const preventRefresh = (e) => {
      e.preventDefault();
      e.returnValue = ''; // This is required for Chrome and Firefox
    };
  



    const handleCommitToken = async (event_id, voteId, voteIndex, amount) => {
      console.log("Handle Commit");
      console.log(event_id, voteIndex, amount);
  
      // Add the event listener to warn user when they try to refresh/close
      window.addEventListener("beforeunload", preventRefresh);
  
      try {
        if (id) {
          const tx = await sendEthToContract(event_id, voteIndex, amount);
          console.log("TX>>>", tx);
  
          if (tx === "rejected") {
            toast.error("The transaction was rejected by the user.");
          } else if (tx) {
            toast.success("Transaction Successful", {
              autoClose: 5000,
              theme: "colored",
            });
  
            const data = {
              account: id,
              possible_result: voteId,
              token_staked: amount,
              tx_hash: tx,
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
                dispatch(reRenderSliceActions.toggleReRender());
              })
              .catch((error) => console.log(error));
          } else {
            toast.error("Something went wrong!");
          }
        } else {
          toast.error("Something went wrong! Please reconnect your wallet");
        }
      } finally {
        // Remove the event listener after the function completes
        window.removeEventListener("beforeunload", preventRefresh);
      }
    };



    return{
        handleCommitToken
    }
}


export default useModel;