import React from 'react';
import { SidebarProps } from '@/types/sidebar';
import { ProfileSection } from './ProfileSection';
import { Navigation } from './Navigation';

export const Sidebar: React.FC<SidebarProps> = ({
  profile,
  menuItems,
  activeMenuItem,
  onMenuItemClick,
  className = ''
}) => {
  return (
    <aside className={`fixed left-0 top-0 h-screen w-72 bg-blue-700 p-6 ${className}`}>
      {profile && (
        <ProfileSection
          {...profile}
          className="mb-10"
        />
      )}
      
      <Navigation
        items={menuItems}
        activeItem={activeMenuItem}
        onItemClick={onMenuItemClick}
      />
    </aside>
  );
};
