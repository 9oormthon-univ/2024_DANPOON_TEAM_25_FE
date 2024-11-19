import {
  PolicyList,
  PolicySection,
  PolicyTable,
  SimplePolicy,
} from '@/components/layout/Policy/Policy';
import { PrivacyPolicy } from '@/constants/privacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div className="py-24 lg:pt-24 min-h-screen mx-auto bg-slate-50 overflow-hidden relative">
      <main className="px-10 flex flex-col justify-center space-y-10">
        <div className="font-bold text-3xl">개인정보 처리방침</div>
        <div className="border-b border-gray-300 w-full" />

        <SimplePolicy
          title="제1조 (목적)"
          content={PrivacyPolicy.introduction}
        />

        <SimplePolicy
          title="제2조 (개인정보 처리의 원칙)"
          content={PrivacyPolicy.principles}
        />

        <SimplePolicy
          title="제3조 (본 방침의 공개)"
          content={PrivacyPolicy.disclosure}
        />

        <PolicySection
          title="제4조 (본 방침의 변경)"
          content={PrivacyPolicy.revision.policy}
        >
          <PolicyList items={PrivacyPolicy.revision.methods} />
          <p>{PrivacyPolicy.revision.noticePeriod}</p>
        </PolicySection>

        <SimplePolicy
          title="제5조 (회원 가입을 위한 정보)"
          content={PrivacyPolicy.memberInfo}
        />

        <SimplePolicy
          title="제6조 (개인정보 수집 방법)"
          content={PrivacyPolicy.collectionMethods}
        />

        <SimplePolicy
          title="제7조 (개인정보의 이용)"
          content={PrivacyPolicy.usage}
        />

        <PolicySection
          title="제8조 (개인정보의 보유 및 이용기간)"
          content={PrivacyPolicy.retentionAndUsagePeriod}
        >
          <p className="font-semibold">법령에 따른 보유 및 이용기간</p>
          <PolicyTable data={PrivacyPolicy.legalRetention} />
        </PolicySection>

        <SimplePolicy
          title="제9조 (개인정보의 파기 원칙)"
          content={PrivacyPolicy.destruction}
        />

        <SimplePolicy
          title="제10조 (개인정보 파기 절차)"
          content={PrivacyPolicy.destructionProcess}
        />

        <SimplePolicy
          title="제11조 (개인정보 파기 방법)"
          content={PrivacyPolicy.destructionMethods}
        />

        <PolicySection
          title="제12조 (광고성 정보의 전송 조치)"
          content={PrivacyPolicy.advertising.consent}
        >
          <PolicyList items={PrivacyPolicy.advertising.exceptions} />
        </PolicySection>

        <SimplePolicy
          title="제13조 (이용자의 의무)"
          content={PrivacyPolicy.userObligations}
        />

        <PolicySection title="제14조 (쿠키 설치 및 운영)">
          <p>{PrivacyPolicy.cookies.usage}</p>
          <p>{PrivacyPolicy.cookies.options}</p>
          <p className="font-semibold">웹브라우저 쿠키 설정 예시</p>
          <PolicyList items={Object.values(PrivacyPolicy.cookies.examples)} />
        </PolicySection>

        <PolicySection title="제15조 (회사의 개인정보 보호 책임자)">
          <p>성명: {PrivacyPolicy.privacyOfficer.name}</p>
          <p>이메일: {PrivacyPolicy.privacyOfficer.email}</p>
        </PolicySection>

        <PolicySection title="제16조 (권익침해에 대한 구제방법)">
          <p className="font-semibold">상담 및 신고 기관</p>
          <PolicyList
            items={[
              PrivacyPolicy.remedies.committee,
              PrivacyPolicy.remedies.center,
              PrivacyPolicy.remedies.prosecution,
              PrivacyPolicy.remedies.police,
            ]}
          />
        </PolicySection>

        <SimplePolicy title="부칙" content={PrivacyPolicy.effectiveDate} />
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
