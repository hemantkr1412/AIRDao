import { defineChain } from "thirdweb";
import { useDispatch } from 'react-redux';
import { walletActions } from "../store/slice/walletSlice";
import { accountDetailsActions } from "../store/slice/accountDetailsSlice";

const useNavbar = () => {

  const API_URL = import.meta.env.VITE_APP_BACKEND_URL
  const dispatch = useDispatch();

  const connectWallet = (walletAddress) => {
    dispatch(walletActions.connect());
    createAccount(walletAddress);
  };

  const disconnectWallet = () => {
    dispatch(walletActions.disconnect());
    clearDetails();
  };



  const updateAccountDetails = (idx, accountx) => {
    // console.log(idx,accountx)
    const newAccountDetails = { id: idx, account: accountx };
    dispatch(accountDetailsActions.setAccountDetails(newAccountDetails)); // Update account details
  };

  const clearDetails = () => {
    dispatch(accountDetailsActions.clearAccountDetails()); // Clear account details
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
      updateAccountDetails(result.id, result.account)
    } catch (error) {
      console.error("Error:", error);
    }
  };




  // const chain = defineChain({
  //     id: 16718,
  //     rpc: "https://network.ambrosus.io",
  //     nativeCurrency: {
  //       name: "AirDAO Mainnet",
  //       symbol: "AMB",
  //       decimals: 18,
  //     },
  //   });



  const chain = defineChain({
    id: 22040,
    rpc: "https://network.ambrosus-test.io",
    nativeCurrency: {
      name: "AirDAO Testnet",
      symbol: "AMB",
      decimals: 18,
    },
  });





  return {
    connectWallet,
    disconnectWallet,
    chain
  }



}

export default useNavbar;