import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const studentNumber = Array.from({ length: 100 }, (_, i) => i + 1);

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('선택해주세요');

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (value: number) => {
    setSelectedValue(value.toString());
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center justify-between border border-gray-300 rounded-md w-full px-4 py-2"
      >
        <span className="text-gray-400 text-sm">{selectedValue}</span>
        <ChevronDown className="text-gray-400" />
      </button>

      <div
        className={`absolute z-10 mt-2 border rounded shadow-lg h-28 overflow-y-auto w-full bg-white transition-transform transform ${
          isOpen
            ? 'ease-out duration-100 opacity-100 scale-100'
            : 'ease-in duration-75 opacity-0 scale-95'
        }`}
      >
        {studentNumber.map((num) => (
          <a
            key={num}
            onClick={() => handleSelect(num)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            role="menuitem"
            tabIndex={-1}
          >
            {num}
          </a>
        ))}
      </div>
    </div>
  );
};
