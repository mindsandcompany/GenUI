import '../src/styles/globals.css';

// Pretendard 웹폰트 로드
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css';
document.head.appendChild(link);

export const parameters = {
  controls: { expanded: true },
};
