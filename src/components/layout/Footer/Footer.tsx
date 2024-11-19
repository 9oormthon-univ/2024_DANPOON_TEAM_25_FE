import { TextButton } from '@/components/common/Button/Button';
import { PlainText } from '@/components/common/Text';

export const Footer = () => {
  return (
    <div className="w-full sm:w-auto p-4 bg-white flex flex-col items-start gap-y-5">
      <div className="flex flex-row gap-x-3 items-center justify-center">
        <TextButton children="개인정보처리방침" />
        <TextButton children="이용약관" />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-row gap-x-5 items-center justify-center">
          <PlainText children="팀 FlakeIDE" />
          <div className="h-[15px] border-r border-gray-300" />
          <PlainText children="이메일 contact@flakeide.com" />
        </div>
        <PlainText children="© 2024 FlakeIDE. All Rights Reserved." />
      </div>
    </div>
  );
};
