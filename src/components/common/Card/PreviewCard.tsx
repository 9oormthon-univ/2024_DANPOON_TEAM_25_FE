interface PreviewCardProps extends BaseProps {
  title: string;
  description: string;
  className?: string;
}

export const PreviewCard: React.FC<PreviewCardProps> = ({
  title,
  description,
  className,
}) => (
  <div
    className={`max-w-md flex flex-col justify-between shadow-lg shadow-gray-500/30 rounded-xl h-full bg-white ${className}`}
  >
    <div className="bg-gradient-to-b from-blue-700 to-blue-500 rounded-t-xl px-4 pt-6 pb-32 relative">
      <div className="absolute top-2 right-2 bg-white/20 rounded-full text-[10px] px-2 py-1  text-white font-medium">
        미리보기
      </div>
    </div>
    <div className="pt-4 px-4 pb-96 flex flex-col gap-4">
      <div>
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="border-t border-gray-200 w-full" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row -ml-1">
          <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white" />
          <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white -ml-1" />
          <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white -ml-1" />
        </div>
        <span className="text-sm font-medium text-blue-900">준비중</span>
      </div>
    </div>
  </div>
);
