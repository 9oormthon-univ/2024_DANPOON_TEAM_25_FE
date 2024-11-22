import React from 'react';
import { Sidebar } from './Sidebar';
import { Book, Briefcase, PlusCircle, Settings } from 'lucide-react';

export const TeacherSidebar: React.FC = () => {
  const menuItems = [
    { id: 'course', text: '내 수업', icon: Book },
    { id: 'register', text: '수업 등록', icon: PlusCircle },
    { id: 'work-list', text: '워크 / 트레이닝 목록', icon: Briefcase },
    { id: 'setting', text: '프로필', icon: Settings },
  ];

  return (
    <Sidebar
      profile={{
        name: '선생님 이름',
        avatar: {
          src: 'https://via.placeholder.com/150',
          alt: '선생님 프로필 이미지',
        },
        subtitle: '환영합니다',
      }}
      menuItems={menuItems}
      onMenuItemClick={(id) => console.log(`Teacher clicked ${id}`)}
    />
  );
};
