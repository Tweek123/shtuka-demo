interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
  }
  
  const Button = ({ children, className = '', size = 'md' }: ButtonProps) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    return (
      <button className={`${sizeClasses[size]} bg-[#eb2f5b] text-white rounded-full hover:bg-[#d8275a] transition-colors duration-300 max-w-64 w-full mx-auto ${className}`}>
        {children}
      </button>
    );
  };
  
  export default Button;