import { Button } from '@/components/common/Button/Button';
import WorkStatus, { Status } from '@/components/layout/Work/WorkStatus';

export interface SubmissionInfoProps {
  title: string;
  status: Status;
  index: number;
}

export const SubmissionInfo = ({
  title,
  index,
  status,
}: SubmissionInfoProps) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex flex-row">
      <div className="py-2 pl-6 text-gray-500 text-lg font-bold text-center">
        {index + 1}
      </div>

      <div className="py-2 px-4 text-gray-800 text-lg font-semibold">
        {title}
      </div>
    </div>

    <div className="flex flex-row space-x-3">
      <WorkStatus status={status} />
      {status === 'pending' ? (
        <div className="text-gray-500 py-2 px-10 text-lg font-medium">-</div>
      ) : (
        <Button className="py-2 px-6 text-blue-600 text-sm font-medium hover:font-extrabold">
          더보기
        </Button>
      )}
    </div>
  </div>
);
