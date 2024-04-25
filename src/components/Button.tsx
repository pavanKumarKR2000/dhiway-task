import { LucideIcon } from "lucide-react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className: string;
}

const Button = ({ children, icon: Icon, className }: ButtonProps) => {
  return (
    <button
      className={`p-2 rounded-md flex items-center transition-all ${className}`}
    >
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
