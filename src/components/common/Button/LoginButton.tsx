import { Button, ButtonProps } from '@/components/common/Button/Button';
import { Mail } from 'lucide-react';

interface LoginButtonProps extends ButtonProps {
  type: 'kakao' | 'naver' | 'google' | 'email';
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  type,
  ...props
}) => {
  const IconMapping: Record<string, JSX.Element> = {
    kakao: <img src="/kakao.svg" alt="Kakao Icon" />,
    naver: <img src="/naver.svg" alt="Naver Icon" />,
    google: <img src="/google.svg" alt="Naver Icon" />,
    email: <Mail className="w-4 h-4" />,
  };

  return (
    <Button
      {...props}
      className={`text-black py-3 gap-x-2 max-w-[325px] w-full px-10 sm:w-auto rounded-md cursor-pointer text-sm  ${props.className}`}
    >
      {IconMapping[type] || null}
      {children}
    </Button>
  );
};
