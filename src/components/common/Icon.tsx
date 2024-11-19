export const IconWrapper: React.FC<{children: React.ReactNode; color?: string} & BaseProps> = ({ 
    children, 
    color = "bg-blue-50",
    className 
  }) => (
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-[#354EAD] ${className}`}>
      {children}
    </div>
);