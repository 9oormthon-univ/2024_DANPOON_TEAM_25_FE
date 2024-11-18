import React from 'react';

interface InputProps {
  label?: string; 
  placeholder?: string; 
  type?: 'text' | 'email' | 'password' | 'number'; 
  icon?: React.ReactNode; 
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  errorMessage?: string; 
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  type = 'text',
  icon,
  value,
  onChange,
  errorMessage,
  disabled = false,
}) => {
  const baseStyles = `w-full px-4 py-2 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-offset-2 transition`;
  const inputStyles = `border-[#BDBDBD] focus:ring-custom-blue disabled:opacity-50 disabled:cursor-not-allowed`;
  const errorStyles = `border-red-500 focus:ring-red-500`;

  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      {label && <label className="text-sm font-medium text-custom-navy">{label}</label>}
      <div className="relative">
        {icon && <span className="absolute inset-y-0 left-3 flex items-center">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${baseStyles} ${errorMessage ? errorStyles : inputStyles} ${
            icon ? 'pl-10' : ''
          }`}
        />
      </div>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
