import { ArrowRight } from "lucide-react";

interface ButtonProps extends BaseProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => (
    <button 
      onClick={onClick}
      className={`group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#354EAD] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold text-sm ${className}`}
    >
      {children}
    </button>
  );
  
  export const StartButton: React.FC<ButtonProps> = (props) => (
    <Button {...props}>
      <span className="flex items-center justify-center">
        {props.children || "지금 시작하기"}
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" />
      </span>
    </Button>
  );