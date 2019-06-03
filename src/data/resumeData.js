export default {
  techSkill: {
    category: "Technical Skills",
    contents: [
      {
        itemName: "Front-end",
        items: ["Javascript", "HTML/CSS", "React", "Redux", "styled-components"]
      },
      {
        itemName: "Back-end",
        items: ["Node.js", "Express", "sequelize"]
      },
      {
        itemName: "Interested",
        items: ["WebGL", "Aframe"]
      }
    ]
  },
  projects: {
    category: "Projects",
    contents: [
      {
        title: "Codestates Admin",
        role: "Front-end Engineer",
        term: "2019.01 - 2019.03",
        desc:
          "Codestates 재직 중, 통합 수강생 관리 & 공식 웹사이트 콘텐츠 관리 & 결제 관리를 위한 관리자 웹앱 신규 개발",
        items: [
          "Tech Stack : React, Redux, styled-components, Node.js, Express, Sequelize",
          "운영 및 마케팅 담당자의 사용성을 고려해 웹앱 기획",
          "확장성 및 재사용성을 고려해 React & Redux 기반 클라이언트 구조 설계",
          "수강생 정보 CRUD 인터페이스 구현",
          "수강생 정보 CRUD REST API 구현"
        ]
      },
      {
        title: "Codestates Website",
        role: "Front-end",
        term: "2019.01 - 2019.03",
        desc:
          "Codestates 재직 중, 코스 안내 & 신청 & 결제 & 상담이 이뤄지는 공식 웹앱 개발",
        items: [
          "Tech Stack : React, Redux, styled-components, now",
          "수강신청, 코스소개, 메인 페이지 UI 개편",
          "할인 쿠폰, 메일링 서비스 추가 신청 등 신규 기능 구현",
          "static data로 관리되던 정보를 DB화하고 hotfix에 대응하는 등 기존 코드 리팩토링 및 유지 보수",
          "운영 및 마케팅 담당자들과 asana 및 Scrum Time을 활용해 scrum으로 협업"
        ]
      },
      {
        title: "Jobstates",
        role: "Front-end Engineer",
        term: "2018.12 - 2018.12",
        desc:
          "Codestates 4주 프로젝트로, 여러 곳에서 수집한 채용 정보와 본인의 커리어를 정리하는 웹앱 개발",
        items: [
          "Tech Stack : React, Redux, styled-components",
          "전체 컴퍼넌트 구조 설계",
          "이력서 페이지 인터페이스 구현",
          "styled-components를 활용해 grid 기반 레이아웃 설계 및 구현",
          "Google vision API를 이용한 이미지 텍스트 추출 기능 구현",
          "scotty를 활용해 AWS S3 클라이언트 앱 배포"
        ]
      },
      {
        title: "My-Log",
        role: "Front-end & Back-end Engineer",
        term: "2018.11 - 2018.11",
        desc:
          "Codestates 2주 프로젝트로, 사진 및 텍스트로 일상을 기록 및 관리하는 웹앱 개발",
        items: [
          "Tech Stack : Node.js, Express, Sequelize",
          "게시글 CRUD API 구현",
          "multer, aws-sdk, multer-s3, aws-cli를 활용해 AWS S3 이미지 업로드 기능 구현",
          "AWS EC2 서버 앱 배포",
          "Semantic UI를 활용한 레이아웃 구현"
        ]
      }
    ]
  },
  experiences: {
    category: "Experience",
    contents: [
      {
        title: "코드스테이츠",
        term: "2019.01 - 2019.03 / 3개월",
        desc: "Full-stack Engineer",
        items: [
          "코드스테이츠 공식 웹사이트 및 관리자 사이트 개발",
          "코드스테이츠 프리코스 알고리즘 오프토이 교육 진행 및 질의응답 지원",
          "코드스테이츠 이머시브 프로그램 세션 교육 및 질의응답 지원"
        ]
      },
      {
        title: "카카오 / 카카오모빌리티",
        term: "2016.03 - 2018.05 / 2년 2개월",
        desc: "파킹TF / 사업기획팀 소속",
        items: [
          "카카오드라이버 담당. 공급자 확장 전략 수립 및 실행",
          "신규 온라인 신차 판매 & 시승 플랫폼 담당. 초기 서비스 설계 및 제휴 계약",
          "파킹TF 담당. 초기 서비스 설계와 공급자 확장 전략 수립 및 실행"
        ]
      },
      {
        title: "파킹스퀘어",
        term: "2014.04 - 2016.03 / 2년",
        desc: "전략기획팀 소속",
        items: [
          "대외 관계 전략 수립 및 실행",
          "유저 확장 전략 수립 및 실행",
          "핵심지표 설정 및 관리"
        ]
      }
    ]
  },
  education: {
    category: "Education",
    contents: [
      {
        title: "Code States",
        term: "2018.07 - 2018.12",
        // items: ["Advanced Software Engineering Immersive Program"]
        desc:
          "Pre Course & Advanced Software Engineering Immersive Program 수료"
      },
      {
        title: "성균관대학교 ",
        term: "2011.03 - 2016.02",
        // items: ["사회학 학사 편입"]
        desc: "사회학 학사 편입, 졸업"
      },
      {
        title: "한국외국어대학교 글로벌캠퍼스",
        term: "2008.03 - 2010.06",
        // items: [" 영어통번역학 학사, 중퇴"]
        desc: " 영어통번역학 학사, 중퇴"
      }
    ]
  }
};
