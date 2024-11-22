import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

export interface CodeInputProps {
  length?: number; 
  onChange: (code: string) => void; 
}

const CodeInput: React.FC<CodeInputProps> = ({ length = 6, onChange }) => {
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
    <div className={`grid grid-cols-${length} gap-3 sm:gap-4 md:gap-6`}>
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el; 
          }}
          className="aspect-square w-full text-center text-3xl sm:text-4xl md:text-5xl font-bold 
            bg-gray-50/50 border-2 border-gray-200 rounded-xl
            focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 
            outline-none uppercase transition-all"
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
