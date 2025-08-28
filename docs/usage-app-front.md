GenOS app-front에서 @genon_ui/uikit 사용 가이드

전제 조건

- Node >= 18
- React/ReactDOM >= 18
- TailwindCSS 사용 환경

설치

- npm: `npm i @genon_ui/uikit`
- yarn: `yarn add @genon_ui/uikit`

Tailwind 설정(tailwind.config.js)

module.exports = {
  presets: [require('@genon_ui/uikit/tailwind-preset')],
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {},
  plugins: [],
}

글로벌 CSS(app/globals.css 또는 src/app/globals.css)

@import '@genon_ui/uikit/styles/globals.css';
@import '@genon_ui/uikit/styles/typography.css';

컴포넌트 사용(app/page.tsx 예시)

import { Button, Input } from '@genon_ui/uikit'

export default function Page() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">GenOS UI Kit Demo</h1>
      <Button variant="primary">확인</Button>
      <Input placeholder="이메일" />
    </main>
  )
}

트러블슈팅

- 스타일이 적용되지 않음: `presets` 누락, `content` 경로 누락, 글로벌 CSS 미 import 여부 확인
- 설치 실패(Git 직접 설치): npm 사용 또는 Release tarball/퍼블리시 버전 사용
- 타입 미인식: 에디터/TS 서버 재시작
- React 버전 경고: React/ReactDOM 18 이상 확인
