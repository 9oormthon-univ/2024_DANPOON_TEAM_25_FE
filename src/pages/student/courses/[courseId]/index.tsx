import { Book, CheckCircleIcon, Clock } from 'lucide-react';
import { StudentSidebar } from '@/components/sidebar/StudentSidebar';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import StatCard from '@/components/common/Card/StatsCard';
import PracticeButton from '@/components/common/Button/PracticeButton';
import { Card } from '@/components/common/Card/Card';
import { useState } from 'react';
import WorkItem from '@/components/layout/Work/WorkItem';
import { sortWorks } from '@/lib/sortWorks';
import { worksData } from '@/data/worksData';

const CourseDetail = () => {
  const [sortType, setSortType] = useState<'deadline' | 'submission'>(
    'deadline',
  );
  const sortedWorks = sortWorks(worksData, sortType);

  return (
    <>
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
      <PracticeButton url="#" isStudent />
      <Card>
        {sortedWorks.map((work) => (
          <WorkItem key={work.id} {...work} />
        ))}
      </Card>
    </>
  );
};

export default CourseDetail;
