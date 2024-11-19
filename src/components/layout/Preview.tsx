import { BlurredBackground } from "../common/Background";
import { Card } from "../common/Card";

interface EditorHeaderProps extends BaseProps {
    filename?: string;
  }

  interface EditorLineProps extends BaseProps {
    lineNumber: number;
    width: string;
  }

  interface EditorContentProps extends BaseProps {
    lines?: Array<{ lineNumber: number; width: string }>;
  }
  
  export const EditorHeader: React.FC<EditorHeaderProps> = ({ filename = "main.py", className }) => (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <div className="flex items-center space-x-2">
        {['bg-rose-500', 'bg-amber-500', 'bg-emerald-500'].map((color, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${color}`} />
        ))}
      </div>
      <div className="px-3 py-1 bg-white/60 rounded-md text-xs text-slate-600 font-medium">
        {filename}
      </div>
    </div>
  );

  
  export const EditorLine: React.FC<EditorLineProps> = ({ lineNumber, width, className }) => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-8 text-right text-xs text-slate-400">{lineNumber}</div>
      <div className={`${width} h-6 bg-gradient-to-r from-slate-200 to-slate-100 rounded-md`} />
    </div>
  );
  
  export const EditorContent: React.FC<EditorContentProps> = ({ 
    lines = [
      { lineNumber: 1, width: "w-3/4" },
      { lineNumber: 2, width: "w-1/2" },
      { lineNumber: 3, width: "w-2/3" },
      { lineNumber: 4, width: "w-3/5" }
    ],
    className
  }) => (
    <div className={`space-y-3 ${className}`}>
      {lines.map((line) => (
        <EditorLine key={line.lineNumber} {...line} />
      ))}
    </div>
  );
  
  export const IDEPreview: React.FC<BaseProps> = ({ className }) => (
    <div className={`relative hidden lg:block ${className}`}>
      <Card className="relative z-10 backdrop-blur-xl p-8 transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="h-[350px] bg-slate-50 rounded-xl p-6 overflow-hidden">
          <EditorHeader />
          <EditorContent />
          <div className="mt-4 w-2 h-5 bg-[#354EAD] animate-pulse" />
        </div>
      </Card>
      <BlurredBackground />
    </div>
  );