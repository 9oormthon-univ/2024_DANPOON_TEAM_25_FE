import React from 'react';

type Size = 'small' | 'medium' | 'large';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  inputSize?: Extract<Size, 'medium' | 'large'>;
  className?: string;
}

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    { label = '', inputSize = 'medium', className = '', ...attributes },
    ref,
  ) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <span className="text-sm font-semibold">{label}</span>}
      <div className="border border-gray-300 rounded-xl bg-white">
        {inputSize === 'medium' ? (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className="py-2 px-3 rounded-xl w-full focus:outline-none placeholder:text-sm"
            {...attributes}
          />
        ) : (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            maxLength={1000}
            rows={10}
            cols={5}
            className="py-2 px-3 rounded-xl w-full outline-none resize-none focus:outline-none placeholder:text-sm"
            {...attributes}
          />
        )}
      </div>
    </div>
  ),
);