import React from 'react';
import { NotificationBadgeProps } from '@/types/sidebar';

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    danger: 'bg-red-500 text-white',
  };

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3.5 h-3.5',
    lg: 'w-5 h-5',
  };

  return (
    <div
      className={`rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
};
