import React from 'react';

export interface CommentCardProps {
  comment: string;
  onCommentChange: (value: string) => void;
  onSave: () => void;
  placeholder?: string;
  maxLength?: number;
  saveButtonText?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  onCommentChange,
  onSave,
  placeholder = '코멘트를 입력해주세요...',
  maxLength = 200,
  saveButtonText = '저장하기',
}) => {
  return (
    <div className="p-6 h-full bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">코멘트</h3>
      <div className="flex flex-col h-[calc(100%-3rem)]">
        <textarea
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className="flex-1 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none mb-4"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {comment.length}/{maxLength}자
          </span>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
          >
            {saveButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
