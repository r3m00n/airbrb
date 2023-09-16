'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = (props: ButtonProps) => {
  const { label, onClick, disabled, outline, small, icon: Icon } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
      ${
        outline
          ? 'bg-white border-black text-black'
          : 'bg-rose-500 border-rose-500 text-white'
      }
      ${
        small
          ? 'py-1 text-sm font-light border'
          : 'py-3 text-base font-semibold border-2'
      }`}
    >
      {Icon && <Icon className="absolute top-3 left-4" size={24} />}
      {label}
    </button>
  );
};

export default Button;
