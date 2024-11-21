import { AnimatedBackground } from '@/components/common/Background';
import { CharacterCard } from '@/components/common/Card/Card';
import { CharacterData } from '@/constants/Card';
import { Footer } from '@/components/layout/Footer/Footer';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden relative">
      <AnimatedBackground />

      <main className="flex-grow">
        <section className="pt-20 lg:pt-24 pb-12 flex flex-col items-center space-y-8">
          <h1 className={`text-3xl font-semibold tracking-tight`}>회원가입</h1>
          <div className="border-b border-gray-300 w-10/12" />
        </section>

        <section className="items-center justify-center flex flex-col space-y-16">
          <p className="text-xl text-[#181818]/70 font-medium">
            FlakeIDE에서 어떤 역할로 활동하시겠습니까?
          </p>
          <div className="flex flex-row space-x-16 items-center justify-center">
            <CharacterCard
                type="mentor"
                character={CharacterData.mentor.character}
                description={CharacterData.mentor.description}
              />
            <CharacterCard
              type="mentee"
              character={CharacterData.mentee.character}
              description={CharacterData.mentee.description}
            />
          </div>
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

export default Signup;
