import { LucideIcon } from 'lucide-react';

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'default' | 'primary' | 'danger';
export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'tiny';
export type ColorVariant = 'default' | 'muted' | 'white' | 'primary' | 'secondary';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: Size;
  className?: string;
}

export interface NotificationBadgeProps {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: ColorVariant;
  className?: string;
}

export interface MenuItem {
  id: string;
  icon: LucideIcon;
  text: string;
  route: string;
}

export interface SidebarIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export interface MenuItemButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface ProfileConfig {
  avatar?: {
    src?: string;
    alt?: string;
    size?: Size;
  };
  name: string;
  subtitle?: string;
  showBadge?: boolean;
}

export interface ProfileSectionProps extends ProfileConfig {
  className?: string;
}

export interface NavigationProps {
  items: MenuItem[];
  activeItem?: string;  
  setActiveItem: (value: string) => void;
  onItemClick?: (item: MenuItem) => void;
  className?: string;
}

export interface SidebarProps {
  profile?: ProfileConfig;
  menuItems: MenuItem[];
  activeItem?: string;
  setActiveItem: (value: string) => void;
  onMenuItemClick?: (item: MenuItem) => void;
  className?: string;
}