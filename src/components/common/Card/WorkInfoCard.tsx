import { Book, CheckCircle, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 

export interface WorkInfoCardProps {
  title: string;
  remainingDays: number;
  dueDate: string;
  status: string;
  description: string;
  icon?: React.ReactNode;
}

const WorkInfoCard: React.FC<WorkInfoCardProps> = ({
  title,
  remainingDays,
  dueDate,
  status,
  description,
  icon = <Book size={24} className="text-blue-800" />,
}) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-50 rounded-xl">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-lg font-semibold">{title}</h2>
            <span className="px-2.5 py-0.5 bg-amber-50 text-amber-600 rounded-full text-xs font-medium">
              {remainingDays}일 남음
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>마감 {dueDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={16} />
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkInfoCard;
