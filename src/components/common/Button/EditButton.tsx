import { Button } from '@/components/common/Button/Button';
import { Pencil } from 'lucide-react';

export const EditButton = () => (
  <Button className="cursor-pointer">
    <Pencil className="w-4 h-4 text-gray-600" />
  </Button>
);
