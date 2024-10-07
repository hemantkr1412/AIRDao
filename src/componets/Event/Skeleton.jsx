import React from 'react';
import './Skeleton.css'; // Create this file for custom styling

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-info">
          <div className="skeleton-text short"></div>
          <div className="skeleton-text long"></div>
        </div>
      </div>

      <div className="skeleton-votes">
        <div className="skeleton-option"></div>
        <div className="skeleton-option"></div>
        <div className="skeleton-option"></div>
      </div>
      
      <div className="skeleton-footer">
        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>
      </div>


      <div className="skeleton-votes">
        <div className="skeleton-option"></div>
        <div className="skeleton-option"></div>
        <div className="skeleton-option"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
