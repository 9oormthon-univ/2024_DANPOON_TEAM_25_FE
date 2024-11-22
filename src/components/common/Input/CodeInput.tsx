import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

export interface CodeInputProps {
  length?: number;
  onChange: (code: string) => void; 
  layout?: 'horizontal' | 'vertical'; 
}

const CodeInput: React.FC<CodeInputProps> = ({
  length = 6,
  onChange,
  layout = 'horizontal', 
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value.toUpperCase();
      setCode(newCode);
      onChange(newCode.join(''));

      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className={`${
        layout === 'horizontal' ? 'flex gap-4 justify-center' : 'grid gap-3 grid-cols-1'
      }`}
    >
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          className="w-24 h-24 text-center text-lg font-bold bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInput(index, e.target.value)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(index, e)
          }
        />
      ))}
    </div>
  );
};

export default CodeInput;
