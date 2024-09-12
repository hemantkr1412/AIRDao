import React, { useState } from 'react';
import './Modal.css';
import { useWallet } from '../context/walletContext';
import useEvent from './useEvent';

const Modal = ({ show, onClose,event,voteId,voteIndex }) => {
  const wallet = useWallet();
  const eventUse = useEvent();
  const [ammount,setAmmount] = useState("");
  

  if (!show) {
    return null;
  }

  console.log(event);

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>Close</button> */}
        {
          wallet.isWalletConnected ? 
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"1rem"

          }}>
            <p style={{
              fontSize:"1.5rem",

            }}>Enter Number of Tokens</p>
            <input value={ammount} type='text'
            onChange={(e) =>setAmmount(e.target.value)}
             style={{
              // width:"400px",
              // height:"50px",
              backgroundColor:"#0000000D",
              borderRadius:"10px"
            }}/>
           <button 
           
           onClick={() =>{
            eventUse.handleCommitToken(event.id,voteId,voteIndex,ammount)
            onClose()
           }} style={{
                width:"200px",
                height:"50px",
                backgroundColor:"black",
                color:"white",
                borderRadius:"5px",
                fontSize:"1rem",
              }}
              >Submit</button>
          </div>
          :
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"1rem"

          }}>
              <img src='walletNotConnected.svg' alt='Connect Wallet' />
              <p>Caution!! You need to connect wallet first</p>
              {/* <button 
              onClick={()=>{
                wallet.connect()
                onClose()
              }}
              style={{
                width:"200px",
                height:"50px",
                backgroundColor:"black",
                color:"white",
                borderRadius:"5px",
                fontSize:"1rem",
              }}
              >Connect Wallet</button> */}

          </div>
        }
      </div>
    </div>
  );
};


export default Modal;
