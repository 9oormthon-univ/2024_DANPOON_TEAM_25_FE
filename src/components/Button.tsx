import React from 'react';

interface ButtonProps {
  label: string; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  size?: 'small' | 'medium' | 'large'; 
  onClick?: () => void; 
  disabled?: boolean; 
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  icon,
}) => {
  const baseStyles = `inline-flex items-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition`;
  const variants = {
    primary: `bg-custom-blue text-white hover:bg-custom-navy focus:ring-custom-blueGray`,
    secondary: `bg-custom-sky text-custom-blue hover:bg-custom-blueLight focus:ring-custom-blueGray`,
    outline: `border border-custom-blue text-custom-blue hover:bg-custom-light focus:ring-custom-blueGray`,
  };
  const sizes = {
    small: `px-3 py-1 text-sm`,
    medium: `px-4 py-2 text-base`,
    large: `px-6 py-3 text-lg`,
  };
  const disabledStyles = `opacity-50 cursor-not-allowed`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? disabledStyles : ''
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
