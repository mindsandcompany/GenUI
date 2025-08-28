import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2022',
  treeshake: true,
  // 라이브러리 소비자 앱과 중복 번들 방지
  external: ['react', 'react-dom'],
})

