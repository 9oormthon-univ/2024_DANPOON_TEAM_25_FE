import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center mt-24">
        <div className="flex flex-col items-center mb-8">
          <FiAlertCircle className="w-32 h-32 text-blue-200 -mt-8" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          요청하신 페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          페이지가 존재하지 않거나 이동되었을 수 있습니다.
          <br />
          입력하신 주소를 다시 한 번 확인해주세요.
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
          >
            이전 페이지
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors"
          >
            홈으로 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;