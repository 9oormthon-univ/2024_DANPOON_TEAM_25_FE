import { Button, ButtonProps } from '@/components/common/Button/Button';
import { Share2 } from 'lucide-react';

interface InviteButtonProps extends BaseProps {
  size?: 'medium' | 'large';
}

export const InviteButton = ({ size = 'medium' }: InviteButtonProps) => (
  <Button
    className={`flex items-center gap-x-3 bg-blue-50 text-blue-800 rounded-lg cursor-pointer ${
      size === 'medium' ? 'px-4 py-2' : 'px-6 py-4 text-lg font-medium'
    }`}
  >
    <Share2 className="w-4 h-4 text-blue-800" />
    {size === 'medium' ? '초대하기' : '공유하기'}
  </Button>
);
