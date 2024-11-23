import { Card } from '@/components/common/Card/Card';
import DeadlineInput from '@/components/common/Input/DeadlineInput';
import { Input } from '@/components/common/Input/Input';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { FileUploader } from '@/components/layout/FileUploader/FileUploader';
import { Button } from '@/components/common/Button/Button';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const TrainingCreation = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const handleDescriptionChange = useCallback((value: string | undefined) => {
    setDescription(value ?? '');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherSidebar />
      <div className="ml-72 p-8">
        <PageHeader
          pageTitle="트레이닝 등록하기"
          role="teacher"
          hasBackButton
          hasSubtitle={false}
        />
        <div className="my-8">
          <Card>
            <div className="p-6 space-y-7">
              <Input
                label="트레이닝 제목"
                inputSize="small"
                content={title}
                setContent={setTitle}
                placeholder="예) 1차시: 파이썬 기초 문법"
              />

              <DeadlineInput deadline={deadline} setDeadline={setDeadline} />

              <div className="mb-6">
                <div className="text-sm font-semibold pb-2">트레이닝 설명</div>
                <MDEditor
                  value={description}
                  onChange={handleDescriptionChange}
                  textareaProps={{
                    placeholder: '트레이닝 내용을 작성해주세요...',
                    maxLength: 10,
                  }}
                  height={350}
                />
              </div>

              <div className="flex justify-between items-center">
                <FileUploader />
                <div className="flex space-x-3">
                  <Button
                    className="bg-gray-100 px-3 py-2 h-10 rounded-lg border borborder-gray-200 text-sm text-gray-800"
                    children="취소"
                  />
                  <Button
                    className="bg-blue-800 px-3 py-2 h-10 rounded-lg text-sm text-white"
                    children="트레이닝 추가"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default TrainingCreation;
