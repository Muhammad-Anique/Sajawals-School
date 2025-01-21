// OverlaySpinner.js
import React from 'react';
import './loader.css';

const OverlaySpinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="overlay-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default OverlaySpinner;
