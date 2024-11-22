import { RoleBadge } from '@/components/common/Badge/RoleBadge';
import { StatusBadge } from '@/components/common/Badge/StatusBadge';
import { BackButton } from '@/components/common/Button/BackButton';
import { EditButton } from '@/components/common/Button/EditButton';
import { InviteButton } from '@/components/common/Button/InviteButton';
import { NotificationButton } from '@/components/common/Button/NotificationButton';

interface PageHeaderProps extends BaseProps {
  hasBackButton?: boolean;
  hasSubtitle?: boolean;
  isDetailPage?: boolean;
  status?: 'pending' | 'in-progress' | 'completed';
  pageTitle: string;
  subtitle?: string;
  role: 'teacher' | 'student';
}

const statusStyles = {
  pending: {
    textColor: 'text-gray-500',
    bgColor: 'bg-gray-100',
    label: '진행전',
  },
  'in-progress': {
    textColor: 'text-blue-800',
    bgColor: 'bg-blue-100',
    label: '진행중',
  },
  completed: {
    textColor: 'text-green-800',
    bgColor: 'bg-green-100',
    label: '진행완료',
  },
};

export const PageHeader = ({
  hasBackButton,
  hasSubtitle,
  isDetailPage,
  pageTitle,
  subtitle,
  role,
  status,
}: PageHeaderProps) => {
  const statusStyle = status ? statusStyles[status] : null;

  return (
    <div className="w-full sm:w-auto flex flex-row justify-between">
      <div className="flex flex-col space-y-2 justify-start">
        <div className="space-x-5 flex flex-row items-center">
          {hasBackButton ? <BackButton /> : null}

          <h3 className="text-lg text-black font-bold">{pageTitle}</h3>
          {isDetailPage ? (
            role === 'teacher' ? (
              <EditButton />
            ) : role === 'student' && statusStyle ? (
              <StatusBadge
                label={statusStyle.label}
                className={`${statusStyle.textColor} ${statusStyle.bgColor}`}
              />
            ) : null
          ) : null}
        </div>
        {hasSubtitle ? (
          <span className="ml-9 text-sm font-semibold text-gray-500">
            {subtitle}
          </span>
        ) : null}
      </div>

      <div className="flex flex-row items-center space-x-4">
        {isDetailPage && role === 'teacher' ? <InviteButton /> : null}
        <NotificationButton />
        <RoleBadge role={role === 'teacher' ? '눈솔' : '눈송이'} />
      </div>
    </div>
  );
};
