import { Button } from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card/Card';
import { Input } from '@/components/common/Input/Input';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { Profile } from '@/components/layout/Profile/Profile';
import { SubmissionInfo } from '@/components/layout/Submission/SubmissionInfo';
import { SubmissionList } from '@/components/layout/Submission/SubmissionList';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import { Work } from '@/types/Work';
import { useState } from 'react';

interface Student {
  name: string;
  works: Work[];
  trainings: Work[];
}

const StudentOverview = () => {
  const [evaluation, setEvaluation] = useState('');
  const [student, setStudent] = useState<Student>({
    name: '김누구',
    works: [
      {
        id: 1,
        title: '1차시: 파이썬 기초 문법',
        dueDate: '2024-11-25',
        remainingDays: 2,
        status: 'pending',
      },
      {
        id: 2,
        title: '2차시: 조건문과 반복문',
        dueDate: '2024-11-20',
        remainingDays: -3,
        status: 'late',
      },
      {
        id: 3,
        title: '3차시: 함수와 모듈',
        dueDate: '2024-11-23',
        remainingDays: 0,
        status: 'submitted',
      },
    ],
    trainings: [
      {
        id: 1,
        title: '파이썬 기초 문법 실습',
        dueDate: '2024-11-25',
        remainingDays: 2,
        status: 'pending',
      },
      {
        id: 2,
        title: '조건문과 반복문 실습',
        dueDate: '2024-11-20',
        remainingDays: -3,
        status: 'late',
      },
    ],
  });
  return (
     <>
        <PageHeader
          pageTitle={student.name}
          isDetailPage={false}
          role="teacher"
          hasBackButton
          hasSubtitle={false}
        />
        <div className="flex flex-row space-x-6">
          <div className="w-1/4 my-8">
            <Profile name={student.name} />
          </div>

          <div className="w-3/4">
            <div className="my-8">
              <Card>
                <SubmissionList list={student.works} label="워크" />
              </Card>
            </div>
            <div className="my-8">
              <Card>
                <SubmissionList list={student.trainings} label="트레이닝" />
              </Card>
            </div>
            <div className="my-8">
              <Card>
                <div className="p-6 space-y-5">
                  <h3 className="text-xl text-gray-800 font-bold">평가</h3>
                  <Input
                    inputSize="medium"
                    content={evaluation}
                    setContent={setEvaluation}
                    placeholder="학생에 대한 평가를 입력하세요"
                  />
                  <div className="flex space-x-3 justify-end">
                    <Button
                      className="bg-transparent px-3 py-2 h-10 text-sm text-blue-800 hover:font-extrabold"
                      children="임시저장"
                    />
                    <Button
                      className="bg-blue-800 px-3 py-2 h-10 rounded-lg text-sm text-white"
                      children="저장"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
     </>
  );
};

export default StudentOverview;
