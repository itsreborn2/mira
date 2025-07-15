"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin, Heart, Users, Shield, HandHeart, CheckCircle, Sparkles, Home, Bath, Stethoscope, BrainCircuit, Globe, Clock } from "lucide-react"

export default function HomePage() {
  const [activePage, setActivePage] = useState("home")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Contact Form State
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactMessage, setContactMessage] = useState("")

  const handleContactSubmit = () => {
    const subject = contactMessage.split('\n')[0] || '미라재가복지센터 문의'
    const body = `
성함: ${contactName}
연락처: ${contactPhone}
이메일: ${contactEmail}

------------------------------------

문의 내용:
${contactMessage}
    `
    const mailtoLink = `mailto:acosmos77@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-20 items-center px-4">
          <div className="flex-1 flex justify-start">
            <Link href="#home" className="flex items-center space-x-2">
              <HandHeart className="w-8 h-8 text-coral-500" />
              <span className="font-bold text-xl text-gray-800">미라재가복지센터</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="font-medium text-gray-600 transition-colors hover:text-coral-500">홈</Link>
            <Link href="#about" className="font-medium text-gray-600 transition-colors hover:text-coral-500">센터소개</Link>
            <Link href="#services" className="font-medium text-gray-600 transition-colors hover:text-coral-500">서비스</Link>
            <Link href="#contact" className="font-medium text-gray-600 transition-colors hover:text-coral-500">문의</Link>
          </nav>
          <div className="flex-1 flex justify-end items-center">
            {/* Desktop Contact Info */}
            <div className="hidden md:flex flex-col items-end">
              <a href="tel:032-546-0101" className="flex items-center gap-2 text-coral-500 hover:text-coral-600 font-bold text-base">
                <Phone size={16} className="-mt-0.5" />
                <span>032-546-0101</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <Clock size={14} />
                <span>상담: 09:00 - 19:00 (월-일)</span>
              </div>
            </div>
            {/* Mobile Contact Button */}
            <a href="tel:032-546-0101" className="inline-flex md:hidden items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-coral-500 text-white hover:bg-coral-600 px-6 py-2.5 rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              상담전화 연결
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative w-full h-[600px] md:h-[700px]">
          <Image
            src="/providing-care-for-elderly-2024-09-22-20-07-14-utc.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="요양보호사가 어르신을 돌보는 배경 이미지"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-60% to-transparent z-10" />
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-3xl">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-800">
                  <span>내 <span className="text-coral-500">가족</span>을 돌보는 마음으로,</span>
                  <span className="block mt-4">미라재가복지센터가 함께합니다.</span>
                </h1>
                <p className="text-gray-600 md:text-xl">
                  전문 요양보호사가 어르신의 자택으로 방문하여 맞춤형 돌봄 서비스를 제공합니다. 
                  <br />
                  일상생활 지원부터 전문적인 건강 관리까지, 편안하고 안정된 노후를 약속합니다.
                </p>
              </div>
              <div className="mt-6 flex justify-start">
                {/* 모바일에서는 전화 연결, PC에서는 contact 섹션으로 이동 */}
                <a
                  href={typeof window !== 'undefined' && window.innerWidth < 768 ? "tel:032-546-0101" : "#contact"}
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-coral-500 px-10 text-lg font-bold text-white shadow transition-colors hover:bg-coral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-coral-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  032-546-0101
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Column: MOU Images */}
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white p-2 border rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage("/mou-parkinson.jpg.jpg")}>
                    <Image
                      src="/mou-parkinson.jpg.jpg"
                      alt="대한파킨슨병협회 업무협약서 1페이지"
                      width={300}
                      height={420}
                      className="rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white p-2 border rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage("/mou-parkinson.jpg2.jpg")}>
                    <Image
                      src="/mou-parkinson.jpg2.jpg"
                      alt="대한파킨슨병협회 업무협약서 2페이지"
                      width={300}
                      height={420}
                      className="rounded-md w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  <span className="text-coral-500">대한파킨슨병협회</span> 공식 협약기관
                </h2>
                <p className="text-lg text-gray-600">
                  미라재가복지센터는 대한파킨슨병협회와의 공식 업무 협약을 통해, 파킨슨병 환우분들을 위한 전문적이고 체계적인 재가요양 서비스를 제공하는 <span className='font-semibold text-coral-500'>파킨슨 전문 재가센터</span>입니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Sparkles className="w-6 h-6 text-coral-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">특화된 케어 프로그램:</span> 파킨슨 환우의 특성을 고려한 맞춤형 재활 및 돌봄 프로그램을 운영합니다.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="w-6 h-6 text-coral-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">전문 인력 배치:</span> 파킨슨병에 대한 깊은 이해와 경험을 갖춘 요양보호사를 우선적으로 배정합니다.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="w-6 h-6 text-coral-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">지속적인 정보 교류:</span> 협회와의 긴밀한 협력을 통해 최신 정보와 치료 동향을 서비스에 신속하게 반영합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">미라재가복지센터의 약속</h2>
            <p className="text-gray-600 mb-12">전문성과 따뜻한 마음으로 최상의 돌봄을 제공합니다.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <Heart className="mx-auto text-coral-500 w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">따뜻한 마음으로</h3>
                  <p className="text-gray-600">내 가족을 대하는 따뜻한 마음으로 어르신 한 분 한 분께 정성을 다합니다.</p>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <Users className="mx-auto text-coral-500 w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">체계적인 관리</h3>
                  <p className="text-gray-600">전문 사회복지사가 어르신의 상태를 주기적으로 확인하고, 요양 계획을 체계적으로 관리합니다.</p>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <Shield className="mx-auto text-coral-500 w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">신뢰할 수 있는 전문가</h3>
                  <p className="text-gray-600">국가 공인 요양보호사 자격을 갖춘 검증된 전문가가 서비스를 제공합니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="pt-12 pb-24 px-4 bg-gray-50">
          <div className="container mx-auto">


            <div className="grid md:grid-cols-2 gap-16 items-center bg-white p-12 rounded-2xl shadow-xl">
              {/* Left Column: Text Content */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                  어르신을 위한 <span className="text-coral-500">프리미엄 재가요양 서비스</span>
                </h3>
                <p className="text-lg text-gray-600">
                  미라재가복지센터는 수년간의 노하우와 전문 인력을 바탕으로, 어르신 개개인의 필요에 맞춘 최상의 돌봄 서비스를 제공합니다. 저희는 단순한 생활 지원을 넘어, 어르신의 삶에 활력을 더하고 가족에게는 안심을 드리는 것을 목표로 합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-coral-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><span className="font-semibold">1:1 맞춤 케어 플랜:</span> 사회복지사가 직접 방문하여 어르신의 건강 상태와 생활 패턴을 고려한 개인별 요양 계획을 수립합니다.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-coral-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><span className="font-semibold">검증된 전문 요양보호사:</span> 엄격한 채용 과정을 통과하고, 지속적인 직무 교육을 이수하는 신뢰할 수 있는 요양보호사를 파견합니다.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-coral-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><span className="font-semibold">가족과의 정기적인 소통:</span> 보호자님과 정기적으로 소통하며 어르신의 상태와 서비스 진행 상황을 투명하게 공유합니다.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Certification Images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white p-2 border rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage("/certificate-janggi.jpg")}>
                    <Image
                      src="/certificate-janggi.jpg"
                      alt="장기요양기관 지정서"
                      width={300}
                      height={420}
                      className="rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white p-2 border rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage("/certificate-goyou.jpg")}>
                    <Image
                      src="/certificate-goyou.jpg"
                      alt="고유번호증"
                      width={300}
                      height={420}
                      className="rounded-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        <section id="nationwide-service" className="py-20 px-4 bg-coral-50">
          <div className="container mx-auto text-center">
            <Globe className="mx-auto text-coral-500 w-16 h-16 mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">전국적인 돌봄 서비스</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              미라재가복지센터는 전국적인 네트워크를 통해, 모든 지역에 국가 공인 자격과 전문 직무 교육을 이수한 최상의 요양보호사를 배정합니다. 이제 지역 걱정 없이, 대한민국 어디에서나 미라재가복지센터의 표준화된 고품질 돌봄 서비스를 경험하실 수 있습니다.
            </p>
          </div>
        </section>

        <section id="services" className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-800">전문적인 돌봄 서비스</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">어르신의 편안하고 행복한 일상을 위해 미라재가복지센터가 제공하는 맞춤형 서비스를 만나보세요.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Service 1: 방문요양 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 text-center">
                <CardContent className="p-8">
                  <Home className="mx-auto text-coral-500 w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">방문요양</h3>
                  <p className="text-gray-600">요양보호사가 어르신 댁에 방문하여 신체활동, 가사, 정서적 지원 등 일상생활을 돕습니다.</p>
                </CardContent>
              </Card>

              {/* Service 2: 방문목욕 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 text-center">
                <CardContent className="p-8">
                  <Bath className="mx-auto text-coral-500 w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">방문목욕</h3>
                  <p className="text-gray-600">이동식 목욕 차량을 이용하여 안전하고 편안한 목욕 서비스를 제공합니다. (2인 1조)</p>
                </CardContent>
              </Card>

              {/* Service 4: 치매관리 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 text-center">
                <CardContent className="p-8">
                  <BrainCircuit className="mx-auto text-coral-500 w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">치매관리</h3>
                  <p className="text-gray-600">인지활동 프로그램을 통해 치매 증상 악화를 방지하고 인지 기능 유지를 돕습니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <section id="contact" className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800">상담 문의</h2>
              <p className="text-lg text-gray-600 mt-4 mb-6">유선 상담이 필요하시거나 문의사항이 있으신가요?<br />전화 상담 또는 아래 문의 양식을 통해 남겨주시면 신속하게 답변 드리겠습니다.</p>
              
              <a href="tel:032-546-0101" className="inline-flex items-center justify-center bg-coral-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-coral-600 transition-colors text-lg mb-6 shadow-md">
                <Phone className="inline-block w-5 h-5 mr-2" />
                032-546-0101
              </a>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name">성함</Label>
                  <Input id="name" placeholder="홍길동" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input id="phone" placeholder="010-1234-5678" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="mira@example.com" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">문의 내용</Label>
                <Textarea id="message" placeholder="서비스 신청 절차와 비용에 대해 자세히 알고 싶습니다." className="min-h-[150px]" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
              </div>
              <Button onClick={handleContactSubmit} className="w-full bg-coral-500 text-white hover:bg-coral-600 text-lg py-6 rounded-lg">
                문의하기
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-4">
              <HandHeart className="w-7 h-7 text-coral-500" />
              <span className="font-bold text-lg text-white">미라재가복지센터</span>
            </div>
            <p>상호: 미라재가복지센터</p>
            <p>주소: 인천광역시 계양구 아나지로 311, 상가동 1층 115호</p>
            <p>대표: 염미라</p>
            <p>고유번호: 860-80-03041</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-white mb-4">고객지원</h3>
            <Link href="/privacy-policy" className="block hover:text-white">개인정보처리방침</Link>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-white mb-4">고객센터</h3>
            <a href="tel:032-546-0101" className="inline-block w-full bg-coral-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-coral-600 transition-colors text-center text-lg">
              <Phone className="inline-block w-5 h-5 mr-2 -mt-1" />
              032-546-0101
            </a>
            <div className="pt-1">
              <p>상담시간: 09:00 - 19:00 (월-일)</p>
              <p>이메일: acosmos77@naver.com</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>Copyright &copy; 2024 미라재가복지센터. All Rights Reserved.</p>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="확대된 인증서 이미지"
              width={800}
              height={1120}
              className="object-contain max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
