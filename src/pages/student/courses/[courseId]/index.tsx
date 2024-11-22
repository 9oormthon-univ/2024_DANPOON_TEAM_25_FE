import { Book, CheckCircleIcon, Clock } from 'lucide-react';
import { StudentSidebar } from '@/components/sidebar/StudentSidebar';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import StatCard from '@/components/common/Card/StatsCard';
import PracticeButton from '@/components/common/Button/PracticeButton';
import { Card } from '@/components/common/Card/Card';
import { useState } from 'react';
import WorkItem from '@/components/layout/Work/WorkItem';

interface Work {
  id: number;
  title: string;
  dueDate: string;
  remainingDays: number;
  status: 'submitted' | 'pending' | 'late';
}

const CourseDetail = () => {
  const [sortType, setSortType] = useState<'deadline' | 'submission'>('deadline');
  const [showAllWorks, setShowAllWorks] = useState(false);

  const works: Work[] = [
    {
      id: 1,
      title: '1차시: 파이썬 기초 문법',
      dueDate: '2024-03-20',
      remainingDays: 2,
      status: 'pending' as const,
    },
    {
      id: 2,
      title: '2차시: 조건문과 반복문',
      dueDate: '2024-03-18',
      remainingDays: 0,
      status: 'submitted' as const,
    },
    {
      id: 3,
      title: '3차시: 함수와 모듈',
      dueDate: '2024-03-25',
      remainingDays: 7,
      status: 'pending' as const,
    },
    {
      id: 4,
      title: '4차시: 클래스와 객체',
      dueDate: '2024-03-15',
      remainingDays: -3,
      status: 'late' as const,
    },
  ].sort((a, b) => {
    if (sortType === 'submission') {
      const order: Record<Work['status'], number> = { pending: 0, late: 1, submitted: 2 };
      return order[a.status] - order[b.status];
    }
    return a.remainingDays - b.remainingDays;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentSidebar />
      <div className="ml-72 p-8">
        <PageHeader
          pageTitle="모두 함께 파이썬"
          role="student"
          hasBackButton
          hasSubtitle
          subtitle="기초부터 시작하는 파이썬 프로그래밍"
          status="in-progress"
        />
        <div className="my-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard label="총 워크" value="6개" icon={Book} />
            <StatCard label="제출한 워크" value="1개" icon={CheckCircleIcon} />
            <StatCard label="남은 워크" value="5개" icon={Clock} />
          </div>
        </div>
        <PracticeButton url="#" />
        <Card>
          {works.map((work) => (
            <WorkItem key={work.id} {...work} />
          ))}
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;
