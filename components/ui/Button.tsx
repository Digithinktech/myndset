
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-pop-purple text-pop-cream hover:bg-pop-pink hover:shadow-lg",
    secondary: "bg-pop-yellow text-pop-purple hover:bg-pop-orange hover:text-white hover:shadow-lg",
    dark: "bg-pop-purple text-white hover:bg-gray-800",
    outline: "border-2 border-pop-purple text-pop-purple hover:bg-pop-purple hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

export default Button;
