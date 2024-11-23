import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Book, PlusCircle, Settings } from 'lucide-react';

export const StudentSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('course');
  const menuItems = [
    { id: 'course', text: '내 수업', icon: Book, route: '/student/courses' },
    {
      id: 'register',
      text: '수업 등록',
      icon: PlusCircle,
      route: '/student/courses/register',
    },
  ];

  return (
    <Sidebar
      profile={{
        name: '학생 이름',
        avatar: {
          src: 'https://via.placeholder.com/150',
          alt: '학생 프로필 이미지',
        },
        subtitle: '환영합니다',
      }}
      menuItems={menuItems}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      onMenuItemClick={(id) => console.log(`Student clicked ${id}`)}
    />
  );
};
