import React from 'react';

interface UnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  thickness?: string;
}

const Underline: React.FC<UnderlineProps> = ({ children, className, color = 'bg-primary', thickness = 'h-1' }) => {
  return (
    <span className="relative inline-block bg-gradient-to-b from-transparent via-transparent via-80% to-[#fed841] to-80% bg-[length:100px_1.2em]">
      {children}
    </span>
  );
};

export default Underline;