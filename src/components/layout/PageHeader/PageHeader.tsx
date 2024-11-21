import { RoleBadge } from '@/components/common/Badge/RoleBadge';
import { BackButton } from '@/components/common/Button/BackButton';
import { EditButton } from '@/components/common/Button/EditButton';
import { InviteButton } from '@/components/common/Button/InviteButton';
import { NotificationButton } from '@/components/common/Button/NotificationButton';

interface PageHeaderProps extends BaseProps {
  hasBackButton?: boolean;
  hasSubtitle?: boolean;
  isDetailPage?: boolean;
  pageTitle: string;
  subtitle?: string;
  role: 'teacher' | 'student';
}

export const PageHeader = ({
  hasBackButton,
  hasSubtitle,
  isDetailPage,
  pageTitle,
  subtitle,
  role,
}: PageHeaderProps) => {
  return (
    <div className="w-full sm:w-auto flex flex-row justify-between">
      <div className="flex flex-col space-y-2 justify-start">
        <div className="space-x-5 flex flex-row items-center">
          {hasBackButton ? <BackButton /> : null}

          <h3 className="text-lg text-gray-900 font-bold">{pageTitle}</h3>
          {isDetailPage ? <EditButton /> : null}
        </div>
        {hasSubtitle ? (
          <span className="ml-9 text-sm font-semibold text-gray-600">
            {subtitle}
          </span>
        ) : null}
      </div>

      <div className="flex flex-row  items-center space-x-4">
        {isDetailPage ? <InviteButton /> : null}
        <NotificationButton />
        <RoleBadge role={role === 'teacher' ? '눈솔' : '눈송이'} />
      </div>
    </div>
  );
};
