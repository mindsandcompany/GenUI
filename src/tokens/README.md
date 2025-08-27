# Genon UI Kit 디자인 토큰 시스템

Figma에서 추출한 타이포그래피와 컬러 디자인 토큰을 CSS 변수와 React 컴포넌트로 관리하는 통합 시스템입니다.

## 🎯 특징

- **통합 시스템**: 타이포그래피 + 컬러를 하나의 시스템으로 관리
- **Figma 연동**: Figma 변수에서 직접 추출한 정확한 값들
- **단순한 구조**: 복잡한 다중 호환성 없이 CSS 변수 기반
- **직관적인 사용**: CSS 클래스와 React 컴포넌트 모두 지원
- **실시간 동기화**: Figma 변경사항을 쉽게 반영 가능

## 📁 파일 구조

```
src/
├── styles/
│   ├── typography.css          # Figma 타이포그래피 CSS 변수
│   ├── colors.css             # Figma 컬러 CSS 변수
│   └── globals.css            # 메인 CSS 파일 (모든 토큰 임포트)
├── components/ui/data-display/
│   ├── typography.tsx         # 타이포그래피 React 컴포넌트
│   └── color-palette.tsx      # 컬러 팔레트 React 컴포넌트
└── stories/ui/
    ├── typography.stories.tsx # 타이포그래피 Storybook 스토리
    └── color-palette.stories.tsx # 컬러 팔레트 Storybook 스토리
```

## 🎨 사용법

## 📝 타이포그래피

### 1. CSS 클래스 직접 사용

```tsx
// 가장 간단한 방법
<h1 className="figma-display">큰 제목</h1>
<h2 className="figma-h1">중간 제목</h2>
<p className="figma-body-medium">본문 텍스트</p>
<span className="figma-caption">작은 설명</span>
```

### 2. React 컴포넌트 사용

```tsx
import { Typography, Display, H1, Body, Caption } from '@/components/ui/data-display';

// 기본 사용
<Typography variant="h1">제목</Typography>
<Typography variant="body-medium">본문</Typography>

// 편의 컴포넌트
<Display>큰 제목</Display>
<H1>제목 1</H1>
<Body weight="medium">중간 본문</Body>
<Caption>캡션</Caption>

// HTML 요소 변경
<Typography variant="h1" as="div">div로 렌더링</Typography>
```

## 🎨 컬러 시스템

### 1. 컬러 팔레트 컴포넌트 사용

```tsx
import { ColorPalette, defaultColorGroups } from '@/components/ui/data-display';

// 전체 컬러 팔레트 표시
<ColorPalette
  groups={defaultColorGroups}
  title="Design System Colors"
  description="프로젝트의 모든 컬러 토큰"
/>

// 브랜드 컬러만 표시
<ColorPalette
  groups={[defaultColorGroups[0]]}
  title="Brand Colors"
/>
```

### 2. CSS 변수로 컬러 사용

```tsx
// 인라인 스타일
<div style={{ backgroundColor: 'var(--color-brand-500)' }}>
  Primary Color Box
</div>

// CSS 클래스와 함께
<div className="p-4" style={{
  backgroundColor: 'var(--color-brand-50)',
  color: 'var(--color-brand-900)'
}}>
  Light background with dark text
</div>
```

### 3. Tailwind 클래스로 컬러 사용

```tsx
// tailwind.config.js에 설정된 컬러 사용
<div className="bg-brand-500 text-white p-4">
  Primary Background
</div>

<div className="bg-green-500 text-white p-2 rounded">
  Success State
</div>

<div className="bg-red-100 text-red-900 p-2 rounded">
  Error Background
</div>
```

### 4. CSS 변수 직접 사용

```css
.custom-button {
  background-color: var(--color-brand-500);
  color: var(--color-white);
  border: 2px solid var(--color-brand-700);
}

.custom-button:hover {
  background-color: var(--color-brand-600);
}

.success-message {
  background-color: var(--color-green-100);
  color: var(--color-green-900);
  border-left: 4px solid var(--color-green-500);
}
```

## 🎭 사용 가능한 타이포그래피 스타일

| 스타일      | CSS 클래스          | 크기 | 굵기 | 용도         |
| ----------- | ------------------- | ---- | ---- | ------------ |
| Display     | `figma-display`     | 32px | 700  | 가장 큰 제목 |
| Heading 1   | `figma-h1`          | 28px | 700  | 주요 제목    |
| Heading 2   | `figma-h2`          | 24px | 700  | 부제목       |
| Heading 3   | `figma-h3`          | 20px | 500  | 작은 제목    |
| Body Base   | `figma-body-base`   | 16px | 400  | 기본 본문    |
| Body Medium | `figma-body-medium` | 16px | 500  | 중간 본문    |
| Body Bold   | `figma-body-bold`   | 16px | 700  | 굵은 본문    |
| Sub Base    | `figma-sub-base`    | 14px | 400  | 기본 부제목  |
| Sub Medium  | `figma-sub-medium`  | 14px | 500  | 중간 부제목  |
| Sub Bold    | `figma-sub-bold`    | 14px | 700  | 굵은 부제목  |
| Caption     | `figma-caption`     | 12px | 400  | 작은 설명    |

## 🎨 사용 가능한 컬러 스타일

### 브랜드 컬러 (Brand Colors)

| 변수명    | CSS 변수            | 색상    | 용도                  |
| --------- | ------------------- | ------- | --------------------- |
| Brand 50  | `--color-brand-50`  | #e3f1ff | 가장 밝은 브랜드 색상 |
| Brand 500 | `--color-brand-500` | #2e90ff | 메인 브랜드 색상      |
| Brand 900 | `--color-brand-900` | #2d3dab | 가장 진한 브랜드 색상 |

### 의미적 컬러 (Semantic Colors)

| 색상군 | 주요 변수            | 대표 색상 | 용도            |
| ------ | -------------------- | --------- | --------------- |
| Green  | `--color-green-500`  | #28c76f   | 성공, 승인 상태 |
| Yellow | `--color-yellow-500` | #ed8936   | 경고, 주의 상태 |
| Red    | `--color-red-500`    | #ff4c51   | 오류, 위험 상태 |
| Blue   | `--color-blue-500`   | #00bad1   | 정보, 링크 상태 |

### 중성 컬러 (Neutral Colors)

| 변수명      | CSS 변수              | 색상    | 용도          |
| ----------- | --------------------- | ------- | ------------- |
| White       | `--color-white`       | #ffffff | 배경, 텍스트  |
| Neutral 100 | `--color-neutral-100` | #f2f2f2 | 밝은 배경     |
| Neutral 500 | `--color-neutral-500` | #949494 | 중간톤 텍스트 |
| Neutral 900 | `--color-neutral-900` | #1a1a1a | 진한 텍스트   |

### 반투명 컬러 (Tint Colors)

| 변수명        | CSS 변수                     | 투명도 | 용도           |
| ------------- | ---------------------------- | ------ | -------------- |
| Primary Light | `--color-tint-primary-light` | 16%    | 버튼 호버 효과 |
| Primary Main  | `--color-tint-primary-main`  | 24%    | 선택 상태 배경 |
| Neutral Light | `--color-tint-neutral-light` | 16%    | 카드 배경      |

## 🔧 CSS 변수 목록

### 폰트 패밀리

- `--figma-font-family`: Pretendard, system-ui, sans-serif

### 폰트 크기

- `--figma-font-size-10` ~ `--figma-font-size-32`

### 폰트 굵기

- `--figma-font-weight-400`, `--figma-font-weight-500`, `--figma-font-weight-700`

### 줄 높이

- `--figma-line-height-16` ~ `--figma-line-height-40`

### 자간

- `--figma-letter-spacing-0`, `--figma-letter-spacing-n2`, `--figma-letter-spacing-heading1` 등

### 컬러 변수

#### 브랜드 컬러

- `--color-brand-50` ~ `--color-brand-900`: 브랜드 컬러 10단계
- `--color-white`: 순수 흰색

#### 중성 컬러

- `--color-neutral-50` ~ `--color-neutral-900`: 회색조 10단계

#### 의미적 컬러

- `--color-blue-100` ~ `--color-blue-900`: 정보/링크 블루 9단계
- `--color-green-100` ~ `--color-green-900`: 성공 그린 9단계
- `--color-yellow-100` ~ `--color-yellow-900`: 경고 옐로우/오렌지 9단계
- `--color-red-100` ~ `--color-red-900`: 오류 레드 9단계

#### 반투명 컬러

- `--color-tint-primary-lighter` ~ `--color-tint-primary-darker`: 프라이머리 반투명 5단계
- `--color-tint-neutral-lighter` ~ `--color-tint-neutral-darker`: 중성 반투명 5단계
- `--color-tint-blue-*`, `--color-tint-green-*`, `--color-tint-orange-*`, `--color-tint-red-*`: 각 의미적 컬러의 반투명 버전

#### 텍스트 컬러

- `--color-text-default`: 기본 텍스트 컬러

## 📱 실제 사용 예시

### 카드 컴포넌트

```tsx
<div className='max-w-md p-6 bg-white border border-gray-200 rounded-lg'>
  <h1 className='figma-display mb-4'>제품 소개</h1>
  <h2 className='figma-h2 mb-3'>새로운 기능</h2>
  <p className='figma-body-medium mb-4'>
    사용자 경험을 개선하고 새로운 기능들을 추가했습니다.
  </p>
  <span className='figma-caption text-gray-500'>2024년 1월 15일</span>
</div>
```

### React 컴포넌트로 구현

```tsx
<div className='max-w-md p-6 bg-white border border-gray-200 rounded-lg'>
  <Display className='mb-4'>제품 소개</Display>
  <H2 className='mb-3'>새로운 기능</H2>
  <Body weight='medium' className='mb-4'>
    사용자 경험을 개선하고 새로운 기능들을 추가했습니다.
  </Body>
  <Caption className='text-gray-500'>2024년 1월 15일</Caption>
</div>
```

### 컬러와 함께 사용하는 알림 컴포넌트

```tsx
// 성공 알림
<div
  className='p-4 rounded-lg border-l-4'
  style={{
    backgroundColor: 'var(--color-green-100)',
    borderLeftColor: 'var(--color-green-500)',
    color: 'var(--color-green-900)'
  }}
>
  <H3 className='mb-2'>성공!</H3>
  <Body>데이터가 성공적으로 저장되었습니다.</Body>
</div>

// 경고 알림
<div
  className='p-4 rounded-lg border-l-4'
  style={{
    backgroundColor: 'var(--color-yellow-100)',
    borderLeftColor: 'var(--color-yellow-500)',
    color: 'var(--color-yellow-900)'
  }}
>
  <H3 className='mb-2'>주의!</H3>
  <Body>이 작업은 되돌릴 수 없습니다.</Body>
</div>

// 오류 알림
<div
  className='p-4 rounded-lg border-l-4'
  style={{
    backgroundColor: 'var(--color-red-100)',
    borderLeftColor: 'var(--color-red-500)',
    color: 'var(--color-red-900)'
  }}
>
  <H3 className='mb-2'>오류 발생</H3>
  <Body>네트워크 연결을 확인해주세요.</Body>
</div>
```

### 버튼 컴포넌트 예시

```tsx
// 프라이머리 버튼
<button
  className='px-6 py-3 rounded-lg transition-colors'
  style={{
    backgroundColor: 'var(--color-brand-500)',
    color: 'var(--color-white)'
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'var(--color-brand-600)'
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'var(--color-brand-500)'
  }}
>
  <Body weight='medium' className='text-inherit'>
    Primary Button
  </Body>
</button>

// 세컨더리 버튼
<button
  className='px-6 py-3 rounded-lg border-2 transition-colors'
  style={{
    backgroundColor: 'var(--color-tint-primary-lighter)',
    borderColor: 'var(--color-brand-500)',
    color: 'var(--color-brand-700)'
  }}
>
  <Body weight='medium' className='text-inherit'>
    Secondary Button
  </Body>
</button>
```

### 컬러 팔레트 문서화

```tsx
import { ColorPalette, defaultColorGroups } from '@/components/ui/data-display';

// 디자인 시스템 문서에 컬러 팔레트 표시
<div className='space-y-8'>
  <div>
    <Display>Genon Design System</Display>
    <Body className='mt-2 text-gray-600'>
      우리 프로젝트의 통일된 디자인 언어
    </Body>
  </div>

  <ColorPalette
    groups={defaultColorGroups}
    title='컬러 시스템'
    description='모든 UI 요소에서 사용되는 컬러 팔레트'
  />
</div>;
```

## 🚀 장점

1. **통합 관리**: 타이포그래피와 컬러를 하나의 시스템으로 관리
2. **간단함**: 복잡한 설정 없이 바로 사용 가능
3. **일관성**: Figma와 완벽하게 동기화된 디자인
4. **유연성**: CSS 클래스, React 컴포넌트, CSS 변수 모두 지원
5. **유지보수**: Figma에서 값 변경 시 CSS만 수정하면 전체 반영
6. **성능**: CSS 변수로 런타임 다크모드 등 테마 변경 가능
7. **확장성**: 새로운 컬러나 타이포그래피 스타일 쉽게 추가

## 🔄 업데이트 방법

Figma에서 디자인 토큰이 변경되면:

### 타이포그래피 업데이트

1. `src/styles/typography.css` 파일의 CSS 변수 값 수정
2. 새로운 타이포그래피 스타일이 있다면 유틸리티 클래스 추가
3. Typography 컴포넌트에 새로운 variant 추가

### 컬러 업데이트

1. `src/styles/colors.css` 파일의 CSS 변수 값 수정
2. `tailwind.config.js`의 컬러 설정 업데이트 (필요시)
3. `defaultColorGroups`에 새로운 컬러 추가

### 테스트

4. Storybook에서 변경사항 확인
5. 새로운 스타일이나 컬러를 사용하는 컴포넌트 테스트

## 📚 추가 자료

### Storybook 스토리

- [Typography 컴포넌트 스토리](../stories/ui/typography.stories.tsx)
- [Color Palette 컴포넌트 스토리](../stories/ui/color-palette.stories.tsx)

### 디자인 시스템 파일

- [Typography CSS 변수](../styles/typography.css)
- [Color CSS 변수](../styles/colors.css)
- [Tailwind 설정](../../tailwind.config.js)

### 참고 문서

- [Figma 변수 추출 가이드](./figma-extraction.md) (예정)
- [CSS 변수 활용법](./css-variables.md) (예정)
- [컬러 시스템 가이드](./color-system.md) (예정)
