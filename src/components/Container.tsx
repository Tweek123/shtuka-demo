import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-row w-full max-w-[1400px] mx-auto px-4">
      {children}
    </div>
  );
};
export default Container;
