import CommentCard from "@/components/common/Card/CommentCard";
import FileUploadCard from "@/components/common/Card/FileUploadCard";
import WorkInfoCard from "@/components/common/Card/WorkInfoCard";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";
import { useState } from "react";

const WorkSubmit = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);
  const [comment, setComment] = useState("");

  const workDescription = `
### 파이썬 기초 문법 학습

이번 차시에서는 파이썬의 기본적인 문법을 학습합니다.

### 학습 목표
1. 파이썬의 **기본 데이터 타입** 이해하기
2. 변수와 연산자 활용하기
3. 조건문과 반복문 작성하기

### 과제
1. 기본 문법을 활용한 간단한 프로그램 작성하기
2. 다음 문제들을 해결하는 코드 작성하기:
   - 1부터 100까지의 합 구하기
   - 구구단 출력하기
`;

  const handleFileUpload = (files: FileList | null) => {
    setUploadedFiles(files);
    console.log("Uploaded files:", files);
  };

  const handleSubmit = () => {
    if (uploadedFiles) {
      alert(`${uploadedFiles.length}개의 파일이 제출되었습니다.`);
    } else {
      alert("제출할 파일이 없습니다.");
    }
  };

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  const handleSave = () => {
    alert("코멘트가 저장되었습니다.");
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
          description={workDescription} 
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
