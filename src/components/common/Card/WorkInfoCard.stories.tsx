import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WorkInfoCard, { WorkInfoCardProps } from './WorkInfoCard';
import { Book } from 'lucide-react';

export default {
  title: 'Components/WorkInfoCard',
  component: WorkInfoCard,
} as Meta<typeof WorkInfoCard>;

const Template: StoryFn<WorkInfoCardProps> = (args) => <WorkInfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '워크 상세 제목',
  remainingDays: 5,
  dueDate: '2024-12-01',
  status: '진행 중',
  description: `
# 워크 설명
이 워크는 **중요한 과제**를 포함합니다.

- 항목 1
- 항목 2
- 항목 3

## 세부사항
[링크](https://example.com)

### 참고 자료
- [GitHub](https://github.com)
- [Storybook](https://storybook.js.org)

`,
  icon: <Book size={24} className="text-blue-800" />,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: '설명이 긴 워크',
  remainingDays: 10,
  dueDate: '2024-12-15',
  status: '진행 중',
  description: `
# 긴 워크 설명

이 워크는 다음과 같은 작업을 포함합니다:

1. 작업 1: 자세한 내용은 아래를 참고.
2. 작업 2: 주요 세부사항.
3. 작업 3: 고급 작업.

## 작업 세부사항
- **작업 1**: 작업 1의 상세 정보입니다. 많은 텍스트와 여러 줄로 구성되어 있습니다.
- **작업 2**: 더 많은 세부사항이 여기에 추가됩니다.

> 인용문: "이것은 워크 설명의 예제입니다."

- 항목 1
- 항목 2
- 항목 3
- 항목 4

마지막으로, 추가 정보는 [Storybook Docs](https://storybook.js.org/docs)를 참고하세요.
`,
};
