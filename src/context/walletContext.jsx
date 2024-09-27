
import React, { useState, useEffect, useContext } from "react";
import { toast } from 'react-toastify';
import { ethers } from "ethers";
import { contractAddress,abi } from "../configs";




const WalletContext = React.createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider(props) {
  const [publicKey, setPublicKey] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [accountDetails,setAccountDetails] = useState(null);

   useEffect(() => {
   
   

    const {ethereum} = window;
    if (ethereum && ethereum.isMetaMask) {
      const handleAccountsChanged = accounts => {
        setPublicKey(accounts.length > 0 ? accounts[0] : null);
      };

      ethereum
        .request({method: "eth_accounts"})
        .then(handleAccountsChanged)
        .catch(console.error);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => ethereum.removeListener("accountsChanged", handleAccountsChanged);
    } else {
      console.log("MetaMask is not installed.");
    }
  }, []);


  

  async function sendEthToContract(event_id,voteIndex, ethAmount) {
    toast.info("Please Wait ! Trying to Connect your wallet",{
      theme: "colored",
      })
    // Create a provider using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer (the user connected with MetaMask)
    const signer = provider.getSigner();
    // Create a contract instance connected to the signer
    const contract = new ethers.Contract("0xA122b7FCA96a661c3a690A43C4e606a7E5D0EF78", abi, signer);
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
        toast.error("Try Again")
        toast.dismiss()
        console.log(`Error occured:${error}`)
      }
    } catch (error) {
        console.error("Error sending ETH to contract:", error);
    }
}






  const value = {
    publicKey,
    setPublicKey,
    isWalletConnected,
    setIsWalletConnected,
    contractAddress,
    sendEthToContract,
    accountDetails,
    setAccountDetails,

  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}
