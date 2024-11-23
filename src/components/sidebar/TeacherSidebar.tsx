import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/router';
import { Book, BookOpenText, Briefcase, PlusCircle } from 'lucide-react';

export const TeacherSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('course');
  const router = useRouter();

  const isCoursePage =
    router.pathname.startsWith('/teacher/courses/') &&
    !router.pathname.startsWith('/teacher/courses/create');

  const menuItems = [
    { id: 'course', text: '내 수업', icon: Book, route: '/teacher/courses' },
    {
      id: 'register',
      text: '수업 등록',
      icon: PlusCircle,
      route: '/teacher/courses/create',
    },
    ...(isCoursePage
      ? [
          {
            id: 'work-list',
            text: '워크 목록',
            icon: Briefcase,
            route: '/teacher/courses/:courseId/works',
          },
          {
            id: 'training-list',
            text: '트레이닝 목록',
            icon: BookOpenText,
            route: '/teacher/courses/:courseId/trainings',
          },
        ]
      : []),
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
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      onMenuItemClick={(id) => console.log(`Teacher clicked ${id}`)}
    />
  );
};
