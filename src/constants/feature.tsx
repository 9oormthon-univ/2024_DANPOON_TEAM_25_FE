import { ReactNode } from 'react';
import { Code2, Users, Zap } from 'lucide-react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "경량화된 IDE",
    description: "최소한의 자원으로 모든 기기에서 실행되는 가벼운 개발 환경"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "편리한 접근성",
    description: "쉽게 이해하고 사용할 수 있는 직관적인 인터페이스"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "간편한 시작", 
    description: "별도의 설치나 설정 없이 브라우저에서 바로 시작하는 코딩"
  }
];