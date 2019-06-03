import codestatesWebsite from "data/image/portfolio/codestatesWebsite.png";
import kakaoMobilityCi from "data/image/portfolio/kakaoMobilityCi.png";
import kakaoParking from "data/image/portfolio/kakaoParking.jpg";
import kakaoTaxi from "data/image/portfolio/kakaoTaxi.jpg";
import psqCi from "data/image/portfolio/parkingSquare.jpg";
import parkhere from "data/image/portfolio/parkhere.png";
import psqMember from "data/image/portfolio/psqMember.jpg";
import sool from "data/image/portfolio/sool.png";

export const projectAsEngineer = [
  {
    title: "Sool",
    term: "2019.04 - ",
    imgUrl: "",
    redirectUrl: "sool",
    key: "sool"
  },
  {
    title: "Personal website",
    term: "2019.04 - ",
    imgUrl: "",
    redirectUrl: "personal",
    key: "personal"
  },
  {
    title: "Codestates website",
    term: "2019.02 - 2019.03",
    imgUrl: codestatesWebsite,
    redirectUrl: "cswebsite",
    key: "cswebsite"
  },
  {
    title: "Codestates admin website",
    term: "2019.02 - 2019.03",
    imgURL: "",
    redirectUrl: "csadmin",
    key: "csadmin"
  },
  {
    title: "Jobstates",
    term: "2018.12 - 2018.12",
    imgUrl: "",
    redirectUrl: "jobstates",
    key: "jobstates"
  }
];

export const projectAsBusinessDeveloper = [
  {
    title: "kakao / kakaomobility",
    term: "2016.03 - 2018.05",
    imgUrl: codestatesWebsite,
    redirectUrl: "kakao",
    key: "kakao"
  },
  {
    title: "Parking Square",
    term: "2014.04 - 2016.03",
    imgUrl: codestatesWebsite,
    redirectUrl: "psq",
    key: "psq"
  }
];

export const projects = {
  kakao: {
    ci: kakaoMobilityCi,
    urls: [
      {
        text: "www.kakaocorp.com/service/KakaoT",
        link: "https://www.kakaocorp.com/service/KakaoT"
      }
    ],
    desc:
      "파킹스퀘어가 인수되면서 카카오 O2O조직에 합류했습니다. 주차장 검색 및 이용 서비스를 만드는 파킹TF를 시작으로, 사업기획팀에 소속되어 카카오택시 시승, 신차판매 플랫폼, 카카오드라이버 서비스를 담당했습니다.",
    items: [
      "신규 서비스 핵심 가치 정의",
      "수익 창출을 위한 business model 설계 및 실행",
      "시너지를 낼 수 있는 제휴사 발굴 및 파트너십 유지",
      "서비스기획, 개발팀과 business에 필요한 요구사항을 정의 및 우선순위 조정"
    ],
    pics: [kakaoParking, kakaoTaxi]
  },
  psq: {
    ci: psqCi,
    urls: [{ text: "parkingsq.com", link: "http://parkingsq.com/" }],
    desc:
      "주차 예약 서비스 ‘파크히어'를 만드는 파킹스퀘어에서 시리즈A 투자를 받고 카카오에 인수되기까지 전략기획팀 소속으로 일했습니다.",
    items: [
      "핵심지표 설정과 데이터를 통해 인사이트를 추출하고 서비스에 반영",
      "서비스 핵심 가치와 비전 정의, 장기적 사업 방향성 수립",
      "축제, 차량 관련 서비스, 공연장 제휴 등 유저 확장을 위한 채널 발굴",
      "브랜딩 작업, 보도자료 작성 등 서비스 핵심 가치를 외부에 전파",
      "2년 동안 5명이던 팀이 30명이 되는 과정에서 서비스 핵심 가치를 내부에 전파"
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
      "json-server를 활용해 수강생 정보 CRUD 인터페이스 구현",
      "수강생 정보 CRUD REST API 구현"
    ],
    pics: []
  },
  cswebsite: {
    title: "Codestates official website",
    desc: "Codestates 코스 안내, 신청, 결제 및 상담이 이뤄지는 공식 웹사이트",

    urls: [{ text: "codestates.com", link: "https://codestates.com" }],
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
    urls: [{ text: "서비스 소개 영상", link: "https://youtu.be/V_AzVXW2QZM" }],
    desc:
      "Codestates program 중 진행한 4주 프로젝트. 채용 공고를 정리하고 이력 관리를 할 수 있는 웹사이트",
    items: [
      "Keynote를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "React, Redux 기반 웹앱 구조 설계",
      "styled-components를 활용한 전체 레이아웃 컴퍼넌트 구조 설계 및 구현",
      "이력서 페이지 인터페이스 구현",
      "Google vision API를 이용한 이미지 텍스트 추출 기능 구현",
      "scotty를 활용한 AWS S3 클라이언트 앱 배포"
    ]
  },
  personal: {
    title: "Personal website",
    desc: "이력 소개 및 TIL, Blog 작성용 개인 웹사이트",
    urls: [
      {
        text: "figma 기획서",
        link:
          "https://www.figma.com/file/NiDa63qW31TdV98Te2t9UhUM/blog?node-id=3%3A0"
      },
      {
        text: "Github Repository",
        link: "https://github.com/yyijoo/react-blog-client/tree/master"
      }
    ],
    items: [
      "figma를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "React, Redux 기반 웹앱 구조 설계 및 구현",
      "Styled-components 기반 스타일 구현"
    ]
  },
  sool: {
    title: "Sool",
    desc: "맥주 정보를 검색하고 시음노트를 기록하는 앱",
    stacks: ["react-native", "redux", "expo"],
    items: [
      "figma를 활용한 서비스 기능 정의 및 레이아웃 기획",
      "react-native, redux 기반 앱 구조 설계"
    ],
    pics: [sool]
  }
};
