import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import SearchInput from '@/components/common/Search/Search';
import { FiSearch } from 'react-icons/fi';
import { CourseCard } from '@/components/common/Card/CourseCard';
import { AddCard } from '@/components/common/Card/AddCard';

const CourseDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <PageHeader
        pageTitle="MY COURSE"
        role="student"
        hasBackButton
        hasSubtitle
        subtitle="전체 수업 목록을 확인해보세요"
        status="in-progress"
      />
      <div className="my-6">
        <SearchInput
          placeholder="수업 검색하기"
          value={searchTerm}
          onChange={handleSearchChange}
          icon={FiSearch}
          iconClassName="text-gray-400"
          inputClassName="text-gray-800"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
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
    </>
  );
};

export default CourseDashboard;