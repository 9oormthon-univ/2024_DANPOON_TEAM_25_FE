import CommentCard from "@/components/common/Card/CommentCard";
import FileUploadCard from "@/components/common/Card/FileUploadCard";
import WorkInfoCard from "@/components/common/Card/WorkInfoCard";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";
import { useState } from "react";

const WorkSubmit = () => {
    const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);

    const handleFileUpload = (files: FileList | null) => {
        setUploadedFiles(files);
        console.log('Uploaded files:', files);
    };

    const handleSubmit = () => {
        if (uploadedFiles) {
        alert(`${uploadedFiles.length}개의 파일이 제출되었습니다.`);
        } else {
        alert('제출할 파일이 없습니다.');
        }
    }; 

    const [comment, setComment] = useState('');

    const handleCommentChange = (value: string) => {
        setComment(value);
    };

    const handleSave = () => {
        alert(`코멘트가 저장되었습니다.`);
    };

    return (
      <>
          <PageHeader
            pageTitle="1차시: 파이썬 기초 문법"
            role="student"
            hasBackButton
            hasSubtitle
            subtitle="모두 함께 파이썬"
            status="in-progress"
          />
          <div className="my-8 mb-6">
            <WorkInfoCard 
              title="1차시: 파이썬 기초 문법"
              remainingDays={2}
              dueDate="2024.11.25"
              status="미제출"
              description={`이번 차시에서는 파이썬의 기초 문법에 대해 학습합니다.

                            다음 내용을 포함하여 과제를 제출해주세요:

                            1. 변수와 데이터 타입
                            2. 기본 연산자
                            3. 문자열 다루기
                            4. 리스트와 딕셔너리`}
            />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CommentCard
                comment={comment}
                onCommentChange={handleCommentChange}
                onSave={handleSave}
                placeholder="과제에 대한 코멘트를 남겨주세요 (200자 이내)"
                maxLength={200}
                saveButtonText="저장하기"
              />
              <FileUploadCard
                title="과제 제출"
                submitGuide="10MB 이하의 파일만 업로드 가능합니다."
                onFileUpload={handleFileUpload}
                onSubmit={handleSubmit}
                uploadAreaText="파일을 드래그하거나 클릭하여 업로드"
                submitButtonText="제출하기"
              />
            </div>
        </>
    );
  };
  
  export default WorkSubmit;
  