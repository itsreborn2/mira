import { Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto py-8 px-4 md:py-12 md:px-6">
      <div className="mb-8 mt-6 md:mt-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-coral-500 transition-colors">
            홈
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-coral-500 font-medium">개인정보처리방침</span>
        </div>
        
        <div className="flex items-center space-x-3 mb-8 mt-6">
          <Shield className="w-10 h-10 text-coral-500" />
          <h1 className="text-3xl font-bold">개인정보처리방침</h1>
        </div>
        
        <p className="text-lg text-gray-700 mb-8">
          미라재가복지센터(이하 '회사')가 처리하는 모든 개인정보는 관련 법령에 근거하거나 정보주체의 동의에 의하여 수집•보유 및 처리되고 있습니다. 
          회사는 이용자의 개인정보보호를 매우 중요시하며, 이용자가 언제나 안심하고 회사의 서비스를 이용하실 수 있도록 최선을 다하고 있습니다.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">1. 이용자의 개인정보 보호</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700">
            회사는 통신비밀보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호규정을 준수하고 있으며, 
            관련 법규에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">2. 개인정보 처리목적 및 수집 항목</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 개인정보는 다음의 목적 이외의 용도로는 이용하지 않습니다.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">항목</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">목적</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">구분</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">수집항목</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">보유기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">서비스 문의</td>
                  <td className="py-3 px-4 border-b">상담신청</td>
                  <td className="py-3 px-4 border-b">필수</td>
                  <td className="py-3 px-4 border-b">이름, 연락처, 이메일, 문의 내용</td>
                  <td className="py-3 px-4 border-b">상담 신청일로부터 1년</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">장기요양 서비스</td>
                  <td className="py-3 px-4 border-b">서비스 신청</td>
                  <td className="py-3 px-4 border-b">필수</td>
                  <td className="py-3 px-4 border-b">이용자 이름, 인정 등급, 연락처, 주소</td>
                  <td className="py-3 px-4 border-b">법정 의무 보유기간까지</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">방문요양 서비스</td>
                  <td className="py-3 px-4 border-b">서비스 신청</td>
                  <td className="py-3 px-4 border-b">필수</td>
                  <td className="py-3 px-4 border-b">이용자 이름, 연령, 성별, 연락처, 주소</td>
                  <td className="py-3 px-4 border-b">서비스 종료 후 3개월까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-600">
            ※ 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.<br />
            - IP주소, 쿠키, 서비스 이용기록, 방문기록
          </p>
          
          <p className="mt-4 text-gray-700">
            <span className="font-medium">수집 방법</span>: 홈페이지 문의 양식, 이메일, 고객센터 전화 문의를 통한 수집
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">3. 개인정보 비공개 원칙</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            회사는 수집한 개인 정보를 상기 고지한 범위 내에서만 이용하며, 고객의 사전 동의 없이는 동 범위를 초과하여 이용하거나 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>고객이 사전에 개인정보 공개에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 법령상 의무를 준수하기 위하여 불가피한 경우</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">4. 개인정보 처리기간 및 파기 절차</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">개인정보 처리 기간</h3>
          <p className="text-gray-700 mb-4">
            회사는 고객이 제공한 개인 정보를 서비스 제공 등의 목적범위 내에서만 처리할 수 있으며, 고객이 개인정보의 이용 동의를 철회하거나 개인정보 제공받은 목적이 달성된 경우 재생 불가능한 방법으로 회원의 정보를 지체 없이 파기합니다. 
            다만, 관련 법령 규정에 의하여 다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간을 보유하여야 할 필요가 있는 경우 일정기간 보유합니다.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-medium">- 방문에 관한 기록</span><br />
            보존 이유: 통신비밀보호법 / 보존 기간: 3개월
          </p>
          
          <h3 className="text-xl font-semibold mb-3">개인정보의 파기절차 및 방법</h3>
          <p className="text-gray-700 mb-2">가. 파기절차</p>
          <p className="text-gray-700 mb-4 pl-4">
            회사는 고객의 개인정보를 안전하게 처리하며, 개인정보의 보유기간이 경과했거나 처리 목적이 달성된 후에는 관련 법령 및 내부방침에 따라 해당 개인정보를 파기합니다.
          </p>
          
          <p className="text-gray-700 mb-2">나. 파기방법</p>
          <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
            <li>전자적 파일 형태인 경우: 복원 불가능한 기술적 방법으로 영구삭제</li>
            <li>서면 상에 기재된 형태인 경우: 물리적 파쇄 또는 소각</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">5. 개인정보의 열람 및 수정, 이용동의 철회 권리</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            회사 홈페이지를 통해 문의 시 등록한 개인정보에 대한 열람, 수정, 삭제를 원하시는 경우 고객센터로 연락주시면 본인 확인 후 지체없이 필요한 조치를 취하겠습니다. 
            삭제한 개인정보는 어떠한 용도로도 이용되지 않습니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">6. 개인정보 보호에 대한 기술적/관리적 대책</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            회사는 이용자의 개인정보를 소중히 여기며 안전하게 보호, 관리되도록 최선을 다하고 있으며 다음과 같은 기술적/관리적 대책을 세워 시행하고 있습니다.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">가. 기술적 조치</h3>
          <p className="text-gray-700 mb-4">
            이용자의 개인정보는 접근 권한과 비밀번호에 의해서 철저히 보호되고 있으며, 파일 및 전송 데이터를 암호화하거나 파일 잠금 기능(Lock)을 사용하여 중요한 데이터는 별도의 보안 기능을 통해서 보호되고 있습니다. 
            또한 최신 백신 프로그램을 사용하여 개인정보가 침해되는 것을 방지하고 있으며, 침입차단 시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">나. 관리적 조치</h3>
          <p className="text-gray-700">
            회사는 개인정보 관련 업무를 담당자를 통해 관리하며, 개인정보보호 정책을 준수하도록 노력하고 있습니다. 
            또한, 회사의 개인정보보호 보호지침 이행 및 준수여부를 감사하기 위한 별도 절차를 마련하여 운영하고 있으며, 문제점이 발견될 경우 지체없이 시정 및 개선하는 등의 필요한 조치를 취하고 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">7. 개인정보 관련 불만처리</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            회사는 개인정보와 관련하여 이용자의 의견을 소중히 여깁니다. 개인정보와 관련된 불만사항이나 의문사항이 있으시다면 아래 연락처로 문의 주시기 바랍니다.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="font-medium text-gray-800">개인정보보호책임자</p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>이름: 염미라</li>
              <li>직위: 대표</li>
              <li>연락처: 032-546-0101</li>
              <li>이메일: acosmos77@naver.com</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            기타 개인정보 침해에 관한 상담이 필요한 경우 아래 기관으로 문의하실 수 있습니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
            <li>개인정보침해 신고센터 (https://privacy.kisa.or.kr / ☎ 국번없이 118)</li>
            <li>대검찰청 사이버수사과 (http://www.spo.go.kr / ☎ 국번없이 1301)</li>
            <li>경찰청 사이버안전국 (http://cyberbureau.police.go.kr / ☎ 국번없이 182)</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">8. 고지의 의무</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700">
            현 개인정보처리방침의 내용추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지를 통해 고지할 것입니다. 
            다만, 개인정보의 수집 및 활용, 제3자 제공 등과 같이 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.
          </p>
        </div>
      </section>

      <div className="text-center mt-10">
        <Link 
          href="/" 
          className="inline-flex items-center bg-coral-500 text-white py-3 px-6 rounded-lg hover:bg-coral-600 transition-colors text-lg font-medium"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
