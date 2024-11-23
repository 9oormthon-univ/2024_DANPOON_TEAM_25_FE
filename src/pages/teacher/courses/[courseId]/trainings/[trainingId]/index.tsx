import { InviteButton } from '@/components/common/Button/InviteButton';
import { Card } from '@/components/common/Card/Card';
import SearchInput from '@/components/common/Search/Search';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { SubmissionItem } from '@/components/layout/Submission/SubmissionItem';
import { SubmissionStatus } from '@/components/layout/Submission/SubmissionStatus';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import { submissionData } from '@/data/submissionData';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const TrainingDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };
  return (
     <>
        <PageHeader
          pageTitle="1차시: 파이썬 기초 문법"
          isDetailPage
          role="teacher"
          hasBackButton
          hasSubtitle
          subtitle="모두 함께 파이썬"
        />
        <div className="my-8">
          <SubmissionStatus />
        </div>

        <Card>
          <div className="p-6 flex items-center justify-between">
            <h3 className="font-bold">제출 현황</h3>
            <div className="flex items-center space-x-2">
              <SearchInput
                className="w-72"
                placeholder="학생 검색"
                value={searchTerm}
                onChange={handleSearchChange}
                icon={FiSearch}
                iconClassName="text-gray-400"
                inputClassName="text-gray-800"
              />
              <InviteButton
                label="내보내기"
                className="px-4 py-2"
                icon={Download}
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="relative max-h-[300px] overflow-y-auto">
              <table className="min-w-full text-left table-auto border-t-[4px] border-gray-100/70">
                <thead className="sticky top-0 bg-gray-50 z-10">
                  <tr className="border-b text-sm">
                    <th className="py-3 px-6 text-gray-700 font-medium">
                      학생
                    </th>
                    <th className="py-3 px-6 text-gray-700 font-medium">
                      상태
                    </th>
                    <th className="py-3 px-6 text-gray-700 font-medium">
                      제출 시간
                    </th>
                    <th className="py-3 px-6 text-gray-700 font-medium">
                      코멘트
                    </th>
                    <th className="py-3 px-6 text-gray-700 font-medium">
                      작업
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissionData.map((submission, index) => (
                    <SubmissionItem key={index} {...submission} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
     </>
  );
};

export default TrainingDetail;
