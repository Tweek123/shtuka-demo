import React, { JSX } from 'react';
import cn from 'classnames';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p';
  children: React.ReactNode;
  className?: string;
  color?: string;
  background?: string;
  fontFamily?: 'primary' | 'secondary' | 'womby' | 'Metal' | 'VarelaRound' | 'CourierNew' | 'ArialBlack';
}

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
};

const styles = {
  h1: 'text-3xl font-bold leading-tight',
  h2: 'text-2.5xl font-semibold leading-tight',
  h3: 'text-2xl font-semibold leading-tight',
  p: 'text-base leading-relaxed',
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className, color = 'text-primary', background, fontFamily = 'VarelaRound' }) => {
  const Tag = variantMapping[variant] as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        styles[variant],
        color,
        {
          'font-primary': fontFamily === 'primary',
          'font-secondary': fontFamily === 'secondary',
          'font-womby': fontFamily === 'womby',
          'font-Metal': fontFamily === 'Metal',
          'font-VarelaRound': fontFamily === 'VarelaRound',
          'font-CourierNew': fontFamily === 'CourierNew',
          'font-ArialBlack': fontFamily === 'ArialBlack',
        },
        background,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;