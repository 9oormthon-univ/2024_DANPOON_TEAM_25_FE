import React from 'react';
import { NavigationProps } from '@/types/sidebar';
import { MenuItemButton } from './MenuItemButton';

export const Navigation: React.FC<NavigationProps> = ({ 
  items = [], 
  activeItem,
  onItemClick,
  className = ''
}) => {
  return (
    <nav className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <MenuItemButton
          key={item.id}
          icon={item.icon}
          active={activeItem === item.id}
          onClick={() => onItemClick?.(item)}
        >
          {item.text}
        </MenuItemButton>
      ))}
    </nav>
  );
};
