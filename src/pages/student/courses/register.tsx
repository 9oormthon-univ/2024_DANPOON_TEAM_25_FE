import { Button } from "@/components/common/Button/Button";
import { StartButton } from "@/components/common/Button/StartButton";
import { Card } from "@/components/common/Card/Card";
import CodeInput from "@/components/common/Input/CodeInput";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";
import { StudentSidebar } from "@/components/sidebar/StudentSidebar";
import { useState } from "react";

const CourseRegister: React.FC = () => {
  const [code, setCode] = useState("");

  return (
    <>
        <PageHeader
          pageTitle="COURSE 등록하기"
          role="student"
          status="in-progress"
        />
        <Card className="p-16 m-36 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">수업 코드 입력</h2>
          <p className="text-lg text-gray-800 mb-8">
            선생님으로부터 받은 6자리 코드를 입력해주세요
          </p>
          <div className="mb-8">
            <CodeInput
              length={6}
              onChange={(value) => setCode(value)}
            />
          </div>
          <StartButton hasIcon={false}>등록하기</StartButton>
        </Card>
    </>
  );
};

export default CourseRegister;
