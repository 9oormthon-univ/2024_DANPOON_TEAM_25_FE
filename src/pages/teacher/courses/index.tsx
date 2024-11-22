import { AddCard } from '@/components/common/Card/AddCard';
import { CourseCard } from '@/components/common/Card/CourseCard';
import SearchInput from '@/components/common/Search/Search';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const CourseDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <TeacherSidebar />

      <div className="ml-72 p-8">
        <PageHeader
          pageTitle="MY COURSE"
          role="teacher"
          hasBackButton
          hasSubtitle
          subtitle="전체 수업 목록을 확인해보세요"
        />

        <div className="my-8">
          <SearchInput
            placeholder="수업 검색하기"
            value={searchTerm}
            onChange={handleSearchChange}
            icon={FiSearch}
            iconClassName="text-gray-400"
            inputClassName="text-gray-800"
          />
        </div>

        <div className="grid grid-cols-4 gap-5">
          <CourseCard
            title="모두 함께 파이썬"
            description="기초부터 시작하는 파이썬 프로그래밍"
            students="45"
            isNew
          />
          <CourseCard
            title="공부를 해볼까요?"
            description="새로운 강의를 시작해보세요"
            students="23"
          />
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
