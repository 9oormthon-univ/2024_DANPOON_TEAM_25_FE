import { ArrowRight } from 'lucide-react';

interface ButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
}) => (
  <button
    onClick={onClick}
    className={`group flex items-center justify-center transition-all duration-300 font-semibold ${className}`}
  >
    {children}
  </button>
);

export const StartButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    {...props}
    className={`w-full sm:w-auto px-8 py-4 bg-[#354EAD] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 text-sm ${props.className}`}
  >
    <span className="flex items-center justify-center">
      {children || '지금 시작하기'}
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" />
    </span>
  </Button>
);

export const TextButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    {...props}
    className={`text-black hover:underline cursor-pointer text-xs ${props.className}`}
  >
    {children}
  </Button>
);
