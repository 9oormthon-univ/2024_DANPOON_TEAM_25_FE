import { ButtonProps } from '@/components/common/Button/Button';
import { Bell } from 'lucide-react';

interface NotificationButtonProps extends ButtonProps {
  isNew?: boolean;
}

export const NotificationButton = ({
  isNew = false,
}: NotificationButtonProps) => {
  return (
    <div className="relative inline-block">
      <Bell className="w-4 h-4 text-gray-600" />
      {isNew ? (
        <span className="absolute bottom-5 left-4 w-2 h-2 bg-red-500 rounded-full border border-white" />
      ) : null}
    </div>
  );
};
