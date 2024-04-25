import { LucideIcon } from "lucide-react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  background: string;
}

const Button = ({ children, icon: Icon, background }: ButtonProps) => {
  return (
    <button className={`p-2 rounded-md flex items-center ${background}`}>
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
