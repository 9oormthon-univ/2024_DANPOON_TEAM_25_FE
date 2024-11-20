import {
  SimplePolicy,
  PolicySection,
  PolicyList,
} from '@/components/layout/Policy/Policy';
import { TermsOfService } from '@/constants/termsOfService';

const TermsOfServicePage = () => {
  return (
    <div className="py-24 lg:pt-24 min-h-screen mx-auto bg-slate-50 overflow-hidden relative">
      <main className="px-10 flex flex-col justify-center space-y-10">
        <div className="font-bold text-3xl">이용약관</div>
        <div className="border-b border-gray-300 w-full" />

        <SimplePolicy title="제1조(목적)" content={TermsOfService.purpose} />

        <PolicySection title="제2조(정의)">
          <PolicyList items={TermsOfService.definitions} />
        </PolicySection>

        <SimplePolicy
          title="제3조(약관 외 준칙)"
          content={TermsOfService.supplementaryRules}
        />

        <PolicySection title="제4조(약관의 효력과 변경)">
          <PolicyList items={TermsOfService.effectAndChanges} />
        </PolicySection>

        <PolicySection title="제5조(이용자에 대한 통지)">
          <PolicyList items={TermsOfService.notifications} />
        </PolicySection>

        <PolicySection title="제6조(이용계약의 체결)">
          <PolicyList items={TermsOfService.contractFormation} />
        </PolicySection>

        <PolicySection title="제7조(회원가입에 대한 승낙)">
          <PolicyList items={TermsOfService.membershipApproval} />
        </PolicySection>

        <PolicySection title="제8조(회원정보의 변경)">
          <PolicyList items={TermsOfService.memberInfoChanges} />
        </PolicySection>

        <PolicySection title="제9조(회원정보의 관리 및 보호)">
          <PolicyList items={TermsOfService.memberManagement} />
        </PolicySection>

        <PolicySection title="제10조(회사의 의무)">
          <PolicyList items={TermsOfService.companyObligations} />
        </PolicySection>

        <PolicySection title="제11조(개인정보보호)">
          <PolicyList items={TermsOfService.privacyProtection} />
        </PolicySection>

        <PolicySection title="제12조(이용자의 의무)">
          <PolicyList items={TermsOfService.userObligations} />
        </PolicySection>

        <PolicySection title="제13조(서비스의 제공)">
          <PolicyList items={TermsOfService.serviceProvision} />
        </PolicySection>

        <PolicySection title="제14조(서비스의 제한 등)">
          <PolicyList items={TermsOfService.serviceRestrictions} />
        </PolicySection>

        <PolicySection title="제15조(서비스의 해제·해지 및 탈퇴 절차)">
          <PolicyList items={TermsOfService.termination} />
        </PolicySection>

        <PolicySection title="제16조(손해배상)">
          <PolicyList
            items={[
              TermsOfService.liability.user,
              TermsOfService.liability.company,
            ]}
          />
        </PolicySection>

        <PolicySection title="제17조(면책사항)">
          <PolicyList items={TermsOfService.serviceRestrictions} />
        </PolicySection>

        <PolicySection title="제18조(권리의 귀속)">
          <PolicyList items={TermsOfService.intellectualProperty} />
        </PolicySection>

        <PolicySection title="제19조(콘텐츠의 관리)">
          <PolicyList items={TermsOfService.contentManagement} />
        </PolicySection>

        <SimplePolicy
          title="제20조(관할법원 및 준거법)"
          content={TermsOfService.jurisdiction}
        />

        <SimplePolicy title="부칙" content={TermsOfService.effectiveDate} />
      </main>
    </div>
  );
};

export default TermsOfServicePage;
