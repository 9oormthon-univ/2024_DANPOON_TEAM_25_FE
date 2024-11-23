import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FileUploadCard from './FileUploadCard';

export default {
  title: 'Components/FileUploadCard',
  component: FileUploadCard,
} as Meta<typeof FileUploadCard>;

const Template: StoryFn<typeof FileUploadCard> = (args) => {
  const handleFileUpload = (files: FileList | null) => {
    console.log('Uploaded files:', files);
  };

  const handleSubmit = () => {
    alert('제출이 완료되었습니다.');
  };

  return <FileUploadCard {...args} onFileUpload={handleFileUpload} onSubmit={handleSubmit} />;
};

export const Default = Template.bind({});
Default.args = {
  title: '과제 제출',
  submitGuide: '10MB 이하의 파일만 업로드 가능합니다.',
  uploadAreaText: '파일을 드래그하거나 클릭하여 업로드',
  submitButtonText: '제출하기',
};

export const CustomGuide = Template.bind({});
CustomGuide.args = {
  title: '파일 첨부',
  submitGuide: 'PDF, PNG, JPG 형식만 지원됩니다.',
  uploadAreaText: '파일을 업로드하세요.',
  submitButtonText: '업로드 완료',
};

export const LongGuideText = Template.bind({});
LongGuideText.args = {
  title: '파일 업로드',
  submitGuide: '여러 파일을 선택할 수 있으며, 각 파일은 최대 10MB를 초과할 수 없습니다. 업로드 가능한 파일 형식: PDF, DOCX, PNG, JPG.',
  uploadAreaText: '여기에 파일을 드래그하거나 클릭하여 선택하세요.',
  submitButtonText: '제출',
};
