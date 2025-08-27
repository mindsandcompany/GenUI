// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * className 병합 헬퍼
 * - clsx: 조건부 클래스
 * - twMerge: tailwind 중복 제거
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
