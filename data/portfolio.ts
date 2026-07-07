export type ProjectRepository = {
  label: string;
  url: string;
};

export type ProjectDemoAccount = {
  role: string;
  id: string;
  password: string;
};

export type Project = {
  slug: string;
  name: string;
  label: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  positionTitle: string;
  positionDescription: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  contribution: string[];
  tech: string[];
  features: string[];
  flow: string[];
  troubleShooting: {
    title: string;
    issue: string;
    cause: string;
    solution: string;
    learned: string;
  }[];
  links: {
    repositories: ProjectRepository[];
    demo?: string;
    demoLabel?: string;
    demoNote?: string;
    demoAccounts?: ProjectDemoAccount[];
    detail?: string;
    detailLabel?: string;
  };
};

export const profile = {
  name: "홍설아",
  title: "Junior Full-Stack Web Developer",
  headline: "비즈니스 흐름을 코드로 구현하는 개발자",
  description:
    "행정 실무에서 다진 일정 관리와 문서화 경험을 바탕으로 Java/Spring, React 기반 웹 서비스를 기획부터 구현까지 수행했습니다.",
  email: "chlo01233@gmail.com",
  github: "https://github.com/chlo01233-png",
  keywords: ["Java", "Spring", "React", "Oracle DB", "REST API", "Team Project"],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Solving", href: "#problem-solving" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Team Projects", value: "2" },
  { label: "Project Leader", value: "2회" },
  { label: "Main Stack", value: "Java · Spring · React" },
];

export const strengths = [
  {
    title: "서비스 흐름 기반 설계",
    description:
      "기능 목록보다 사용자가 진입하고 결과를 확인하는 흐름을 먼저 정리한 뒤 화면과 API를 연결했습니다.",
  },
  {
    title: "Spring 웹 서비스 구현",
    description:
      "Spring MVC, Spring Boot, Oracle DB를 활용해 회원, 급여 계산, 커뮤니티, 관리자 기능을 구현했습니다.",
  },
  {
    title: "React와 API 연동",
    description:
      "React 상태 관리와 Axios 요청 흐름을 정리하고, 백엔드 REST API와 화면 데이터를 연결했습니다.",
  },
  {
    title: "원인 중심 문제 해결",
    description:
      "데이터 누락, 인증 상태 초기화, 외부 API 필드 누락 등 구현 과정의 오류를 재현하고 원인 기준으로 수정했습니다.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Vite", "JavaScript", "JSP", "JSTL", "HTML", "CSS", "Tailwind CSS", "jQuery"],
    description: "컴포넌트 기반 화면 구성, 입력값 검증, 상태 관리, API 연동, 반응형 UI 구현 경험이 있습니다.",
  },
  {
    category: "Backend",
    items: ["Java", "Spring Framework", "Spring Boot", "REST API", "Spring Security", "JWT", "MyBatis", "JDBC", "JdbcTemplate"],
    description: "Controller-Service-DAO/Mapper 계층을 기준으로 인증, 회원, 커뮤니티, 관리자, 계산 로직을 구현했습니다.",
  },
  {
    category: "Database",
    items: ["Oracle DB", "SQL", "ERD"],
    description: "회원, 근무 내역, 공고, 지원자, 커뮤니티 데이터를 관계형 구조로 설계하고 SQL로 조회·처리했습니다.",
  },
  {
    category: "API / Infra / Tools",
    items: ["TourAPI", "Kakao Map API", "Weather API", "Kakao Login", "Naver Login", "GCP", "Firebase Hosting", "Git", "GitHub", "Postman"],
    description: "외부 API 연동, 이미지 저장소, 배포 환경 설정, GitHub 협업, API 테스트를 프로젝트에 적용했습니다.",
  },
];

export const projects: Project[] = [
  {
    slug: "donworry",
    name: "DonWorry",
    label: "1차 팀 프로젝트",
    subtitle: "스마트 급여 정산 및 커뮤니티 플랫폼",
    period: "2026.03.27 – 2026.04.17 / 22일",
    team: "4명 / Team DonWorry",
    role: "Project Leader · 급여 계산 · 근무 캘린더 · 기업회원/지원자 관리",
    positionTitle: "Project Leader",
    positionDescription:
      "요구사항 정리와 일정 조율을 맡고, 급여 계산·근무 캘린더·기업회원/지원자 관리 흐름을 구현했습니다.",
    summary:
      "아르바이트생의 근무 일정과 급여 계산, 사업자의 공고·지원자 관리를 한 서비스로 묶은 Spring MVC 기반 플랫폼입니다.",
    problem:
      "근무 시간과 수당 조건을 수기로 계산해야 했고, 사업자는 공고 등록과 지원자 확인을 별도 흐름으로 관리해야 했습니다.",
    solution:
      "근무지를 등록하고 캘린더에 근무 내역을 입력하면 월별 급여가 계산되도록 구성했습니다. 개인회원과 기업회원의 마이페이지를 분리해 구직·공고·지원자 데이터를 역할별로 관리했습니다.",
    result:
      "근무 관리, 급여명세서, 구인구직, 커뮤니티, 고객지원, 관리자 기능을 포함한 Spring MVC 웹 서비스를 완성했습니다.",
    contribution: [
      "프로젝트 리더로 일정 관리, 요구사항 정리, 기능 우선순위 조율 담당",
      "근무 시간·휴게 시간·야간/연장/주휴수당 기준의 급여 계산 로직 설계",
      "FullCalendar 기반 근무 등록·상세 조회·수정·삭제 흐름 구현",
      "기업회원 공고 조회, 지원자 목록, 지원 현황 관리 기능 구현",
      "JSP와 JavaScript 데이터 전달 오류, 금액 포맷팅 누락, 캘린더 상세 조회 오류 개선",
    ],
    tech: ["Java", "Spring MVC", "JSP", "JSTL", "Oracle DB", "JDBC", "JdbcTemplate", "FullCalendar", "JavaScript", "jQuery", "GitHub"],
    features: [
      "개인회원/기업회원 유형 분리 회원가입 및 로그인",
      "이메일 인증 기반 회원가입과 비밀번호 찾기",
      "회원 유형별 마이페이지와 프로필 관리",
      "근무지 등록·수정·삭제 및 근무지별 시급 관리",
      "FullCalendar 기반 근무 일정 등록·조회·수정·삭제",
      "근무 시간, 휴게 시간, 수당 조건 기반 월별 급여 계산",
      "기업회원 구인공고 등록 및 개인회원 공고 지원",
      "지원자 목록과 지원 현황 관리",
      "게시글, 댓글, 대댓글, Toast UI Editor 기반 커뮤니티",
      "회원, 게시글, 문의, FAQ를 관리하는 관리자 페이지",
    ],
    flow: [
      "회원 유형 선택",
      "근무지 또는 구인공고 등록",
      "캘린더에 근무 일정 입력",
      "근무 시간과 수당 조건 계산",
      "월별 급여명세서 조회",
      "지원자·커뮤니티·관리자 기능 이용",
    ],
    troubleShooting: [
      {
        title: "급여 계산 기준 정리 및 오차 개선",
        issue: "근무 시간, 휴게 시간, 야간·연장 수당 조건에 따라 급여 결과가 예상값과 다르게 출력되었습니다.",
        cause: "화면 입력값과 SQL 조회 결과의 시간 기준이 일관되지 않았고, 시간 단위 변환 과정에서 오차가 발생했습니다.",
        solution: "계산 기준을 분 단위로 통일하고 JavaScript 계산 로직과 Oracle SQL 조회 결과를 함께 검증했습니다.",
        learned: "계산 로직은 화면 출력보다 기준 정의와 데이터 흐름 검증이 먼저 정리되어야 안정적으로 동작했습니다.",
      },
      {
        title: "JSP와 JavaScript 데이터 전달 오류 해결",
        issue: "컨트롤러에서 JSP로 전달한 List 객체를 JavaScript에서 직접 참조하면서 dto is not defined 오류가 발생했습니다.",
        cause: "서버 렌더링 값과 클라이언트 변수의 실행 범위를 혼동해 브라우저에서 해석할 수 없는 값이 남았습니다.",
        solution: "JSP EL로 필요한 값만 JavaScript 변수에 치환하고, 지원자 수 기반 조건문을 별도 로직으로 분리했습니다.",
        learned: "JSP 화면에서는 서버 데이터와 클라이언트 스크립트의 실행 시점을 분리해 설계해야 했습니다.",
      },
      {
        title: "근무 상세 조회 모달 오류 개선",
        issue: "캘린더에서 근무 상세 모달을 열 때 value is not defined 오류로 상세 데이터가 표시되지 않았습니다.",
        cause: "모달 데이터를 채우는 함수에서 선언되지 않은 변수를 참조했고, 전달 파라미터와 지역 변수명이 충돌했습니다.",
        solution: "파라미터 구조와 변수명을 다시 정리하고 null 체크와 기본값 처리를 추가해 조회·수정 화면을 안정화했습니다.",
        learned: "모달 UI는 조회, 수정, 삭제 상태를 분리하고 비어 있는 데이터까지 기준을 잡아야 오류를 줄일 수 있었습니다.",
      },
    ],
    links: {
      repositories: [{ label: "GitHub", url: "https://github.com/chlo01233-png/Project_DonWorry" }],
      demo: "http://54.180.115.252/",
      demoLabel: "Demo Site",
      demoNote: "현재 운영 중단 상태이며, URL 접속만 가능합니다.",
      detail: "/docs/project-DonWorry(Team_DonWorry).pdf",
      detailLabel: "PDF 상세 보기",
    },
  },
  {
    slug: "festival-road",
    name: "축제로",
    label: "2차 팀 프로젝트",
    subtitle: "생성형 AI 기반 맞춤형 여행 추천 및 지역 축제 통합 플랫폼",
    period: "2026.05.19 – 2026.06.25 / 38일",
    team: "3명 / FestaRoute",
    role: "Project Leader · 요구사항 정의 · 사용자 흐름 설계 · 회원/커뮤니티 기능 통합",
    positionTitle: "Project Leader",
    positionDescription:
      "요구사항 정의, 사용자 흐름 설계, 회원/커뮤니티 기능 통합, API 요청·응답 정리를 담당했습니다.",
    summary:
      "전국 지역축제 정보를 검색하고, 관심 지역·테마·활동 데이터를 바탕으로 축제와 여행 코스를 추천하는 React/Spring Boot 기반 서비스입니다.",
    problem:
      "축제 정보가 여러 서비스에 흩어져 있어 비교가 어렵고, 사용자가 일정과 관심사에 맞는 축제를 찾기까지 탐색 비용이 컸습니다.",
    solution:
      "TourAPI, 지도, 날씨, 소셜 로그인, 사용자 관심 데이터를 연결하고 관심 지역·테마 기반 추천과 AI 여행 플래너 흐름을 설계했습니다.",
    result:
      "축제 검색, 상세 조회, 지도/길찾기, 날씨, 찜, 커뮤니티, 실시간 채팅, AI 추천, 관리자 기능을 포함한 풀스택 서비스를 완성했습니다.",
    contribution: [
      "프로젝트 리더로 일정 관리, 요구사항 정의, 기능 조율, 발표·문서 정리 담당",
      "회원가입 → 관심 지역/테마 선택 → 추천 → 상세 조회 → 커뮤니티로 이어지는 사용자 흐름 설계",
      "회원/커뮤니티 기능 통합과 API 요청·응답 형식 문서화",
      "다단계 회원가입에서 관심 지역·테마 데이터 누락 문제 해결",
      "외부 API 누락 데이터와 JWT 인증 상태 유지 문제를 고려한 예외 처리 흐름 정리",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Zustand", "Axios", "Spring Boot", "Spring Security", "JWT", "MyBatis", "Oracle DB", "WebSocket", "TourAPI", "Kakao Map API", "Weather API", "GCP", "Firebase Hosting"],
    features: [
      "일반 회원가입, 이메일 인증, Kakao/Naver 소셜 로그인",
      "가입 단계의 관심 지역·관심 테마 선택 및 저장",
      "지역·날짜·키워드 기반 축제 통합 검색",
      "인기순·진행 중·마감 임박 축제 카드 제공",
      "축제 상세 정보, 주변 관광지·맛집, 날씨, 지도/길찾기 연동",
      "관심 데이터, 검색, 조회, 찜, 후기 기반 맞춤형 축제 추천",
      "AI 여행 플래너를 통한 시간대별 하루 코스 제안",
      "게시글, 댓글, 좋아요, 신고, 동행 모집, WebSocket 실시간 채팅",
      "회원, 축제 데이터, 게시글, 신고, 문의, 통계 관리자 페이지",
    ],
    flow: [
      "관심 지역·테마와 검색 조건 입력",
      "React 상태관리와 Axios 요청 처리",
      "Spring Boot에서 권한 확인 및 외부 API 호출",
      "Oracle DB와 GCP Storage에 데이터 저장",
      "검색 결과, 상세 정보, AI 추천 결과 제공",
      "커뮤니티와 관리자 화면으로 서비스 운영",
    ],
    troubleShooting: [
      {
        title: "다단계 회원가입 관심 데이터 누락 해결",
        issue: "기본 회원정보는 저장되지만 관심 지역과 관심 테마 값이 최종 요청에 포함되지 않았습니다.",
        cause: "회원 기본정보는 전역 상태에, 관심 선택값은 화면 지역 상태에 분리되어 있었고 백엔드 DTO에도 목록 필드가 부족했습니다.",
        solution: "Zustand의 signupData와 selectedRegions/selectedThemes를 finalData로 병합하고 MemberDTO에 List<String> 필드를 추가했습니다.",
        learned: "프론트엔드 상태 구조와 백엔드 요청 객체의 데이터 계약을 맞춰야 기능이 안정적으로 동작했습니다.",
      },
      {
        title: "TourAPI 응답 데이터 불규칙성 대응",
        issue: "축제별로 대표 이미지, 소개, 홈페이지, 좌표 등 일부 필드가 없어 상세 페이지 렌더링 중 null 값이 발생했습니다.",
        cause: "외부 API 데이터가 모든 축제에서 동일한 구조로 제공되지 않았고, 빈 문자열과 누락 필드가 섞여 있었습니다.",
        solution: "contentId 기준 상세 요청 결과를 공통 응답 모델로 정리하고, null/빈 문자열 검사와 대체 이미지·기본 안내 문구를 적용했습니다.",
        learned: "외부 API 연동은 정상 응답뿐 아니라 필드 누락, 빈 값, 좌표 오류까지 함께 처리해야 했습니다.",
      },
      {
        title: "JWT 로그인 상태 유지 문제 해결",
        issue: "페이지 새로고침 후 로그인 상태가 초기화되거나 보호 API 요청에서 401 응답이 발생했습니다.",
        cause: "JWT가 메모리 상태에만 있거나 Axios 요청 헤더에 일관되게 포함되지 않았습니다.",
        solution: "토큰과 최소 회원정보를 복원하도록 상태 저장 구조를 정리하고, Axios 인터셉터에서 Authorization 헤더를 공통 적용했습니다.",
        learned: "인증 기능은 로그인 성공뿐 아니라 새로고침, 보호 라우트 접근, API 요청 실패까지 함께 고려해야 했습니다.",
      },
    ],
    links: {
      repositories: [
        { label: "React GitHub", url: "https://github.com/chlo01233-png/FestaRoute_React" },
        { label: "Spring GitHub", url: "https://github.com/chlo01233-png/FestaRoute_Spring" },
      ],
      demo: "https://festaroute.site/",
      demoLabel: "Live Demo",
      demoAccounts: [
        { role: "일반회원", id: "test1234", password: "test1234" },
        { role: "관리자", id: "admin", password: "admin" },
      ],
      detail: "/docs/project-Chukjero(FestaRoute).pdf",
      detailLabel: "PDF 상세 보기",
    },
  },
];

export const problemSolving = [
  {
    title: "급여 계산 기준 정리",
    description:
      "근무 시간, 휴게 시간, 야간·연장 수당 조건을 분 단위 기준으로 통일하고 계산 결과를 검증했습니다.",
  },
  {
    title: "다단계 회원가입 데이터 누락 해결",
    description:
      "React 전역 상태와 화면 지역 상태에 나뉘어 있던 관심 지역·테마 값을 최종 요청 객체로 병합했습니다.",
  },
  {
    title: "외부 API 응답 예외 처리",
    description:
      "TourAPI 상세 정보에서 이미지, 좌표, 홈페이지 값이 누락되는 상황을 고려해 공통 응답 모델과 기본값을 적용했습니다.",
  },
  {
    title: "JWT 인증 상태 복원",
    description:
      "새로고침 후 로그인 상태가 초기화되는 문제를 해결하기 위해 저장 구조와 Axios 공통 헤더 처리를 정리했습니다.",
  },
];

export const career = [
  {
    period: "2025.12 – 2026.07",
    title: "자바 풀스택 & 생성형 AI 서비스 개발 과정",
    description: "Java, Spring, Oracle DB, JSP, React, GitHub 기반 웹 서비스 구현과 팀 프로젝트를 수행했습니다.",
  },
  {
    period: "2025.03 – 2025.11",
    title: "아일랜드 근무 · 고객응대 및 매장관리",
    description: "다양한 국적의 동료와 협업하며 영어 커뮤니케이션과 새로운 환경에 적응하는 경험을 쌓았습니다.",
  },
  {
    period: "2020.01 – 2024.05",
    title: "괴산군청 · 예산/계약/기업지원 업무",
    description: "예산 관리, 공사·물품 계약, 기업지원사업을 수행하며 일정 관리와 문서화, 협업 역량을 쌓았습니다.",
  },
];
