import React, { forwardRef } from 'react';

interface DeadlineInputProps {
  deadline: string;
  setDeadline: (value: string) => void;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

export const DeadlineInput: React.FC<DeadlineInputProps> = forwardRef(
  ({ deadline, setDeadline, attributes = {}, className = '' }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <span className="text-sm font-semibold">마감기한</span>
        <div className="border border-gray-300 rounded-xl bg-white">
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="py-2 px-3 rounded-xl w-full focus:outline-none placeholder:text-sm"
            {...attributes}
          />
        </div>
      </div>
    );
  },
);

export default DeadlineInput;
