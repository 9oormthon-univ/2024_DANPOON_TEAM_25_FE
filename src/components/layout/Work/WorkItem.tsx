import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import WorkStatus from './WorkStatus';

export interface WorkItemProps {
  id: number;
  title: string;
  dueDate: string;
  remainingDays: number;
  status: 'submitted' | 'pending' | 'late';
}

const WorkItem: React.FC<WorkItemProps> = ({ title, dueDate, remainingDays, status }) => (
  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors group">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <h3 className="font-medium text-gray-900 group-hover:text-blue-800">
          {title}
        </h3>
        <WorkStatus status={status} />
      </div>
      <ChevronRight className="text-gray-400 group-hover:text-blue-800" />
    </div>
    <div className="flex items-center gap-4 text-sm text-gray-500">
      <div className="flex items-center gap-1.5">
        <Clock size={16} />
        <span>마감 {dueDate}</span>
      </div>
      {remainingDays > 0 && (
        <span className="text-amber-600">{remainingDays}일 남음</span>
      )}
    </div>
  </div>
);

export default WorkItem;
