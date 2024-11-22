interface NewBadgeProps extends BaseProps {
  label?: string;
  description?: string;
}

export const NewBadge: React.FC<NewBadgeProps> = ({
  label = 'NEW',
  description = '더 나은 코딩 교육을 위한 새로운 방법',
  className,
}) => (
  <div
    className={`inline-flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-slate-100 to-blue-100 rounded-full mb-6 shadow-sm ${className}`}
  >
    <span className="text-slate-900 font-bold">{label}</span>
    <span className="text-sm font-medium text-slate-600">{description}</span>
  </div>
);
