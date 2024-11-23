import React from 'react';

type Size = 'small' | 'medium' | 'large';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  inputSize?: Extract<Size, 'small' | 'medium' | 'large'>;
  className?: string;
  content: string;
  setContent: (value: string) => void;
}

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      label = '',
      inputSize = 'small',
      className = '',
      content,
      setContent,
      ...attributes
    },
    ref,
  ) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <span className="text-sm font-semibold">{label}</span>}
      <div className="border border-gray-300 rounded-xl bg-white">
        {inputSize === 'small' && (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="py-2 px-3 rounded-xl w-full focus:outline-none placeholder:text-sm"
            {...attributes}
          />
        )}
        {inputSize === 'medium' && (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={500}
            rows={3}
            cols={10}
            className="py-2 px-3 rounded-xl w-full outline-none resize-none focus:outline-none placeholder:text-base"
            {...attributes}
          />
        )}
        {inputSize === 'large' && (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={1000}
            rows={10}
            cols={20}
            className="py-3 px-4 rounded-xl w-full outline-none resize-none focus:outline-none placeholder:text-lg"
            {...attributes}
          />
        )}
      </div>
    </div>
  ),
);
