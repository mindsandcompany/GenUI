import React from 'react';
import { cn } from '@/lib/utils';

/**
 * 컬러 정보를 나타내는 인터페이스
 */
interface ColorInfo {
  name: string;
  value: string;
  cssVar: string;
}

/**
 * 컬러 그룹 정보를 나타내는 인터페이스
 */
interface ColorGroup {
  title: string;
  description?: string;
  colors: ColorInfo[];
}

/**
 * 개별 컬러 스와치를 보여주는 컴포넌트의 Props
 */
interface ColorSwatchProps {
  color: ColorInfo;
  size?: 'sm' | 'md' | 'lg';
  showInfo?: boolean;
  className?: string;
}

/**
 * 컬러 팔레트 컴포넌트의 Props
 */
interface ColorPaletteProps {
  groups: ColorGroup[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * 개별 컬러 스와치를 보여주는 컴포넌트 (Figma 디자인 기반)
 */
function ColorSwatch({
  color,
  size = 'md',
  showInfo = true,
  className,
}: ColorSwatchProps) {
  // Figma 스타일: 120px x 120px 고정 크기
  const cardSize = 'w-[120px] h-[120px]';

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  // 배경 색상의 밝기에 따른 텍스트 색상 결정
  const getTextColor = (hexColor: string) => {
    // hex에서 RGB 추출
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // 밝기 계산 (0-255)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // 밝기가 150 이상이면 진한 색상, 이하면 흰색
    return brightness > 150 ? '#6c6c6c' : '#ffffff';
  };

  const textColor = getTextColor(color.value);

  return (
    <div className={cn('flex flex-col', className)}>
      <div
        className={cn(
          'flex flex-col justify-between cursor-pointer transition-opacity hover:opacity-80',
          'px-3 py-4', // Figma 패딩
          cardSize
        )}
        style={{
          backgroundColor: `var(${color.cssVar}, ${color.value})`,
          color: textColor,
        }}
        onClick={() => handleCopyToClipboard(color.value)}
        title={`${color.value} 클릭하여 복사`}
      >
        <div className='font-bold text-base leading-6 whitespace-nowrap'>
          {color.name}
        </div>
        <div className='text-sm leading-6 whitespace-nowrap'>
          {color.value.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

/**
 * 컬러 그룹을 보여주는 컴포넌트
 */
function ColorGroup({ group }: { group: ColorGroup }) {
  if (!group || !Array.isArray(group.colors)) {
    return (
      <div className='text-center text-gray-500 py-4'>
        잘못된 그룹 데이터입니다.
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold text-gray-900'>{group.title}</h3>
        {group.description && (
          <p className='text-sm text-gray-600'>{group.description}</p>
        )}
      </div>
      <div className='flex gap-3 overflow-x-auto'>
        {group.colors.map((color) => (
          <ColorSwatch key={color.cssVar} color={color} />
        ))}
      </div>
    </div>
  );
}

/**
 * 컬러 팔레트를 보여주는 메인 컴포넌트
 */
export function ColorPalette({
  groups = [],
  title = 'Color Palette',
  description,
  className,
}: ColorPaletteProps) {
  return (
    <div className={cn('space-y-8', className)}>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h2>
        {description && <p className='text-gray-600'>{description}</p>}
      </div>

      <div className='space-y-8'>
        {Array.isArray(groups) && groups.length > 0 ? (
          groups.map((group, index) => <ColorGroup key={index} group={group} />)
        ) : (
          <div className='text-center text-gray-500 py-8'>
            컬러 그룹이 없습니다. groups prop을 확인해주세요.
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 기본 컬러 팔레트 데이터
 */
export const defaultColorGroups: ColorGroup[] = [
  {
    title: 'Brand Colors',
    description: '브랜드의 주요 컬러입니다.',
    colors: [
      { name: '50', value: '#e3f1ff', cssVar: '--color-brand-50' },
      { name: '100', value: '#bcdcff', cssVar: '--color-brand-100' },
      { name: '200', value: '#91c7ff', cssVar: '--color-brand-200' },
      { name: '300', value: '#64b1ff', cssVar: '--color-brand-300' },
      { name: '400', value: '#45a0ff', cssVar: '--color-brand-400' },
      { name: '500', value: '#2e90ff', cssVar: '--color-brand-500' },
      { name: '600', value: '#3181f2', cssVar: '--color-brand-600' },
      { name: '700', value: '#316fde', cssVar: '--color-brand-700' },
      { name: '800', value: '#305dcb', cssVar: '--color-brand-800' },
      { name: '900', value: '#2d3dab', cssVar: '--color-brand-900' },
    ],
  },
  {
    title: 'Neutral Colors',
    description: '중성적인 컬러로 텍스트, 배경 등에 사용됩니다.',
    colors: [
      { name: 'White', value: '#ffffff', cssVar: '--color-white' },
      { name: '50', value: '#f9f9f9', cssVar: '--color-neutral-50' },
      { name: '100', value: '#f2f2f2', cssVar: '--color-neutral-100' },
      { name: '200', value: '#e8e8e8', cssVar: '--color-neutral-200' },
      { name: '300', value: '#d8d8d8', cssVar: '--color-neutral-300' },
      { name: '400', value: '#b4b4b4', cssVar: '--color-neutral-400' },
      { name: '500', value: '#949494', cssVar: '--color-neutral-500' },
      { name: '600', value: '#6c6c6c', cssVar: '--color-neutral-600' },
      { name: '700', value: '#595959', cssVar: '--color-neutral-700' },
      { name: '800', value: '#3a3a3a', cssVar: '--color-neutral-800' },
      { name: '900', value: '#1a1a1a', cssVar: '--color-neutral-900' },
    ],
  },
  {
    title: 'Blue Colors',
    description: '정보 전달이나 액션에 사용되는 블루 컬러입니다.',
    colors: [
      { name: '100', value: '#ccf1f6', cssVar: '--color-blue-100' },
      { name: '200', value: '#99e3ed', cssVar: '--color-blue-200' },
      { name: '300', value: '#66d6e3', cssVar: '--color-blue-300' },
      { name: '400', value: '#33c8da', cssVar: '--color-blue-400' },
      { name: '500', value: '#00bad1', cssVar: '--color-blue-500' },
      { name: '600', value: '#00a7bc', cssVar: '--color-blue-600' },
      { name: '700', value: '#009eb2', cssVar: '--color-blue-700' },
      { name: '800', value: '#0095a7', cssVar: '--color-blue-800' },
      { name: '900', value: '#008c9d', cssVar: '--color-blue-900' },
    ],
  },
  {
    title: 'Green Colors',
    description: '성공 상태나 긍정적인 액션에 사용되는 그린 컬러입니다.',
    colors: [
      { name: '100', value: '#d4f4e2', cssVar: '--color-green-100' },
      { name: '200', value: '#a9e9c5', cssVar: '--color-green-200' },
      { name: '300', value: '#7edda9', cssVar: '--color-green-300' },
      { name: '400', value: '#53d28c', cssVar: '--color-green-400' },
      { name: '500', value: '#28c76f', cssVar: '--color-green-500' },
      { name: '600', value: '#24b364', cssVar: '--color-green-600' },
      { name: '700', value: '#22a95e', cssVar: '--color-green-700' },
      { name: '800', value: '#209f59', cssVar: '--color-green-800' },
      { name: '900', value: '#1e9553', cssVar: '--color-green-900' },
    ],
  },
  {
    title: 'Yellow/Orange Colors',
    description: '경고나 주의 상태에 사용되는 옐로우/오렌지 컬러입니다.',
    colors: [
      { name: '100', value: '#fffaf0', cssVar: '--color-yellow-100' },
      { name: '200', value: '#feebc8', cssVar: '--color-yellow-200' },
      { name: '300', value: '#fbd38d', cssVar: '--color-yellow-300' },
      { name: '400', value: '#f6ad55', cssVar: '--color-yellow-400' },
      { name: '500', value: '#ed8936', cssVar: '--color-yellow-500' },
      { name: '600', value: '#dd6b20', cssVar: '--color-yellow-600' },
      { name: '700', value: '#c05621', cssVar: '--color-yellow-700' },
      { name: '800', value: '#9c4221', cssVar: '--color-yellow-800' },
      { name: '900', value: '#7b341e', cssVar: '--color-yellow-900' },
    ],
  },
  {
    title: 'Red Colors',
    description: '오류나 위험 상태에 사용되는 레드 컬러입니다.',
    colors: [
      { name: '100', value: '#ffdbdc', cssVar: '--color-red-100' },
      { name: '200', value: '#ffb7b9', cssVar: '--color-red-200' },
      { name: '300', value: '#ff9497', cssVar: '--color-red-300' },
      { name: '400', value: '#ff7074', cssVar: '--color-red-400' },
      { name: '500', value: '#ff4c51', cssVar: '--color-red-500' },
      { name: '600', value: '#e64449', cssVar: '--color-red-600' },
      { name: '700', value: '#d94145', cssVar: '--color-red-700' },
      { name: '800', value: '#cc3d41', cssVar: '--color-red-800' },
      { name: '900', value: '#bf383d', cssVar: '--color-red-900' },
    ],
  },
];

export type { ColorInfo, ColorGroup, ColorPaletteProps };
