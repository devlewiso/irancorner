import React from 'react';

const Button = ({ className, children, ...props }) => (
  <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} {...props}>
    {children}
  </button>
);

export { Button };
