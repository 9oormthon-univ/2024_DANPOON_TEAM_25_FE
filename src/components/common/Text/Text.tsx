import React from 'react';
import { TextProps } from '@/types/sidebar';

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  color = 'default',
  className = '' 
}) => {
  const variants = {
    h1: 'text-2xl font-bold',
    h2: 'text-xl font-bold',
    h3: 'text-lg font-medium',
    body: 'text-base',
    small: 'text-sm',
    tiny: 'text-xs'
  };

  const colors = {
    default: 'text-gray-900',
    muted: 'text-gray-500',
    white: 'text-white',
    primary: 'text-blue-800',
    secondary: 'text-blue-200'
  };

  return (
    <div className={`${variants[variant]} ${colors[color]} ${className}`}>
      {children}
    </div>
  );
};
