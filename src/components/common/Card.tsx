export const Card: React.FC<{children: React.ReactNode} & BaseProps> = ({ children, className }) => (
    <div className={`bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 ${className}`}>
      {children}
    </div>
);