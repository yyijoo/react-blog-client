import codestatesWebsite from "data/image/codestatesWebsite.png";
import kakaoMobilityCi from "data/image/kakaoMobilityCi.png";
import kakaoParking from "data/image/kakaoParking.jpg";
import kakaoTaxi from "data/image/kakaoTaxi.jpg";
import psqCi from "data/image/parkingSquare.jpg";
import parkhere from "data/image/parkhere.png";
import psqMember from "data/image/psqMember.jpg";

export const projectAsEngineer = [
  {
    title: "Sool",
    term: "2019.04 - ",
    imgUrl: "",
    redirectUrl: "sool"
  },
  {
    title: "Personal website",
    term: "2019.04 - ",
    imgUrl: "",
    redirectUrl: "personal"
  },
  {
    title: "Codestates website",
    term: "2019.02 - 2019.03",
    imgUrl: codestatesWebsite,
    redirectUrl: "cswebsite"
  },
  {
    title: "Codestates admin website",
    term: "2019.02 - 2019.03",
    imgURL: "",
    redirectUrl: "csadmin"
  },
  {
    title: "Jobstates",
    term: "2018.12 - 2018.12",
    imgUrl: "",
    redirectUrl: "jobstates"
  }
];

export const projectAsBusinessDeveloper = [
  {
    title: "kakaomobility",
    term: "2019.02 - 2019.03",
    imgUrl: codestatesWebsite,
    redirectUrl: "kakao"
  },
  {
    title: "Parking Square",
    term: "2019.02 - 2019.03",
    imgUrl: codestatesWebsite,
    redirectUrl: "psq"
  }
];

export const projects = {
  kakao: {
    ci: kakaoMobilityCi,
    desc:
      "파킹스퀘어가 인수되면서 카카오 O2O조직에 합류했습니다. 주차장을 찾고 이용할 수 있는 카카오파킹 런칭을 위한 목적조직인 파킹TF를 시작으로, 사업기획팀에 소속되어 카카오택시 시승, 신차판매 플랫폼, 카카오드라이버 서비스를 담당했습니다.",
    items: [
      "신규 서비스 핵심 가치 정의",
      "수익 창출을 위한 business model 기획 및 실행",
      "시너지를 낼 수 있는 제휴사 발굴 및 파트너십 유지",
      "서비스기획, 개발팀과 business에 필요한 요구사항을 정의 및 우선순위 조정"
    ],
    pics: [kakaoParking, kakaoTaxi]
  },
  psq: {
    ci: psqCi,
    desc:
      "주차 예약 서비스 ‘파크히어'를 만드는 파킹스퀘어에서 시리즈A 투자를 받고 카카오에 인수되기까지 전략기획팀 소속으로 일했습니다.",
    items: [
      "2년 동안 5명이던 팀이 30명이 되는 과정에서의 팀 빌딩과 암묵지 구조적 전파",
      "핵심지표 설정과 데이터를 통해 추출한 인사이트를 서비스에 빠르게 반영",
      "서비스 핵심 가치와 비전을 정의, 장기적 사업 방향성을 수립 참여",
      "브랜딩 작업, 보도자료 작성 등 서비스 핵심 가치 전파",
      "축제, 차량 관련 서비스, 공연장 제휴 등 유저 확장을 위한 채널 발굴"
    ],
    pics: [parkhere, psqMember]
  },
  csadmin: {
    title: "Codestates admin website",
    desc:
      "Codestates 수강생 관리, 공식 웹사이트 콘텐츠 관리, 결제 관리를 위한 관리자용 웹사이트",
    items: [
      "Figma를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "React, Redux 기반 웹앱 클라이언트 폴더 및 컴포넌트 구조 설계",
      "json-server를 활용해 수강생 정보 조회, 수정, 삭제 인터페이스 구현"
    ],
    pics: []
  },
  cswebsite: {
    title: "Codestates official website",
    desc: "Codestates 코스 안내, 신청, 결제 및 상담이 이뤄지는 공식 웹사이트",
    url: "https://codestatese.com",
    items: [
      "금액 할인 쿠폰 기능 개발",
      "static data로 관리되던 정보들을 DB화",
      "메인, 코스 소개, 코스 지원 페이지 등 UI 개편",
      "hotfix 대응",
      "asana 및 Scrum Time을 활용한 scrum 진행"
    ]
  },
  jobstates: {
    title: "Jobstates",
    desc:
      "Codestates program 중 진행한 4주 프로젝트. 채용 공고를 정리하고 이력 관리를 할 수 있는 웹사이트",
    items: [
      "Keynote를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "React, Redux 기반 웹앱 구조 설계",
      "styled-components를 활용한 전체 레이아웃 컴퍼넌트 구조 설계 및 구현",
      "이력서 페이지 인터페이스 구현",
      "Google vision API를 이용한 이미지 텍스트 추출 기능 구현",
      "scotty를 활용한 AWS S3 클라이언트 앱 배포",
      "로그인 토큰 처리"
    ]
  },
  personal: {
    title: "Personal website",
    desc: "이력 소개 및 TIL, Blog 작성용 개인 포트폴리오 웹사이트",
    url: "",
    items: [
      "figma를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "markdown file rendering"
    ]
  },
  sool: {
    title: "Sool",
    desc: "맥주 정보를 검색과 시음노트용 앱",
    stacks: ["react-native", "redux", "expo"],
    items: [
      "figma를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "react-native, redux 기반 앱 구조 설계"
    ]
  }
};
