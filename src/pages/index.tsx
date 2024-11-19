import React from "react";
import { HeroContent } from "@/components/layout/Hero";
import { AnimatedBackground } from "@/components/common/Background";
import { IDEPreview } from "@/components/layout/Preview";
import { FeatureCard } from "@/components/common/Feature";
import { FEATURES } from "@/constants/feature";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden relative">
      <AnimatedBackground />

      <section className="pt-20 lg:pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <HeroContent title={"FLAKE IDE"} subtitle={"모두의 코딩 생활을 위해"} description={"디지털 정보 격차 해소를 위한 웹 기반의 교육용 IDE 플랫폼"} buttonText={"지금 시작하기"} features={['설치 불필요', '무료 체험 가능', '실시간 지원']} />
            <IDEPreview />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-white/80">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;