import { Button } from '@/components/common/Button/Button';
import { Share2 } from 'lucide-react';

export const InviteButton = () => (
  <Button className="flex items-center px-4 py-2 gap-x-3 bg-blue-50 text-blue-800 rounded-lg cursor-pointer">
    <Share2 className="w-4 h-4 text-blue-800" />
    초대하기
  </Button>
);
