import { Button } from '@/components/common/Button/Button';
import WorkStatus, { Status } from '@/components/layout/Work/WorkStatus';

export interface SubmissionItemProps {
  student: string;
  status: Status;
  time?: string | null;
  comment?: string | null;
}

export const SubmissionItem = ({
  student,
  status,
  time,
  comment,
}: SubmissionItemProps) => {
  return (
    <tr className="border-b last:border-b-0 text-sm">
      <td className="py-4 px-6 text-gray-800 font-bold">{student}</td>
      <td className="py-4 px-6">
        <WorkStatus status={status} />
      </td>
      <td className="py-4 px-6 text-gray-500 font-medium">{time || '-'}</td>
      <td className="py-4 px-6 text-gray-500">{comment || '-'}</td>
      <td className="py-4 px-6">
        {status === 'pending' ? null : (
          <Button className="text-blue-800">보기</Button>
        )}
      </td>
    </tr>
  );
};
