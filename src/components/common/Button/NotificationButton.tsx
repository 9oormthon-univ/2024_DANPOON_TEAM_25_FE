import { ButtonProps } from '@/components/common/Button/Button';
import { Bell } from 'lucide-react';

interface NotificationButtonProps extends ButtonProps {
  isNew?: boolean;
}

export const NotificationButton = ({
  isNew = false,
}: NotificationButtonProps) => {
  return (
    <button className="relative inline-block p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors">
      <Bell className="w-5 h-5 text-gray-600" />
      {isNew ? (
        <span className="absolute bottom-5 left-4 w-2 h-2 bg-red-500 rounded-full border border-white" />
      ) : null}
    </button>
  );
};
