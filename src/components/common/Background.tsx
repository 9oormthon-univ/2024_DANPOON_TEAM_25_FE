export const BlurredBackground: React.FC<BaseProps> = ({ className }) => (
    <div className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-600/20 opacity-30 blur-3xl -z-10 animate-pulse duration-3000 ${className}`} />
  );
  
  export const AnimatedBackground: React.FC<BaseProps> = ({ className }) => (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[150px] animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute -top-60 right-1/3 w-[800px] h-[800px] bg-indigo-400/10 rounded-full blur-[150px] animate-[float_15s_ease-in-out_infinite]" />
      <div className="absolute -bottom-20 left-1/4 w-[900px] h-[900px] bg-slate-800/5 rounded-full blur-[150px] animate-[float_18s_ease-in-out_infinite]" />
    </div>
  );