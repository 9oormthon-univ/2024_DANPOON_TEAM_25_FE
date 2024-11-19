import { CheckCircle } from "lucide-react";
import { Card } from "./Card";
import { IconWrapper } from "./Icon";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

export const FeatureCheck: React.FC<{text: string} & BaseProps> = ({ text, className }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <CheckCircle className="w-5 h-5 text-green-500" />
      <span className="text-sm text-slate-600">{text}</span>
    </div>
  );
  
  export const FeatureCard: React.FC<{feature: Feature; index: number} & BaseProps> = ({ 
    feature, 
    index, 
    className 
  }) => (
    <Card className={`p-6 ${className}`}>
      <IconWrapper className="mb-4">{feature.icon}</IconWrapper>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-slate-600 text-sm">{feature.description}</p>
    </Card>
  );