# 홍설아 포트폴리오

Next.js, TypeScript, Tailwind CSS 기반의 취업용 웹 개발자 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인합니다.

## 수정해야 할 정보

`data/portfolio.ts`에서 아래 값을 본인 링크로 변경하세요.

```ts
export const profile = {
  github: "https://github.com/your-github-id",
  resume: "/resume.pdf",
};
```

프로젝트 GitHub 주소도 실제 저장소 주소로 바꾸세요.

```ts
links: {
  github: "https://github.com/your-github-id/donworry",
  demo: "#",
}
```

이력서 PDF를 연결하려면 `public/resume.pdf` 파일을 추가하세요.

## 페이지 구조

- `/` 메인 포트폴리오
- `/projects/donworry` DonWorry 프로젝트 상세
- `/projects/festival-road` 축제로 프로젝트 상세

## 배포

GitHub에 올린 뒤 Vercel에서 저장소를 Import 하면 됩니다.
