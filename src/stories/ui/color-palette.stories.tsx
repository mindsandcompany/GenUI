import type { Meta, StoryObj } from '@storybook/react';
import {
  ColorPalette,
  defaultColorGroups,
} from '@/components/ui/data-display/color-palette';

const meta: Meta<typeof ColorPalette> = {
  title: 'UI/Data Display/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Figma 디자인 시스템에서 추출한 컬러 팔레트 컴포넌트입니다. 120px 정사각형 카드 형태로, 각 컬러를 클릭하면 HEX 코드가 클립보드에 복사됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    groups: {
      description: '표시할 컬러 그룹들의 배열',
    },
    title: {
      description: '팔레트의 제목',
      control: 'text',
    },
    description: {
      description: '팔레트의 설명',
      control: 'text',
    },
    className: {
      description: '추가 CSS 클래스',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 컬러 팔레트입니다.
 * Figma에서 추출한 모든 디자인 토큰 컬러를 120px 카드 형태로 보여줍니다.
 */
export const Default: Story = {
  args: {
    groups: defaultColorGroups,
    title: 'Genon Design System Colors',
    description:
      'Figma 디자인 시스템에서 추출한 120px 정사각형 컬러 카드로 보여주는 컴플리트 컬러 시스템입니다.',
  },
};

/**
 * 브랜드 컬러만 보여주는 팔레트입니다.
 * 10단계 그라데이션으로 구성된 브랜드 컴러를 보여줍니다.
 */
export const BrandOnly: Story = {
  args: {
    groups: [defaultColorGroups[0]], // Brand Colors만
    title: 'Brand Colors',
    description: '브랜드의 주요 컬러 팔레트입니다.',
  },
};

/**
 * 의미적 컬러들을 보여주는 팔레트입니다.
 * 정보(Blue), 성공(Green), 경고(Yellow), 위험(Red) 상태를 나타내는 컬러들입니다.
 */
export const SemanticColors: Story = {
  args: {
    groups: [
      defaultColorGroups[2], // Blue
      defaultColorGroups[3], // Green
      defaultColorGroups[4], // Yellow/Orange
      defaultColorGroups[5], // Red
    ],
    title: 'Semantic Colors',
    description: '의미적 컬러들 - 정보, 성공, 경고, 위험을 나타냅니다.',
  },
};

/**
 * 모든 중성 컬러를 보여주는 팔레트입니다.
 * White부터 900까지 11단계의 중성 컬러를 보여줍니다.
 */
export const NeutralOnly: Story = {
  args: {
    groups: [defaultColorGroups[1]], // Neutral Colors만
    title: 'Neutral Colors',
    description: '텍스트, 배경, 경계선에 사용되는 중성 컬러 시스템입니다.',
  },
};

/**
 * 반투명 컬러 그룹 예시입니다.
 * Primary와 Neutral 컬러의 반투명 버전을 보여줍니다.
 */
export const TintColors: Story = {
  args: {
    groups: [
      {
        title: 'Primary Tints',
        description: '반투명 프라이머리 컬러들입니다.',
        colors: [
          {
            name: 'Lighter',
            value: '#2e90ff14',
            cssVar: '--color-tint-primary-lighter',
          },
          {
            name: 'Light',
            value: '#2e90ff29',
            cssVar: '--color-tint-primary-light',
          },
          {
            name: 'Main',
            value: '#2e90ff3d',
            cssVar: '--color-tint-primary-main',
          },
          {
            name: 'Dark',
            value: '#2e90ff52',
            cssVar: '--color-tint-primary-dark',
          },
          {
            name: 'Darker',
            value: '#2e90ff61',
            cssVar: '--color-tint-primary-darker',
          },
        ],
      },
      {
        title: 'Neutral Tints',
        description: '반투명 중성 컬러들입니다.',
        colors: [
          {
            name: 'Lighter',
            value: '#89898914',
            cssVar: '--color-tint-neutral-lighter',
          },
          {
            name: 'Light',
            value: '#89898929',
            cssVar: '--color-tint-neutral-light',
          },
          {
            name: 'Main',
            value: '#8989893d',
            cssVar: '--color-tint-neutral-main',
          },
          {
            name: 'Dark',
            value: '#89898952',
            cssVar: '--color-tint-neutral-dark',
          },
          {
            name: 'Darker',
            value: '#89898961',
            cssVar: '--color-tint-neutral-darker',
          },
        ],
      },
    ],
    title: 'Tint Colors',
    description: '8%-36% 반투명 효과가 적용된 Primary와 Neutral 컬러들입니다.',
  },
};

/**
 * 컬러 팔레트 간단 버전입니다.
 * 제목과 설명 없이 깔끔하게 컬러만 보여줍니다.
 */
export const Minimal: Story = {
  args: {
    groups: [defaultColorGroups[0]], // Brand Colors만
    // title과 description 생략으로 깔끔한 표시
  },
};
