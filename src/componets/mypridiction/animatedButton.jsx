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
        <span style={{
          color:"black"
        }}>{data.event_id}</span>
        <span style={{
          // width:"115px"
        }}><span style={{
          color:"black"
          // color: data.status === "WON" ? "GREEN" 
          // : data.status === "LOST" ? "RED" 
          // : "BLUE" 
        }}>{data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase()}</span></span>
        <button 
                           onClick={claimReward}
                             style={{
                              backgroundColor:data.is_claimed  ?"#F1D1AD":"#DADADA26",
                                 color:"black",
                                 width:"100px",
                                 height:"25px",
                                 borderRadius:"5px",
                                 cursor:true ?"pointer":"",
                                 border: "2px solid black",
                               
                             }}>
                               {
                                  data.status === "WON" ? (
                                    !data.is_claimed ?<span>Claim</span>:<span>Claimed</span>
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
              width:"15px",
              height:"10px"
            }}/>

      </div>
      {isOpen && (
        <div className="button-details">
          <span>Committed: {data.token_staked}</span>
          <span>Rewarded: {data.amount_rewarded===null?"Pending":data.amount_rewarded}</span>
        </div>
      )}
    </div>
  );
};

export default AnimatedButton;
