import React from 'react';

const CTAButton = ({ children, primary, white, outline, onClick, href, ...props }) => {
  let className = 'px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center cursor-pointer';
  
  if (primary) {
    className += ' bg-primary-500 text-white hover:bg-primary-600';
  } else if (white) {
    if (outline) {
      className += ' bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-500';
    } else {
      className += ' bg-white text-primary-500 hover:bg-gray-100';
    }
  } else {
    className += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
  }
  
  // If href is provided, render an anchor tag instead of a button
  if (href) {
    return (
      <a 
        href={href} 
        className={className} 
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={className} 
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;