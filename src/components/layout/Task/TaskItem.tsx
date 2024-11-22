import { Calendar, ChevronRight, Users } from 'lucide-react';
import React from 'react';

export interface TaskItemProps {
  title: string;
  deadline: string;
  submitted: number;
  total: number;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  title,
  deadline,
  submitted,
  total,
}) => {
  const progress = Math.round((submitted / total) * 100);
  return (
    <div className="flex items-center rounded-md transition-colors group hover:bg-gray-50 cursor-pointer justify-between p-4 bg-white">
      <div className="space-y-1">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <div className="flex items-center mr-4 space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{`마감 ${deadline}`}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span>{`${submitted}/${total} 제출`}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative w-40 h-2 bg-gray-200 rounded-full overflow-hidden mr-4">
          <div
            className="absolute h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
};
