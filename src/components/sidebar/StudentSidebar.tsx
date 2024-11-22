import React from 'react';
import { Sidebar } from './Sidebar';
import { Book, PlusCircle, Settings } from 'lucide-react';

export const StudentSidebar: React.FC = () => {
  const menuItems = [
    { id: 'course', text: '내 수업', icon: Book },
    { id: 'register', text: '수업 등록', icon: PlusCircle },
    { id: 'setting', text: '프로필', icon: Settings },
  ];

  return (
    <Sidebar
      profile={{
        name: '학생 이름',
        avatar: {
          src: 'https://via.placeholder.com/150',
          alt: '학생 프로필 이미지'
        },
        subtitle: '환영합니다'
      }}
      menuItems={menuItems}
      onMenuItemClick={(id) => console.log(`Student clicked ${id}`)}
    />
  );
};
