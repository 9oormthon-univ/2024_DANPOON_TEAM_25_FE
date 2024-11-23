import { AddButton } from '@/components/common/Button/AddButton';
import { Card } from '@/components/common/Card/Card';
import { SummaryCard } from '@/components/common/Card/SummaryCard';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TaskItem } from '@/components/layout/Task/TaskItem';
import { WorkTrainingTabs } from '@/components/layout/WorkTrainingTabs/WorkTrainingTabs';
import { taskData } from '@/data/taskData';
import { Book, Calendar, CirclePlus, Users } from 'lucide-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  return (
    <>
      <PageHeader
        pageTitle="모두 함께 파이썬"
        isDetailPage
        role="teacher"
        hasBackButton
        hasSubtitle
        subtitle="기초부터 시작하는 파이썬 프로그램"
      />
      <div className="my-8">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <SummaryCard label="수강생" value="32명" icon={Users} />
          <SummaryCard label="총 워크" value="12개" icon={Book} />
          <SummaryCard label="완료율" value="78%" icon={Calendar} />
          <SummaryCard label="트레이닝" value="6개" icon={CirclePlus} />
        </div>
      </div>

      <Card>
        <div className="p-6">
          <WorkTrainingTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="mt-6 space-y-4">
            {activeTab === 0 && (
              <>
                <div className="flex justify-between">
                  <h3 className="font-bold text-base pl-3">워크 목록</h3>
                  <AddButton
                    children="워크 추가"
                    onClick={() =>
                      router.push('/teacher/courses/:courseId/works/create')
                    }
                  />
                </div>
                {taskData.map((task) => (
                  <TaskItem key={task.id} {...task} />
                ))}
              </>
            )}

            {activeTab === 1 && (
              <>
                <div className="flex justify-between">
                  <h3 className="font-bold text-base pl-3">트레이닝 목록</h3>
                  <AddButton
                    children="트레이닝 추가"
                    onClick={() =>
                      router.push('/teacher/courses/:courseId/trainings/create')
                    }
                  />
                </div>
                {taskData.map((task) => (
                  <TaskItem key={task.id} {...task} />
                ))}
              </>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default CourseDetail;
