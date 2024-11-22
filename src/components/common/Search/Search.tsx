import React from 'react';
import { IconType } from 'react-icons';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: IconType; 
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  icon: Icon,
  className = '',
  inputClassName = '',
  iconClassName = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <Icon
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClassName}`}
          size={20}
        />
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
