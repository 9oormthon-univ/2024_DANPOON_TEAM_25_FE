import { Button, ButtonProps } from '@/components/common/Button/Button';
import { Icon, LucideIcon, Share2 } from 'lucide-react';

interface InviteButtonProps extends BaseProps {
  className?: string;
  label: string;
  icon: LucideIcon;
}

export const InviteButton = ({
  className = '',
  label = '',
  icon: Icon,
}: InviteButtonProps) => (
  <Button
    className={`flex items-center gap-x-3 bg-blue-50 text-blue-800 rounded-lg cursor-pointer ${className}`}
  >
    <Icon className="w-4 h-4 text-blue-800" />
    {label}
  </Button>
);
