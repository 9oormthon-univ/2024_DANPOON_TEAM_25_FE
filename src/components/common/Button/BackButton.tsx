import { Button, ButtonProps } from '@/components/common/Button/Button';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ className, onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick} className={className}>
      <ArrowLeft className="text-gray-600 w-4 h-4" />
    </Button>
  );
};