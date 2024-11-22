import { Card } from '@/components/common/Card/Card';
import { SummaryCard } from '@/components/common/Card/SummaryCard';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TaskItem } from '@/components/layout/Task/TaskItem';
import { WorkTrainingTabs } from '@/components/layout/WorkTrainingTabs/WorkTrainingTabs';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import { taskData } from '@/data/taskData';
import { Book, Calendar, CirclePlus, Users } from 'lucide-react';
import { useState } from 'react';

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherSidebar />
      <div className="ml-72 p-8">
        <PageHeader
          pageTitle="모두 함께 파이썬"
          isDetailPage
          role="teacher"
          hasBackButton
          hasSubtitle
          subtitle="기초부터 시작하는 파이썬 프로그램"
        />
        <div className="my-8">
          <div className="grid grid-cols-4 gap-10 mb-8">
            <SummaryCard label="수강생" value="32명" icon={Users} />
            <SummaryCard label="총 워크" value="12개" icon={Book} />
            <SummaryCard label="완료율" value="78%" icon={Calendar} />
            <SummaryCard label="트레이닝" value="6개" icon={CirclePlus} />
          </div>
        </div>

        <Card>
          <div className="p-6">
            <WorkTrainingTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <div className="mt-6 space-y-4">
              {activeTab === 0 &&
                taskData.map((task) => <TaskItem key={task.id} {...task} />)}
              {activeTab === 1 &&
                taskData.map((task) => <TaskItem key={task.id} {...task} />)}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;
