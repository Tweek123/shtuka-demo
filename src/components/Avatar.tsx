import Image from 'next/image';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses = {
  sm: 'w-24',
  md: 'w-48',
  lg: 'w-64',
  xl: 'w-80',
};

const Avatar = ({
  src,
  hasBorder = true,
  size = 'md'
}: {
  src: string;
  hasBorder?: boolean;
  size?: Size;
}) => {
  return (
    <div className={`${sizeClasses[size]} aspect-square relative rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shadow-lg m-4 ${hasBorder ? 'border-8 border-[#FEFEFE]' : ''}`}>
      <Image
        src={src}
        alt="Avatar"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;