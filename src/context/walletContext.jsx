
import SolflareWallet from "@solflare-wallet/sdk";
import React, { useState, useEffect, useContext } from "react";
import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
// import { Buffer } from 'buffer';
import useEvent from "../componets/useEvent";
import { ToastContainer, toast } from 'react-toastify';


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
  const [contractAddress, setContractAddress] = useState(null);


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

  const connectSolflare = async () => {
    if (window.solflare) {
      try {
        const solflareWallet = new SolflareWallet();
        solflareWallet.on("connect", () => {
          setPublicKey(solflareWallet.publicKey.toString());
          setProvider(solflareWallet);
          setIsWalletConnected(true);
          localStorage.setItem("wallet", "solflare");
          localStorage.setItem("wallettype", "browser");
          // event.createAccount(solflareWallet.publicKey.toString());
          event.setWalletDetails(solflareWallet.publicKey.toString());
        });
        await solflareWallet.connect();
      } catch {
        setIsWalletConnected(false);
        alert("Wallet connection declined!");
      }
    } else {
      try {
        // mobile.connectWithMobileApp(true);
      } catch {
        window.open("https://solflare.com/", "_blank");
      }
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
    setBhoomibalance(0);
  };

  // const sendToken = async (destinationAddress, amount, tokenMintAddress) => {
  //   try {
  //     if (!provider || !publicKey) throw new Error("Wallet not connected");

  //     const fromPublicKey = new web3.PublicKey(publicKey);
  //     const toPublicKey = new web3.PublicKey(destinationAddress);
  //     const mintPublicKey = new web3.PublicKey(tokenMintAddress);

  //     // Create a new transaction
  //     const transaction = new web3.Transaction();

  //     // Add the transfer instruction to the transaction
  //     const tokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
  //       connection,
  //       fromPublicKey,
  //       mintPublicKey,
  //       fromPublicKey
  //     );
  //     const destinationTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
  //       connection,
  //       fromPublicKey,
  //       mintPublicKey,
  //       toPublicKey
  //     );

  //     transaction.add(
  //       splToken.createTransferInstruction(
  //         tokenAccount.address,
  //         destinationTokenAccount.address,
  //         fromPublicKey,
  //         amount * web3.LAMPORTS_PER_SOL
  //       )
  //     );

  //     transaction.feePayer = fromPublicKey;
  //     transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

  //     // Sign the transaction
  //     const signedTransaction = await provider.signTransaction(transaction);

  //     // Send the transaction
  //     const signature = await connection.sendRawTransaction(signedTransaction.serialize());
  //     await connection.confirmTransaction(signature);

  //     console.log("Transaction successful with signature:", signature);
  //   } catch (error) {
  //     console.error("Error sending token:", error);
  //     alert("Error sending token: " + error.message);
  //   }
  // };

  const sendToken = async (tokenMintAddress, recipientAddress, amount) => {
    toast.info("Please Wait ! Trying to Connect your wallet",{
      autoClose: 9998,
    })
 
    const chainAmmount = Number(amount) * 100000000
    console.log("Entered in Funtion step 1");
    if (!provider) {
      alert("Please connect wallet.");
      return;
    }
    const mintPublicKey = new web3.PublicKey("FX54WhzfPruhbmayknf2v7bVfLGbXJ3eYtdHV4nqR7Kx");
    const recipientPublicKey = new web3.PublicKey(recipientAddress);
    console.log("Entered in Funtion step 2");
    const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
      connection,
      provider.publicKey,
      mintPublicKey,
      provider.publicKey
    );
    console.log("Entered in Funtion step 3");
    const toTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
      connection,
      provider.publicKey,
      mintPublicKey,
      recipientPublicKey
    );
    console.log("Entered in Funtion step 4");
    const transaction = new web3.Transaction().add(
      splToken.createTransferInstruction(
        fromTokenAccount.address,
        toTokenAccount.address,
        provider.publicKey,
        chainAmmount
      )
    );
    console.log("Entered in Funtion step 5");
    transaction.feePayer = provider.publicKey;
    console.log("Entered in Funtion step 6");
    const { blockhash } = await connection.getLatestBlockhash();
    console.log("Entered in Funtion step 7");
    transaction.recentBlockhash = blockhash;
    console.log("Entered in Funtion step 8");

    const tx = await provider
      .signAndSendTransaction(transaction)
      .then((res) => {
        if (provider.isPhantom) {
          return res.signature;
        } else {
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
      console.log("Entered in Funtion step 9");
    


    if (tx === null) {
      throw "Transaction Unsuccessful.";
    } else {
      return tx;
    }
  };


  // Example Usage of TextEncoder/TextDecoder
  // Suppose you were using Buffer to encode/decode data
  // const encoder = new TextEncoder();
  // const decoder = new TextDecoder();
  // const encodedData = encoder.encode("your string data");
  // const decodedData = decoder.decode(encodedData);

  const value = {
    publicKey,
    provider,
    sendToken,
    isWalletConnected,
    setIsWalletConnected,
    solbalance,
    connect,
    connectSolflare,
    bhoomibalance,
    supplydata,
    disconnect,
    contractAddress,

  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}
