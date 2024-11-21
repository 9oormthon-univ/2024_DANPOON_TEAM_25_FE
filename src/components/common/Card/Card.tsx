import { Button, StartButton } from '@/components/common/Button/Button';
import { CharacterData } from '@/constants/Card';

interface CharacterCardProps extends BaseProps {
  type: 'mentor' | 'mentee';
}

export const Card: React.FC<{ children: React.ReactNode } & BaseProps> = ({
  children,
  className,
}) => (
  <div
    className={`bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

export const CharacterCard: React.FC<CharacterCardProps> = ({ type }) => {
  const characterType = CharacterData[type];
  return (
    <div
      className={`flex flex-col items-center border border-slate-200 bg-white rounded-3xl justify-center hover:shadow-lg transition-all duration-300 px-10 py-11 max-w-[400px] max-h-[352px]`}
    >
      {characterType.icon}
      <span className="font-medium mt-2 text-xl text-[#181818]">
        {characterType.character}
      </span>
      <span className="text-[14px] my-6 text-[#181818]/70">
        {characterType.description}
      </span>
      <StartButton
        children="가입하기"
        hasIcon={false}
        className="py-[13px] px-10"
      />
    </div>
  );
};
