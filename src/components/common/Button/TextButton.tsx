import { Button, ButtonProps } from '@/components/common/Button/Button';

export const TextButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    {...props}
    className={`text-black hover:underline cursor-pointer text-xs ${props.className}`}
  >
    {children}
  </Button>
);
