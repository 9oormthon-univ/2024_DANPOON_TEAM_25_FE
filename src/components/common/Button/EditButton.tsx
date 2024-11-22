import { Button } from '@/components/common/Button/Button';
import { Pencil } from 'lucide-react';

export const EditButton = () => (
  <Button className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-color">
    <Pencil className="w-3 h-3 text-gray-600" />
  </Button>
);
