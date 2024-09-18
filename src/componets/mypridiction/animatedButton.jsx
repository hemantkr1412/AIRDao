import React, { useState } from 'react';
import './animationbutton.css'; // Assume this file contains necessary CSS

const AnimatedButton = ({data,claimReward}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={data.event_id} className={`button-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="button-header">
        <span>ID: {data.event_id}</span>
        <span style={{
          width:"115px"
        }}>Status: <span style={{
          color: data.status === "WON" ? "GREEN" 
          : data.status === "LOST" ? "RED" 
          : "BLUE" // For "PENDING"
        }}>{data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase()}</span></span>
        <button 
                           onClick={claimReward}
                             style={{
                              backgroundColor:data.is_claimed  ?" #00000080":"#DADADA26",
                                 color:"#FFFFFF",
                                 width:"100px",
                                 height:"25px",
                                 borderRadius:"5px",
                                 cursor:true ?"pointer":"",
                                 border: "2px solid #FFFFFF",
                               
                             }}>
                               {
                                  data.status === "WON" ? (
                                    false?<span>Claim</span>:<span>Claimed</span>
                                  ):("N/A")
                                }
                               {data.is_claimed  &&

                               <img style={{
                                 marginLeft:"5px",
                                 position:"absolute"
                               }} src="clainmed.svg" alt="Claimed" />
                               }
                             </button>
        {/* <div className="dropdown-arrow">{isOpen ? '▲' : '▼'}</div> */}
        <img src="downArrow.svg" alt="down-arrow" style={{
              rotate: isOpen ? "180deg" : "0deg",
              width:"20px"
            }}/>

      </div>
      {isOpen && (
        <div className="button-details">
          <span>Token Committed: {data.token_staked}</span>
          <span>Token Rewarded: {data.amount_rewarded===null?"Pending":data.amount_rewarded}</span>
        </div>
      )}
    </div>
  );
};

export default AnimatedButton;
