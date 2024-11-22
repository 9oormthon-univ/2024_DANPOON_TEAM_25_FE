import { Button, ButtonProps } from '@/components/common/Button/Button';
import { Copy } from 'lucide-react';

export const CopyButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const handleCopy = () => {
    const copyCode = document.getElementById('copyTxt');

    if (
      copyCode instanceof HTMLInputElement ||
      copyCode instanceof HTMLTextAreaElement
    ) {
      copyCode.select();
      navigator.clipboard.writeText(copyCode.value);
      alert('복사되었습니다!');
    }
  };

  return (
    <Button
      className="flex items-center px-5 py-3 text-lg gap-x-3 font-medium text-blue-50 bg-blue-800 rounded-lg cursor-pointer"
      onClick={handleCopy}
    >
      <Copy className="w-6 h-6 text-blue-50" />
      코드 복사하기
    </Button>
  );
};
