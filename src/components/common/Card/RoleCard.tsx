import { StartButton } from '@/components/common/Button/StartButton';
import { RoleData } from '@/constants/Card';

interface RoleCardProps extends BaseProps {
  role: 'teacher' | 'student';
}

export const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <div
      className={`flex flex-col items-center border border-slate-200 bg-white rounded-3xl justify-center hover:shadow-lg transition-all duration-300 px-10 py-11 max-w-[400px] max-h-[352px]`}
    >
      {RoleData[role].icon}
      <span className="font-medium mt-2 text-xl text-[#181818]">
        {RoleData[role].character}
      </span>
      <span className="text-[14px] my-6 text-[#181818]/70">
        {RoleData[role].description}
      </span>
      <StartButton
        children="가입하기"
        hasIcon={false}
        className="py-[13px] px-10"
      />
    </div>
  );
};
