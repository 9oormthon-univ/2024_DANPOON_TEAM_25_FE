import { Button, ButtonProps } from '@/components/common/Button/Button';
import { CirclePlus } from 'lucide-react';

export const AddButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button className="flex items-center px-4 py-2 gap-x-3 bg-blue-800 text-blue-50 rounded-lg cursor-pointer">
    <CirclePlus className="w-5 h-5" />
    {children}
  </Button>
);
