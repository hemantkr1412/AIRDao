import React, { useEffect, useState } from 'react';
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { GoogleLoginButton } from "react-social-login-buttons";
import { GoogleLogin } from '@react-oauth/google';
import GoogleLoginComponent from './GoogleLogin';
import { useGoogleLogin } from '@react-oauth/google';




const wallets = [createWallet("io.metamask")
];

const Modal = ({ show, onClose,connectWallet,disconnectWallet,client,chain}) => {

    const [isCliked,setIsClicked] = useState(false)

    useEffect(()=>{
        if(isCliked){
            useGoogleLogin({
                onSuccess: tokenResponse => console.log(tokenResponse),
            })
        }
        
    },[isCliked])
   



  if (!show) {
    return null;
  }

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    // Handle user information after login
  };

  const handleError = () => {
    console.log('Login Failed');
  };



  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Sign in/Sign Up</h3>
        <div style={{
            padding:"1rem",
            // display:"flex"
            gap:"2rem"
        }}>
        <div style={{
            display:"flex",
            backgroundColor:"white",
            alignItems:"center",
            padding:"0 1%",
            width:"98%",
            // border:"1px solid red",
            borderRadius:"3px",
            height:"50px",
            boxShadow:"rgba(0, 0, 0, 0.5) 0px 1px 2px",
           
        }}>
        <img src='./metamaskICon.webp' alt='MetaMask Icon' style={{
             height: "40px",
            borderRadius:"3px"
        }}/>
        <ConnectButton
                          onConnect = {
                            (wallet) =>{
                              const walletAddress = wallet.getAccount()
                              if(walletAddress.address){
                                connectWallet(walletAddress.address);
                              }
                            }
                          }
                          onDisconnect ={
                            (info) =>{
                              disconnectWallet();
                            }
                          }
                           client={client} wallets={wallets} 
                           connectButton={{
                            label: "Connect Wallet",
                            style:{
                              background: "white",
                            //   color: "black",
                              width: "calc(100%-40px)",
                              height: "40px",
                              borderRadius: "0px",
                            //   border: "none",
                            //   marginRight: "3rem",
                              cursor: "pointer",
                            //   boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.4)",
                            }
                          }}
                          chain={chain}
                           />
        </div>
        {/* <div> */}

        {/* <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        render={(renderProps) => (
            
          <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Sign in with Google
          </GoogleLoginButton>
        )}
      /> */}

      {/* <GoogleLoginComponent /> */}
      {/* <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>; */}


        <GoogleLoginButton onClick={() =>setIsClicked(!isCliked)} style={{
            width:"100%",
            height:"50px",
            // marginTop:"10px"
            margin:"0px",
            marginTop:"10px"
        }}/>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
};


export default Modal;
