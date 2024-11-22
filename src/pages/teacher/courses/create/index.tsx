import { PreviewCard } from '@/components/common/Card/PreviewCard';
import { CourseForm } from '@/components/layout/CourseForm/CourseForm';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';

const CoureseCreattion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <TeacherSidebar />

      <div className="ml-72 p-8">
        <PageHeader
          pageTitle="MY COURSE"
          role="teacher"
          hasBackButton={false}
          hasSubtitle
          subtitle="새로운 수업을 등록하고 관리하세요."
        />

        <div className="w-full max-w-6xl min-h-[300px] space-x-5 flex flex-row justify-center mt-5">
          <div className="flex-1 max-w-[60%]">
            <CourseForm />
          </div>
          <div className="flex-1 max-w-[40%]">
            <PreviewCard
              title={'수업명'}
              description={'수업 설명이 표시됩니다.'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoureseCreattion;
