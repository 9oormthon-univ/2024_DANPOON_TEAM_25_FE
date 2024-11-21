export interface ButtonProps extends BaseProps {
  children?: React.ReactNode;
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
