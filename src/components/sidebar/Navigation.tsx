import React from 'react';
import { NavigationProps } from '@/types/sidebar';
import { MenuItemButton } from './MenuItemButton';
import { useRouter } from 'next/router';

export const Navigation: React.FC<NavigationProps> = ({
  items = [],
  activeItem,
  setActiveItem,
  onItemClick,
  className = '',
}) => {
  const router = useRouter();
  return (
    <nav className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <MenuItemButton
          key={item.id}
          icon={item.icon}
          active={activeItem === item.id}
          onClick={() => {
            onItemClick?.(item);
            setActiveItem(item.id);
            router.push(item.route);
          }}
        >
          {item.text}
        </MenuItemButton>
      ))}
    </nav>
  );
};
