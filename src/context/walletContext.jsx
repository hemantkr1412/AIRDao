
import React, { useState, useEffect, useContext } from "react";
import useEvent from "../componets/useEvent";
import { ToastContainer, toast } from 'react-toastify';

import { ethers } from "ethers";
import { contractAddress,abi } from "../configs";
import {useSDK} from "@metamask/sdk-react";



const WalletContext = React.createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider(props) {
  // const [provider, setProvider] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const {sdk, connected, connecting, provider, chainId} = useSDK();
  const targetChainId = "0x5618";
  
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
    
    const {ethereum} = window;
    // const wallet = localStorage.getItem('wallet');
    // console.log(wallet)    
    // if(wallet ==="metamask"){
    //   connectWallet()
    // }

    if (connected && chainId !== targetChainId) {
      switchNetwork(ethereum);
    }
  }, [chainId, connected]);

   // Track account changes in MetaMask
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


  const switchNetwork = async ethereum => {
    try {
      const currentChainId = await ethereum.request({method: "eth_chainId"});
      if (currentChainId !== targetChainId) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{chainId: targetChainId}]
        });
        console.log(`Switched to chain ${targetChainId}`);
      }
    } catch (error) {
      handleSwitchError(error, ethereum);
    }
  };


  const handleSwitchError = async (error, ethereum) => {
    if (error.code === 4902) {
      // Chain not found, add and switch
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: targetChainId,
              chainName: "Airdao Testnet",
              nativeCurrency: {
                name: "AMB",
                symbol: "AMB",
                decimals: 18
              },
              rpcUrls: ["https://network.ambrosus-test.io/"],
              blockExplorerUrls: ["https://testnet.airdao.io/explorer/"]
            }
          ]
        });
        console.log("Network added and switched");
      } catch (addError) {
        console.error("Error adding the chain:", addError);
      }
    } else {
      console.error("Error switching chain:", error);
    }
  };



  const connectWallet = async () => {
   
    const { ethereum } = window;

  if (!ethereum) {
    console.log("MetaMask is not installed");
    return;
  }

  try {
    // const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // // setSignerAddress(accounts[0]);
    // console.log(accounts);
    // setPublicKey(accounts[0]);
    // localStorage.setItem("wallet", "metamask");
    // localStorage.setItem("wallettype", "browser");
    // setIsWalletConnected(true);
    // // event.createAccount(resp.publicKey.toString());
    // event.setWalletDetails(accounts[0]);

    // const provider = new ethers.providers.Web3Provider(ethereum);
    // //  setProvider(provider);
    // console.log("Step 2")
    // const signer = provider.getSigner();
    // console.log("Connected with signer:", signer);



    try {
      const accounts = await sdk?.connect();
      console.log(accounts?.[0],"AAAAAAAAAAAAAAAAAAAAAA<<<<<<>>>>>>>>>>>>>>>>>>>>AAAAAAAAAAAAAAAAAAAAAAAAAAA")
      setPublicKey(accounts?.[0]);
      localStorage.setItem("wallet", "metamask");
      localStorage.setItem("wallettype", "browser");
      setIsWalletConnected(true);
      event.setWalletDetails(accounts[0]);
      console.log(chainId);
      console.log(provider);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
   

  } catch (error) {
    console.log(`Error occurred while connecting: ${error}`);
  }
  };


  





  const disconnect = async () => {
    try {
      provider.request({ method: "disconnect" });
    } catch {}
    setIsWalletConnected(false);
    // setProvider(null);
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
