import React from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

type Status = 'submitted' | 'pending' | 'late';

export interface WorkStatusProps {
  status: Status;
}

const statusStyles = {
  submitted: {
    icon: CheckCircle,
    className: 'text-emerald-500 bg-emerald-50',
    text: '제출 완료',
  },
  pending: {
    icon: Clock,
    className: 'text-amber-500 bg-amber-50',
    text: '미제출',
  },
  late: {
    icon: XCircle,
    className: 'text-red-500 bg-red-50',
    text: '기한 초과',
  },
};

const WorkStatus: React.FC<WorkStatusProps> = ({ status }) => {
  const { icon: Icon, className, text } = statusStyles[status];

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${className}`}
    >
      <Icon size={14} />
      {text}
    </div>
  );
};

export default WorkStatus;
