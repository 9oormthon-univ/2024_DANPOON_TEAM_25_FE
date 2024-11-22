interface RoleBadgeProps extends BaseProps {
  role: string;
}

export const RoleBadge = ({ role }: RoleBadgeProps) => (
  <div className="inline-block px-3 py-2 bg-blue-800 text-white rounded-lg font-medium text-sm">
    {role}
  </div>
);
