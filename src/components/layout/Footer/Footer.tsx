import { TextButton } from '@/components/common/Button/Button';
import { PlainText } from '@/components/common/Text';
import { useRouter } from 'next/router';

export const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full sm:w-auto py-6 border-t border-slate-200 bg-white/80 flex flex-col items-start gap-y-5">
      <div className="flex flex-row gap-x-3 items-center justify-center">
        <TextButton
          children="개인정보처리방침"
          onClick={() => router.push('/privacy')}
        />
        <TextButton children="이용약관" onClick={() => router.push('/terms')} />
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
