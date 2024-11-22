import React from 'react';
import { MenuItemButtonProps } from '@/types/sidebar';
import { SidebarIcon } from './SidebarIcon';

export const MenuItemButton: React.FC<MenuItemButtonProps> = ({ 
  icon,
  children,
  active = false,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-lg
        transition-all
        ${active ? 'bg-blue-800 text-white' : 'text-white hover:bg-blue-800'}
        ${className}
      `}
    >
      <SidebarIcon icon={icon} />
      {children}
    </button>
  );
};