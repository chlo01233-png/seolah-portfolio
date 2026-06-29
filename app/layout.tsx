import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "홍설아 | Web Developer Portfolio",
  description: "사용자의 문제를 기능으로 구현하는 웹 개발자 홍설아의 취업용 포트폴리오입니다.",
  openGraph: {
    title: "홍설아 | Web Developer Portfolio",
    description: "DonWorry와 축제로 프로젝트를 중심으로 한 웹 개발자 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
