import { Calendar } from 'lucide-react';

export const SubmissionStatus = () => {
  return (
    <div className="flex justify-between space-x-4 bg-white items-center bg-gray-30 p-4 rounded-lg shadow-md">
      <div
        className={`flex-1 text-start border-r border-gray-100 last:border-r-0`}
      >
        <div className="flex flex-row items-center space-x-2">
          <Calendar size={14} className="text-gray-400" />
          <p className="text-[10px] text-gray-500">제출기한</p>
        </div>
        <p className={`text-base font-bold text-gray-800`}>2024.03.20 23:59</p>
      </div>

      <div
        className={`flex-1 text-start border-r border-gray-100 last:border-r-0`}
      >
        <p className="text-[10px] text-gray-500 mb-1">총 학생</p>
        <p className={`text-base font-bold text-gray-800`}>32명</p>
      </div>

      <div
        className={`flex-1 text-start border-r border-gray-100 last:border-r-0`}
      >
        <p className="text-[10px] text-gray-500 mb-1">제출</p>
        <p className={`text-base font-bold text-emerald-500`}>25명</p>
      </div>

      <div
        className={`flex-1 text-start border-r border-gray-100 last:border-r-0`}
      >
        <p className="text-[10px] text-gray-500 mb-1">미제출</p>
        <p className={`text-base font-bold text-amber-500`}>5명</p>
      </div>

      <div className={`flex-1 text-start`}>
        <p className="text-[10px] text-gray-500 mb-1">기한 초과</p>
        <p className={`text-base font-bold text-red-500`}>2명</p>
      </div>
    </div>
  );
};
