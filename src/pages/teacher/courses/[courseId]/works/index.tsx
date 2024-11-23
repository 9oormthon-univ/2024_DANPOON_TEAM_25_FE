import { Card } from '@/components/common/Card/Card';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TaskItem } from '@/components/layout/Task/TaskItem';
import { taskData } from '@/data/taskData';

const WorkList = () => {
  return (
    <>
      <PageHeader pageTitle="워크 목록" role="teacher" />
      <div className="my-8">
        <Card>
          <div className="p-6 h-[600px] overflow-y-auto">
            {taskData.map((task) => (
              <TaskItem key={task.id} {...task} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default WorkList;
