import React from 'react';
import cn from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  padding?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, background, padding = 'px-4' }) => {
  return (
    <section className={cn(
      'flex justify-center items-center w-full',
      padding,
      className,
      background
    )}>
      {children}
    </section>
  );
};

export default Section;
