import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  padding?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, background = 'bg-white', padding = 'py-16' }) => {
  return (
    <section className={`flex justify-center items-center w-full ${background} ${padding} ${className || ''}`}>
        {children}
    </section>
  );
};

export default Section;