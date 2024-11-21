import { Button, ButtonProps } from '@/components/common/Button/Button';
import { ArrowRight } from 'lucide-react';

interface StartButtonProps extends ButtonProps {
  hasIcon: boolean;
}

export const StartButton: React.FC<StartButtonProps> = ({
  children,
  hasIcon,
  ...props
}) => (
  <Button
    {...props}
    className={`w-full sm:w-auto px-8 py-4 bg-[#354EAD] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 text-sm ${props.className}`}
  >
    <span className="flex items-center justify-center">
      {children || '지금 시작하기'}
      {hasIcon ? (
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" />
      ) : null}
    </span>
  </Button>
);
