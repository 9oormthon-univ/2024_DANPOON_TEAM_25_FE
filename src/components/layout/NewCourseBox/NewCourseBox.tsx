import { PreviewCard } from '@/components/common/Card/PreviewCard';
import { CourseForm } from '@/components/layout/CourseForm/CourseForm';

export const NewCourseBox = () => (
  <div className="w-full max-w-6xl min-h-[300px] space-x-5 flex flex-row justify-center">
    <div className="flex-1 max-w-[60%]">
      <CourseForm />
    </div>
    <div className="flex-1 max-w-[40%]">
      <PreviewCard title={'수업명'} description={'수업 설명이 표시됩니다.'} />
    </div>
  </div>
);
