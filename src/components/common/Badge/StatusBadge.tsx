interface StatusBadgeProps extends BaseProps {
  label: string;
  className: string;
}

export const StatusBadge = ({ label, className }: StatusBadgeProps) => {
  return (
    <div
      className={`inline-block rounded-full px-2 py-0.5 font-medium text-xs ${className}`}
    >
      {label}
    </div>
  );
};
