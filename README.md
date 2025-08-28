Genon UI Kit

- 이름: `@genon_ui/uikit`
- 번들: ESM + CJS + TypeScript 타입

설치 방법

- npm 레지스트리에서 설치(권장): `npm i @genon_ui/uikit`
- GitHub Release tarball로 설치: `npm i https://github.com/mindsandcompany/GenUI/releases/download/<TAG>/genon_ui-uikit-<VERSION>.tgz`
- 레포에서 직접 설치(테스트용): `npm i mindsandcompany/GenUI#<branch-or-tag>`
  - 주의: 일부 매니저는 Git 설치에서 devDeps 미설치로 `prepare` 실패 가능. 안되면 npm 사용 또는 tarball/퍼블리시 버전 사용.

사용 가이드(공통)

- 컴포넌트: `import { Button } from '@genon_ui/uikit'`
- Tailwind 프리셋: `presets: [require('@genon_ui/uikit/tailwind-preset')]`
- 전역 CSS(선택):
  - `@import '@genon_ui/uikit/src/styles/globals.css';`
  - `@import '@genon_ui/uikit/src/styles/typography.css';`
- 피어 의존성: React/ReactDOM 18+

Next.js 예시

- 설치: `npm i @genon_ui/uikit`
- `tailwind.config.js`
  - `presets: [require('@genon_ui/uikit/tailwind-preset')]`
  - `content`에 앱 경로 포함
- 글로벌 CSS: `@import '@genon_ui/uikit/styles/globals.css'`
- 사용: `import { Button } from '@genon_ui/uikit'`

로컬 빌드

- `npm run build` → `dist/` 생성(tsup, esm+cjs+dts)

자세한 사용 가이드

- GenOS app-front(Next.js) 예시와 트러블슈팅은 `docs/usage-app-front.md`를 참고하세요.
