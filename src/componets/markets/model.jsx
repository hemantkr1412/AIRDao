import React, { useState } from 'react';
import './Modal.css';
import useModel from './useModel';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
// import useMarket from './useMarkets';


const Modal = ({ show, onClose,event,voteId,voteIndex }) => {
  const isConnected = useSelector(state => state.wallet.isConnected);

  const {handleCommitToken} = useModel();

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
          isConnected ? 
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"1rem"

          }}>
            <p style={{
              fontSize:"1.5rem",

            }}>Enter Total number of $AMB tokens</p>
            {/* <input value={ammount} type='number'
            placeholder='Enter Tokens in AMB'
            onChange={(e) =>setAmmount(e.target.value)}
             style={{
              // width:"400px",
              // height:"50px",
              fontSize:"1.1.rem",
              backgroundColor:"#0000000D",
              borderRadius:"10px"
            }}/> */}
            <input 
              value={ammount} 
              type="text" 
              placeholder="Enter Tokens in AMB"
              onChange={(e) => {
                const value = e.target.value;
                // Regular expression to allow only numbers and one decimal point, up to two decimal places
                const regex = /^\d*\.?\d{0,2}$/;

                // Only allow the value if it matches the regex
                if (regex.test(value)) {
                  setAmmount(value);
                }
              }} 
              style={{
                fontSize: "1.1rem",
                backgroundColor: "#0000000D",
                borderRadius: "10px"
              }}
            />

           <button 
           
           onClick={() =>{
            if(ammount === ""){
              // alert("Enter Valid Number");
              toast.error("Enter Valid Number");
              return;
            }
            handleCommitToken(event.id,voteId,voteIndex,ammount)
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
