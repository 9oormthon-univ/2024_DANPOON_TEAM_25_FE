import React, { useState } from 'react';
import { StudentSidebar } from '@/components/sidebar/StudentSidebar';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import SearchInput from '@/components/common/Search/Search';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { CourseCard } from '@/components/common/Card/CourseCard';
import { AddCard } from '@/components/common/Card/AddCard';

const CourseDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      <div className="hidden md:block w-72 fixed h-screen">
        <StudentSidebar />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
        >
          <FiMenu className="w-6 h-6" />
        </button>
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed left-0 top-0 w-72 h-full bg-white z-50">
              <StudentSidebar />
            </div>
          </>
        )}
      </div>
      <div className="w-full md:ml-72 p-4 md:p-8">
        <div className="mt-16 md:mt-0">
          <PageHeader
            pageTitle="MY COURSE"
            role="student"
            hasBackButton
            hasSubtitle
            subtitle="전체 수업 목록을 확인해보세요"
            status="in-progress"
          />
        </div>
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
      </div>
    </div>
  );
};

export default CourseDashboard;