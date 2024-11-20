import { AnimatedBackground } from '@/components/common/Background';
import { LoginButton } from '@/components/common/Button/Button';
import { Footer } from '@/components/layout/Footer/Footer';
import { HeroDescription, HeroTitle } from '@/components/layout/Hero';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden relative">
      <AnimatedBackground />

      <main className="flex-grow">
        <section className="pt-20 lg:pt-24 pb-16 flex flex-col items-center">
          <HeroTitle children="FLAKE IDE" />
          <HeroDescription
            children="모두를 위한 코딩, 함께 배우는 성장의 시작"
            className="mt-1 text-md"
          />
        </section>

        <section className="items-center justify-center flex flex-col space-y-4">
          <LoginButton children="카카오로 3초만에 시작하기" type="kakao" />
          <LoginButton
            children="이메일로 시작하기"
            type="email"
            className="px-16 bg-[#D0E4FF]"
          />
        </section>
      </main>

      <section className="bg-white p-0">
        <div className="mx-auto px-6">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Login;
