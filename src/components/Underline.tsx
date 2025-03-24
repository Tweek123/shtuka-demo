import React from 'react';

interface UnderlineProps {
  children: React.ReactNode;
  gradient?: string
}

const Underline: React.FC<UnderlineProps> = ({ children, gradient = 'to-[#fed841]' }) => {
  const words = children.split(' ');

  return words.map((word, index) => (
      <span key={index} className={`relative inline-block bg-gradient-to-b from-transparent via-transparent via-80% ${gradient} to-80% bg-[length:100px_1.2em]`}>
        {word}
        {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ))
};

export default Underline;