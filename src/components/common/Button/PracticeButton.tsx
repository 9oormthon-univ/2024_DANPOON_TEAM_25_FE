import React from 'react';
import { Code2, ChevronRight } from 'lucide-react';

export interface PracticeButtonProps {
  url: string;
}

const PracticeButton: React.FC<PracticeButtonProps> = ({ url }) => {
  return (
    <div className="mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <Code2 size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">
                IDE에서 실습하기
              </h2>
              <p className="text-blue-100">바로 코드를 작성하고 실행해보세요</p>
            </div>
          </div>
          <button
            onClick={() => window.open(url, '_blank')}
            className="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2"
          >
            실습 시작하기
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeButton;
