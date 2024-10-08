import React, { useState } from "react";
import "./MobileViewTable.css";
const EventRow = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <div className="event-row">
      <div className="event-main">
        <div className="event-id">{event.id}</div>
        <div className={`status ${event.status.toLowerCase()}`}>{event.status}</div>
        <div className="action">
          {event.status === "Won" || event.status === "Lost" ? (
            event.claimed ? (
              <button className="claimed-btn" disabled>Claimed</button>
            ) : (
              <button className="claim-btn">Claim</button>
            )
          ) : (
            <button className="pending-btn" disabled>Pending</button>
          )}
        </div>
        <button className="toggle-btn" onClick={toggleDetails}>
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && (
        <div className="event-details">
          <div className="detail-item">Token Committed: {event.tokensCommitted}</div>
          <div className="detail-item">Token Rewarded: {event.tokensRewarded}</div>
        </div>
      )}
    </div>
  );
};

const EventList = () => {
  const events = [
    { id: 2, status: "Won", claimed: false, tokensCommitted: 200, tokensRewarded: "Pending" },
    { id: 23, status: "Won", claimed: true, tokensCommitted: 100, tokensRewarded: "50" },
    { id: 45, status: "Pending", claimed: false },
    { id: 12, status: "Lost", claimed: true, tokensCommitted: 200, tokensRewarded: "Pending" },
    { id: 34, status: "Pending", claimed: false },
    { id: 25, status: "Won", claimed: false, tokensCommitted: 300, tokensRewarded: "100" },
    { id: 23, status: "Won", claimed: true, tokensCommitted: 150, tokensRewarded: "60" },
    { id: 11, status: "Pending", claimed: false },
    { id: 76, status: "Lost", claimed: false },
    { id: 6, status: "Pending", claimed: false },
    { id: 54, status: "Pending", claimed: false },
  ];

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventRow key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
