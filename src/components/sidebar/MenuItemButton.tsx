import React from 'react';
import { MenuItemButtonProps } from '@/types/sidebar';
import { SidebarIcon } from './SidebarIcon';

export const MenuItemButton: React.FC<MenuItemButtonProps> = ({
  isStudent,
  icon,
  children,
  active = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-lg
        transition-all
        ${
          active
            ? `${
                isStudent
                  ? 'bg-student-secondary/70 text-white'
                  : 'bg-blue-800 text-white'
              } `
            : `${
                isStudent
                  ? 'hover:bg-student-secondary/70 text-white'
                  : 'hover:bg-blue-800 text-white'
              }`
        }
        ${className}
      `}
    >
      <SidebarIcon icon={icon} />
      {children}
    </button>
  );
};
