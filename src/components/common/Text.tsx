export const GradientText: React.FC<
  { children: React.ReactNode } & BaseProps
> = ({ children, className }) => (
  <span
    className={`bg-gradient-to-r from-[#0A1E5B] to-[#6F96D1] bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

export const PlainText: React.FC<{ children: React.ReactNode } & BaseProps> = ({
  children,
  className,
}) => (
  <span className={`text-[#939393] font-medium text-sm ${className}`}>
    {children}
  </span>
);
