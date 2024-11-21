import React from 'react';
import { SidebarIconProps } from '@/types/sidebar';

export const SidebarIcon: React.FC<SidebarIconProps> = ({ 
  icon: Icon, 
  size = 20, 
  className = '' 
}) => {
  return Icon ? <Icon size={size} className={className} /> : null;
};
