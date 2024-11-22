export const worksData = [
    {
      id: 1,
      title: '1차시: 파이썬 기초 문법',
      dueDate: '2024-03-20',
      remainingDays: 2,
      status: 'pending' as const,
    },
    {
      id: 2,
      title: '2차시: 조건문과 반복문',
      dueDate: '2024-03-18',
      remainingDays: 0,
      status: 'submitted' as const,
    },
    {
      id: 3,
      title: '3차시: 함수와 모듈',
      dueDate: '2024-03-25',
      remainingDays: 7,
      status: 'pending' as const,
    },
    {
      id: 4,
      title: '4차시: 클래스와 객체',
      dueDate: '2024-03-15',
      remainingDays: -3,
      status: 'late' as const,
    },
  ];
  