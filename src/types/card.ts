import { LucideIcon } from 'lucide-react';

export type CardVariant = 'default' | 'dashed';
export type CardSize = 'sm' | 'md' | 'lg';

export interface BaseCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
}

export interface CourseCardProps {
  title: string;
  description: string;
  students: string | number;
  isNew?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface AddCardProps {
  icon?: LucideIcon;
  text?: string;
  onClick?: () => void;
  className?: string;
}