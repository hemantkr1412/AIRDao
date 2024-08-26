
import SolflareWallet from "@solflare-wallet/sdk";
import React, { useState, useEffect, useContext } from "react";
import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
// import { Buffer } from 'buffer';
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
  const [solbalance, setSolBalance] = useState(0);
  const [bhoomibalance, setBhoomibalance] = useState(0);
  const [supplydata, setSupplyData] = useState(null);
  // const [contractAddress, setContractAddress] = useState(null);


  const event = useEvent();

  let connection = new web3.Connection("https://solana-devnet.g.alchemy.com/v2/egGF-dWcAHcKoH2gQgOnMa2XbtHJfQkD");

  useEffect(() => {
    try {
      let wallet = localStorage.getItem("wallet");
      let wallettype = localStorage.getItem("wallettype");
      console.log(wallet);
      if (wallet === "phantom") {
        if (wallettype === "browser") {
          connect();
        }
      }
      if (wallet === "solflare") {
        if (wallettype === "browser") {
          connectSolflare();
        }
      }
    } catch {}
  }, []);

  const connectWallet = async () => {
   
    const { ethereum } = window;

  if (!ethereum) {
    console.log("MetaMask is not installed");
    return;
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // setSignerAddress(accounts[0]);
    console.log(accounts[0]);

    const provider = new ethers.providers.Web3Provider(ethereum);
    console.log("Step 2")
    const signer = provider.getSigner();
    console.log("Connected with signer:", signer);
  } catch (error) {
    console.log(`Error occurred while connecting: ${error}`);
  }
  };

  const connect = async () => {
    if ("phantom" in window) {
      try {
        console.log("trying to connect");
        let myprovider = window.phantom?.solana;
        const resp = await myprovider.connect();
        console.log("request processed...");
        setPublicKey(resp.publicKey.toString());
        localStorage.setItem("wallet", "phantom");
        localStorage.setItem("wallettype", "browser");
        setProvider(myprovider);
        setIsWalletConnected(true);
        // event.createAccount(resp.publicKey.toString());
        event.setWalletDetails(resp.publicKey.toString());
      } catch {
        setIsWalletConnected(false);
        alert("Wallet connection declined!");
      }
    } else {
      try {
        // mobile.connectWithMobileApp();
      } catch {
        window.open("https://phantom.app/", "_blank");
      }
    }
  };

  const disconnect = async () => {
    try {
      provider.request({ method: "disconnect" });
    } catch {}
    setIsWalletConnected(false);
    setProvider(null);
    setPublicKey(null);
    setSolBalance(0);
  };


  async function sendEthToContract(functionName, ethAmount) {
    // Create a provider using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer (the user connected with MetaMask)
    const signer = provider.getSigner();
    // Create a contract instance connected to the signer
    const contract = new ethers.Contract(contractAddress, abi, signer);
    // Convert the ETH amount to Wei
    const amountInWei = ethers.utils.parseEther(ethAmount);
    try {
        // Send a transaction to the contract's payable function
        const tx = await contract[functionName]({
            value: amountInWei
        });
        // Wait for the transaction to be mined
        const receipt = await tx.wait();
        console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
    } catch (error) {
        console.error("Error sending ETH to contract:", error);
    }
}






  const value = {
    publicKey,
    provider,
    isWalletConnected,
    setIsWalletConnected,
    solbalance,
    connect,
    connectWallet,
    bhoomibalance,
    supplydata,
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
