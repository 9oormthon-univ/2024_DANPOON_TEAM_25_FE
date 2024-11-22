import React from 'react';
import { ProfileSectionProps } from '@/types/sidebar';
import { Avatar } from '../common/Avatar/Avatar';
import { NotificationBadge } from '../common/NotificationBadge/NotificationBadge';
import { Text } from '../common/Text/Text';

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  avatar,
  name,
  subtitle,
  showBadge = false,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative">
        <Avatar
          src={avatar?.src}
          alt={avatar?.alt}
          size={avatar?.size || 'md'}
        />
        {showBadge && (
          <NotificationBadge
            variant="danger"
            size="md"
            className="absolute -top-1 -right-1 ring-2 ring-white"
          />
        )}
      </div>
      <div className="flex flex-col">
        <Text variant="h3" color="white">
          {name}
        </Text>
        {subtitle && (
          <Text variant="small" color="secondary">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
};
