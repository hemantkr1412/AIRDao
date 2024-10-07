import React from 'react';
import './CardSkeleton.css'; // Assuming you'll create a corresponding CSS file

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-info">
          <div className="skeleton-text short"></div>
          <div className="skeleton-text long"></div>
        </div>
      </div>
      <div className="skeleton-options">
        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>
      </div>
      <div className="skeleton-footer">
        <div className="skeleton-text small"></div>
        <div className="skeleton-text small"></div>
      </div>
    </div>
  );
};

const SkeletonGrid = () => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
