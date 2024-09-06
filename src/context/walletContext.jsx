
import React, { useState, useEffect, useContext } from "react";
import useEvent from "../componets/useEvent";
import { ToastContainer, toast } from 'react-toastify';

import { ethers } from "ethers";
import { contractAddress,abi } from "../configs";


const WalletContext = React.createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider(props) {
  const [provider, setProvider] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  
  // const [contractAddress, setContractAddress] = useState(null);


  const event = useEvent();

  // useEffect(() => {
  //   try {
  //     let wallet = localStorage.getItem("wallet");
  //     let wallettype = localStorage.getItem("wallettype");
  //     console.log(wallet);
  //     if (wallet === "phantom") {
  //       if (wallettype === "browser") {
  //         connect();
  //       }
  //     }
  //     if (wallet === "solflare") {
  //       if (wallettype === "browser") {
  //         connectSolflare();
  //       }
  //     }
  //   } catch {}
  // }, []);

  useEffect(() => {
    try {
      const {ethereum} = window;
      ethereum.on("accountsChanged", accounts => {
        console.log("Account changed to:", accounts[0]);
        setPublicKey(accounts[0]);
      });
    } catch (error) {
      console.log(error);
    }
});



  const connectWallet = async () => {
   
    const { ethereum } = window;

  if (!ethereum) {
    console.log("MetaMask is not installed");
    return;
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // setSignerAddress(accounts[0]);
    console.log(accounts);
    setPublicKey(accounts[0]);
    localStorage.setItem("wallet", "metamask");
    localStorage.setItem("wallettype", "browser");
    setIsWalletConnected(true);
    // event.createAccount(resp.publicKey.toString());
    event.setWalletDetails(accounts[0]);

    const provider = new ethers.providers.Web3Provider(ethereum);
    //  setProvider(provider);
    console.log("Step 2")
    const signer = provider.getSigner();
    console.log("Connected with signer:", signer);
   

  } catch (error) {
    console.log(`Error occurred while connecting: ${error}`);
  }
  };

  // const connect = async () => {
  //   if ("phantom" in window) {
  //     try {
  //       console.log("trying to connect");
  //       let myprovider = window.phantom?.solana;
  //       const resp = await myprovider.connect();
  //       console.log("request processed...");
  //       setPublicKey(resp.publicKey.toString());
  //       localStorage.setItem("wallet", "phantom");
  //       localStorage.setItem("wallettype", "browser");
  //       setProvider(myprovider);
  //       setIsWalletConnected(true);
  //       // event.createAccount(resp.publicKey.toString());
  //       event.setWalletDetails(resp.publicKey.toString());
  //     } catch {
  //       setIsWalletConnected(false);
  //       alert("Wallet connection declined!");
  //     }
  //   } else {
  //     try {
  //       // mobile.connectWithMobileApp();
  //     } catch {
  //       window.open("https://phantom.app/", "_blank");
  //     }
  //   }
  // };

  const disconnect = async () => {
    try {
      provider.request({ method: "disconnect" });
    } catch {}
    setIsWalletConnected(false);
    setProvider(null);
    setPublicKey(null);
  };


  async function sendEthToContract(event_id,voteIndex, ethAmount) {
    toast.info("Please Wait ! Trying to Connect your wallet",{
      theme: "colored",
      })
    // Create a provider using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer (the user connected with MetaMask)
    const signer = provider.getSigner();
    // Create a contract instance connected to the signer
    const contract = new ethers.Contract(contractAddress, abi, signer);
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
        // toast.dismiss()
        // toast.success("Registeration Success")
        // toast.success(`${reg.hash.slice(0, 6)}....${reg.hash.slice(-4)}`)
        console.log("Registeration Success")
        console.log(tx.hash)
        // user.setIsRegChange((prev) => {
        //   return !prev
        // })
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
    provider,
    isWalletConnected,
    setIsWalletConnected,
    // connect,
    connectWallet,
    disconnect,
    contractAddress,
    sendEthToContract

  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}
