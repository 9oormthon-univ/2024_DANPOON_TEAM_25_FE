import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { CourseCardProps } from '@/types/card';
import { cn } from '@/lib/utils';
import { BaseCard } from './BaseCard';

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  students,
  isNew = false,
  onClick,
  className,
}) => {
  return (
    <BaseCard className={cn("group overflow-hidden", className)} onClick={onClick}>
      <div className="h-36 bg-gradient-to-br from-blue-800 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-full px-2.5 py-0.5 text-white text-xs flex items-center gap-1.5">
          <Users size={12} />
          {students}
        </div>
        {isNew && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
            NEW
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <ChevronRight
            size={16}
            className="text-gray-400 group-hover:text-blue-800 transition-colors"
          />
        </div>
        <p className="text-xs text-gray-500">{description}</p>
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="flex -space-x-1.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white"
              />
            ))}
          </div>
          <span className="text-xs text-blue-800 font-medium">진행중</span>
        </div>
      </div>
    </BaseCard>
  );
};
