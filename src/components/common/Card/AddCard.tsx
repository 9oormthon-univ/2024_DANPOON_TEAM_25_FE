import React from 'react';
import { Plus } from 'lucide-react';
import { AddCardProps } from '@/types/card';
import { cn } from '@/lib/utils';
import { BaseCard } from './BaseCard';

export const AddCard: React.FC<AddCardProps> = ({
  isStudent = false,
  icon: Icon = Plus,
  text = '새 수업 추가하기',
  onClick,
  className,
}) => {
  return (
    <BaseCard
      variant="dashed"
      onClick={onClick}
      className={cn(
        'flex items-center justify-center h-[267px] group',
        className,
      )}
    >
      <div
        className={`flex flex-col items-center text-gray-400 ${
          isStudent
            ? 'group-hover:text-student-secondary'
            : 'group-hover:text-blue-800'
        }`}
      >
        <Icon className="w-10 h-10 mb-2" />
        <span className="text-xs font-medium">{text}</span>
      </div>
    </BaseCard>
  );
};
