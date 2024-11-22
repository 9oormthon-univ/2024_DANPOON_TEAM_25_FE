import React from 'react';
import {
  Plus,
  Search,
  Bell,
  Settings,
  Book,
  PlusCircle,
  Layout,
  Briefcase,
  ChevronRight,
  Users,
  Home,
} from 'lucide-react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { StudentSidebar } from '@/components/sidebar/StudentSidebar';

const Card = ({ children, className }) => (
  <div
    className={`bg-white rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl ${className}`}
  >
    {children}
  </div>
);

const CourseCard = ({ title, description, students = '32', isNew }) => (
  <Card className="group cursor-pointer overflow-hidden">
    <div className="h-36 bg-gradient-to-br from-blue-800 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-full px-2.5 py-0.5 text-white text-xs flex items-center gap-1.5">
        <Users size={12} />
        {students}
      </div>
      {isNew && (
        <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
          NEW
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-1.5">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <ChevronRight
          size={16}
          className="text-gray-400 group-hover:text-blue-800 transition-colors"
        />
      </div>
      <p className="text-xs text-gray-500">{description}</p>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
        <div className="flex -space-x-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white"
            />
          ))}
        </div>
        <span className="text-xs text-blue-800 font-medium">진행중</span>
      </div>
    </div>
  </Card>
);


const CourseDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <StudentSidebar />

      {/* Main Content */}
      <div className="ml-72 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">MY COURSE</h1>
            <p className="text-gray-500">현재 진행 중인 수업을 관리하세요</p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
              눈송이
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="수업 검색하기"
          />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-4 gap-5">
          <CourseCard
            title="모두 함께 파이썬"
            description="기초부터 시작하는 파이썬 프로그래밍"
            students="45"
            isNew={true}
          />

          {[1, 2, 3, 4].map((i) => (
            <CourseCard
                  key={i}
                  title="공부를 해볼까요?"
                  description="새로운 강의를 시작해보세요"
                  students={`${20 + i}`} isNew={undefined}            />
          ))}

          <Card className="flex items-center justify-center h-[267px] border-2 border-dashed border-gray-200 hover:border-blue-400 cursor-pointer group">
            <div className="flex flex-col items-center text-gray-400 group-hover:text-blue-800">
              <Plus className="w-10 h-10 mb-2" />
              <span className="text-xs font-medium">새 수업 추가하기</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
