import { CodeBox } from '@/components/common/Box/CodeBox';
import { CopyButton } from '@/components/common/Button/CopyButton';
import { InviteButton } from '@/components/common/Button/InviteButton';
import { Card } from '@/components/common/Card/Card';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import { Share2 } from 'lucide-react';

const CoureseCreattionComplete: React.FC = () => {
  return (
     <>
        <PageHeader
          pageTitle="Course 등록하기"
          role="teacher"
          hasBackButton
          hasSubtitle={false}
        />

        <Card className="p-16 m-36 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">초대 코드</h2>
          <p className="text-lg text-gray-600 mb-4">
            학생들과 공유할 수업 코드입니다.
          </p>
          <div className="my-8">
            <CodeBox code="12GW2S" />
          </div>
          <div className="flex flex-col justify-center items-center mb-8">
            <h3 className="font-extrabold text-blue-800 text-2xl mb-3">
              모두 함께 파이썬
            </h3>
            <p className="font-medium text-base">수업이 등록되었습니다.</p>
            <p className="font-medium text-base">
              초대 코드를 복사하여 학생들에게 공유해주세요!
            </p>
          </div>

          <div className="flex flex-row space-x-4 justify-center items-center">
            <CopyButton />
            <InviteButton
              label="공유하기"
              className="px-5 py-3 text-lg font-medium"
              icon={Share2}
            />
          </div>
        </Card>
      </>
  );
};

export default CoureseCreattionComplete;
