interface RoleBadgeProps extends BaseProps {
  role: '눈솔' | '눈송이';
}

export const RoleBadge = ({ role }: RoleBadgeProps) => (
  <div
    className={`inline-block px-3 py-2 ${
      role === '눈솔' ? 'bg-blue-800' : 'bg-student-primary'
    }  text-white rounded-lg font-medium text-sm`}
  >
    {role}
  </div>
);
