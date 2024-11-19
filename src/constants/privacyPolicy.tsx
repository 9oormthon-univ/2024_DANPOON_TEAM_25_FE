export const PrivacyPolicy = {
  introduction: `FlakeIDE(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.`,

  principles: `개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.`,

  disclosure: `1. 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다.
  2. 회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.`,

  revision: {
    policy: `1. 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.
  2. 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.`,
    methods: [
      `회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법`,
      `서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법`,
    ],
    noticePeriod: `회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.`,
  },

  memberInfo: `회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다.
  1. 필수 수집 정보: 카카오계정, 프로필 정보(닉네임)`,

  collectionMethods: `회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.
  1. 이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식
  2. 어플리케이션 등 회사가 제공하는 홈페이지 외의 서비스를 통해 이용자가 자신의 개인정보를 입력하는 방식`,

  usage: `회사는 개인정보를 다음 각 호의 경우에 이용합니다.
  1. 공지사항의 전달 등 회사운영에 필요한 경우
  2. 이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을 위한 경우
  3. 회사의 서비스를 제공하기 위한 경우
  4. 법령 및 회사 약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재를 위한 경우
  5. 신규 서비스 개발을 위한 경우`,

  retentionAndUsagePeriod: `1. 회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을 위한 기간 동안 개인정보를 보유 및 이용합니다.
  2. 전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간 보관합니다.`,

  legalRetention: [
    {
      law: '전자상거래 등에서의 소비자보호에 관한 법률',
      retention: [
        { content: '계약 또는 청약철회 등에 관한 기록', period: '5년' },
        { content: '대금결제 및 재화 등의 공급에 관한 기록', period: '5년' },
        { content: '소비자의 불만 또는 분쟁처리에 관한 기록', period: '3년' },
        { content: '표시·광고에 관한 기록', period: '6개월' },
      ],
    },
    {
      law: '통신비밀보호법',
      retention: [{ content: '웹사이트 로그 기록 자료', period: '3개월' }],
    },
    {
      law: '전자금융거래법',
      retention: [{ content: '전자금융거래에 관한 기록', period: '5년' }],
    },
    {
      law: '위치정보의 보호 및 이용 등에 관한 법률',
      retention: [{ content: '개인위치정보에 관한 기록', period: '6개월' }],
    },
  ],

  destruction: `회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.`,

  destructionProcess: `1. 이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기 되어집니다.
  2. 회사는 파기 사유가 발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.`,

  destructionMethods: `회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기합니다.`,

  advertising: {
    consent: `회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 이용자의 명시적인 사전동의를 받습니다.`,
    exceptions: [
      `회사가 재화 등의 거래관계를 통하여 수신자로부터 직접 연락처를 수집한 경우, 거래가 종료된 날로부터 6개월 이내에 회사가 처리하고 수신자와 거래한 것과 동종의 재화 등에 대한 영리목적의 광고성 정보를 전송하려는 경우`,
      `「방문판매 등에 관한 법률」에 따른 전화권유판매자가 육성으로 수신자에게 개인정보의 수집출처를 고지하고 전화권유를 하는 경우`,
    ],
  },

  userObligations: `이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.`,

  cookies: {
    usage: `회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 개인정보 자동 수집장치(이하 '쿠키')를 사용합니다.`,
    options: `이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.`,
    examples: {
      Edge: `웹브라우저 우측 상단의 설정 메뉴 > 쿠키 및 사이트 권한 > 쿠키 및 사이트 데이터 관리 및 삭제`,
      Chrome: `웹브라우저 우측 상단의 설정 메뉴 > 개인정보 및 보안 > 쿠키 및 기타 사이트 데이터`,
      Whale: `웹브라우저 우측 상단의 설정 메뉴 > 개인정보 보호 > 쿠키 및 기타 사이트 데이터`,
    },
  },

  privacyOfficer: {
    name: '조은애',
    email: 'euna113024@gmail.com',
  },

  remedies: {
    committee: `개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)`,
    center: `개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)`,
    prosecution: `대검찰청 : (국번없이) 1301 (www.spo.go.kr)`,
    police: `경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)`,
  },

  effectiveDate: `본 방침은 2024.11.23.부터 시행됩니다.`,
};
