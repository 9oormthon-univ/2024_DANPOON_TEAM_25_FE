import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CommentCard from './CommentCard';

export default {
  title: 'Components/CommentCard',
  component: CommentCard,
} as Meta<typeof CommentCard>;

const Template: StoryFn<typeof CommentCard> = (args) => {
  const [comment, setComment] = useState(args.comment || '');
  
  return (
    <CommentCard
      {...args}
      comment={comment}
      onCommentChange={setComment}
      onSave={() => alert(`저장되었습니다!`)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  comment: '',
  placeholder: '코멘트를 입력해주세요...',
  maxLength: 200,
  saveButtonText: '저장하기',
};

export const Filled = Template.bind({});
Filled.args = {
  comment: '이미 작성된 코멘트입니다.',
  placeholder: '코멘트를 입력해주세요...',
  maxLength: 200,
  saveButtonText: '저장하기',
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  comment: '',
  placeholder: '새로운 코멘트를 입력하세요 (최대 150자)',
  maxLength: 150,
  saveButtonText: 'Save',
};

export const DisabledSaveButton = Template.bind({});
DisabledSaveButton.args = {
  comment: '',
  placeholder: '저장 버튼 비활성화 예시',
  maxLength: 200,
  saveButtonText: '저장하기',
  onSave: () => {}, 
};
