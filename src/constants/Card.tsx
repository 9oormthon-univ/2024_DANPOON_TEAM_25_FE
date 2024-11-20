export const CharacterData: Record<
  'mentor' | 'mentee',
  { icon: JSX.Element; character: string; description: string }
> = {
  mentor: {
    icon: <img src="/mentor.svg" alt="Mentor Icon" />,
    character: '눈솔',
    description: '‘멘토’ 역할을 뜻하며, 코딩 학습을 이끌어나갑니다.',
  },
  mentee: {
    icon: <img src="/mentee.svg" alt="Mentee Icon" />,
    character: '눈송이',
    description: '‘멘티’ 역할을 뜻하며, 함께 코딩을 배워나갑니다.',
  },
};
