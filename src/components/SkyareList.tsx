import React from 'react';
import Typography from './Typography';

interface SquareListProps {
  items: string[];
}

const SquareList: React.FC<SquareListProps> = ({ items }) => {
  return (
    <ul className="list-none pl-5 flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index} className="relative pl-5">
          <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#777777]"></span>
          <Typography className='text-[#777777]' fontFamily='CourierNew' variant='p'>{item}</Typography>
        </li>
      ))}
    </ul>
  );
};

export default SquareList;