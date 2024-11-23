import { SubmissionInfo } from '@/components/layout/Submission/SubmissionInfo';
import { Work } from '@/types/work';
import React from 'react';

interface SubmissionListProps {
  list: Work[];
  label: string;
}

export const SubmissionList = ({ list, label }: SubmissionListProps) => (
  <div className="overflow-hidden">
    <div className="flex justify-between border border-b border-gray-100 p-6">
      <div className="text-xl text-gray-800 font-bold">{label}</div>
      <div className="text-base font-medium text-blue-800">더보기</div>
    </div>
    <div className="relative max-h-[122px] overflow-y-auto">
      {list.map((item, index) => (
        <React.Fragment key={item.id || index}>
          <SubmissionInfo
            title={item.title}
            index={index}
            status={item.status}
          />
          {index !== list.length - 1 && (
            <div className="border border-b border-gray-100" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);
