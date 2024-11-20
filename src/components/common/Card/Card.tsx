import { Button, StartButton } from '@/components/common/Button/Button';

interface CharacterCardProps extends BaseProps {
  type: 'mentor' | 'mentee';
  character: string;
  description: string;
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

export const CharacterCard: React.FC<CharacterCardProps> = ({
  type,
  character,
  description,
}) => (
  <div
    className={`flex flex-col items-center rounded-3xl justify-center bg-[#ECF0F4] px-10 py-11 max-w-[400px] max-h-[352px]`}
  >
    {type === 'mentor' ? (
      <img src="/mentor.svg" alt="Mentor Icon" />
    ) : (
      <img src="/mentee.svg" alt="Mentee Icon" />
    )}
    <span className="font-medium mt-1 text-2xl text-[#181818]">
      {character}
    </span>
    <span className="text-[14px] my-6 text-[#181818]/70">{description}</span>
    <StartButton children="가입하기" hasIcon={false} />
  </div>
);
