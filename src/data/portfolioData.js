import codestatesWebsite from "data/image/codestatesWebsite.png";
import kakaoMobilityCi from "data/image/kakaoMobilityCi.png";
import kakaoParking from "data/image/kakaoParking.jpg";
import kakaoTaxi from "data/image/kakaoTaxi.jpg";
import psqCi from "data/image/parkingSquare.jpg";
import parkhere from "data/image/parkhere.png";
import psqMember from "data/image/psqMember.jpg";

export const projectAsEngineer = [
  {
    title: "Sool(in progress)",
    term: "2019.04 - ",
    imgUrl: "",
    redirectUrl: ""
  },
  {
    title: "Personal Website",
    term: "2019.04 - ",
    imgUrl: "",
    redirectUrl: ""
  },
  {
    title: "Codestates website",
    term: "2019.02 - 2019.03",
    imgUrl: codestatesWebsite,
    redirectUrl: "cswebsite"
  },
  {
    title: "Codestates admin",
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
      "파킹스퀘어가 인수되면서 카카오 O2O조직에 합류했습니다. 주차장을 찾고 이용할 수 있는 카카오파킹 런칭을 위한 목적조직인 파킹TF를 시작으로, 이후 사업기획팀에 소속되어 카카오택시 시승, 신차판매 플랫폼, 카카오드라이버 서비스를 담당했습니다.",
    items: [
      "신규 서비스의 뿌리가 될 핵심 가치를 고민하고 정의",
      "수익 창출을 위한 business model을 고민하고, 이를 실행하기 위한 액션 플랜을 기획, 실행",
      "시너지를 낼 수 있는 제휴사를 찾고 파트너십 유지",
      "서비스기획, 개발팀과 business에 필요한 요구사항을 정의하고 우선순위를 조정해나갔습니다."
    ],
    pics: [kakaoParking, kakaoTaxi]
  },
  psq: {
    ci: psqCi,
    desc:
      "주차 예약 서비스 ‘파크히어'를 만드는 파킹스퀘어에서 시리즈A 투자를 받고 카카오에 인수되기까지 전략기획팀 소속으로 일했습니다.",
    items: [
      "2년 동안 5명이던 팀이 30명이 되는 과정에서 초기멤버로서 의도적인 팀 빌딩을 주도했고 암묵지를 구조적으로 전파했습니다.",
      "핵심지표를 설정하고, 해당 데이터를 통해 인사이트를 추출하고, 빠르게 서비스에 반영했습니다.",
      "핵심 가치와 비전을 정의하고 장기적 사업 방향성을 수립하는데 참여했습니다.",
      "회사와 서비스의 핵심 가치를 전파하기 위한 브랜딩 작업을 하고 보도자료 작성, 벤처 진행 등 이를 외부에 알리는 일을 담당했습니다.",
      "축제, 차량 관련 서비스, 공연장 제휴 등 유저 확장을 위한 채널을 발굴하고, 기획, 실행했습니다."
    ],
    pics: [parkhere, psqMember]
  },
  csadmin: {
    desc:
      "통합 수강생 관리, 웹사이트 콘텐츠 관리, 결제 관리를 위한 관리자 페이지",
    items: [
      "themeforest를 통해 start-up용 어드민 검토",
      "Figma를 활용한 웹앱 레이아웃 기획 및 필요 기능 정의",
      "React, Redux 기반 웹앱 클라이언트 폴더 및 컴포넌트 구조 설계",
      "json-server를 활용해 수강생 정보 조회, 수정, 삭제 인터페이스 구현"
    ],
    pics: []
  },
  cswebsite: {
    desc: "코스 안내, 신청, 결제 및 상담이 이뤄지는 공식 웹사이트",
    items: [
      "금액 할인 쿠폰 기능 개발",
      "static data로 관리되던 정보들을 DB화",
      "메인, 코스 소개, 코스 지원 페이지 등 UI 개편",
      "hotfix 대응",
      "asana 및 Scrum Time을 활용한 scrum 진행",
      "now를 활용한 커뮤니케이션"
    ]
  },
  jobstates: {
    desc:
      "통합 수강생 관리, 웹사이트 콘텐츠 관리, 결제 관리를 위한 관리자 페이지",
    items: [
      "Keynote를 활용한 서비스 기획(기능 정의 & 레이아웃 기획)",
      "React & Redux 기반 웹앱 구조 설계",
      ,
      "styled-components를 활용한 전체 레이아웃 컴퍼넌트 구조 설계 및 구현",
      "이력서 페이지 인터페이스 구현",
      "Google vision API를 이용한 이미지 텍스트 추출 기능 구현",
      "scotty를 활용한 AWS S3 클라이언트 앱 배포",
      "로그인 토큰 처리"
    ]
  }
};
