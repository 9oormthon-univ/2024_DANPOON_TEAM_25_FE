import { Button } from '@/components/common/Button/Button';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { Input } from '@/components/common/Input/Input';

interface CourseFormProps extends BaseProps {
  courseName: string;
  setCourseName: (value: string) => void;
  courseDescription: string;
  setCourseDescription: (value: string) => void;
  className?: string;
}

export const CourseForm = ({
  courseName,
  setCourseName,
  courseDescription,
  setCourseDescription,
  className = '',
}: CourseFormProps) => (
  <div
    className={`h-full p-5 max-w-4xl gap-7 flex flex-col justify-center shadow-lg bg-white border-slate-200 border shadow-gray-500/30 rounded-xl ${className}`}
  >
    <Input
      label={'수업 명'}
      placeholder={'수업 이름을 입력해주세요.'}
      content={courseName}
      setContent={setCourseName}
    />
    <Input
      label={'수업 내용'}
      placeholder={'수업에 대한 설명을 입력해주세요.'}
      inputSize={'large'}
      content={courseDescription}
      setContent={setCourseDescription}
    />
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold">최대 학생수</span>
      <Dropdown />
    </div>
    <div className="flex flex-row gap-3 justify-end">
      <Button
        children={'취소'}
        className="px-5 py-2 bg-white border rounded-md border-gray-300 text-gray-700 text-sm"
      />
      <Button
        children={'등록'}
        className="px-5 py-2 bg-[#354EAD] rounded-md text-white border-gray-300 text-sm"
      />
    </div>
  </div>
);
