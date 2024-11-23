import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadCardProps {
  title?: string;
  submitGuide: string;
  onFileUpload: (files: FileList | null) => void;
  onSubmit: () => void;
  uploadAreaText?: string;
  submitButtonText?: string;
}

const FileUploadCard: React.FC<FileUploadCardProps> = ({
  title = '파일 업로드',
  submitGuide,
  onFileUpload,
  onSubmit,
  uploadAreaText = '파일을 드래그하거나 클릭하여 업로드',
  submitButtonText = '제출하기',
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFileUpload(event.target.files);
  };

  return (
    <div className="p-6 h-full bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-col h-[calc(100%-3rem)]">
        <label className="flex-1 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 transition-colors mb-4">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <Upload className="mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-500">{uploadAreaText}</p>
          <p className="text-xs text-gray-400 mt-1">{submitGuide}</p>
        </label>
        <button
          onClick={onSubmit}
          className="w-full py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
        >
          {submitButtonText}
        </button>
      </div>
    </div>
  );
};

export default FileUploadCard;
