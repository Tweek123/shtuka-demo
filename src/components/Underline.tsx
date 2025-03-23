import React from 'react';

interface UnderlineProps {
  children: React.ReactNode;
  gradient?: string
}

const Underline: React.FC<UnderlineProps> = ({ children, gradient = 'to-[#fed841]' }) => {
  return (
    <span className={`relative inline-block bg-gradient-to-b from-transparent via-transparent via-80% ${gradient} to-80% bg-[length:100px_1.2em]`}>
      {children}
    </span>
  );
};

export default Underline;