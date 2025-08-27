import type { Meta, StoryObj } from '@storybook/react';
import {
  Typography,
  Display,
  H1,
  H2,
  H3,
  Body,
  Sub,
  Caption,
} from '@/components/ui/data-display';

// Helper Components for Table Rows
interface TableRowProps {
  example: React.ReactNode;
  weight: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
}

function DefaultTypographyRow({
  example,
  weight,
  size,
  lineHeight,
  letterSpacing,
}: TableRowProps) {
  return (
    <div className='h-[66px] flex items-center border-b border-gray-100'>
      <div className='w-80 px-4 py-0 flex items-center'>
        <div className='flex flex-col justify-center h-full'>{example}</div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{weight}</span>
        </div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{size}</span>
        </div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{lineHeight}</span>
        </div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{letterSpacing}</span>
        </div>
      </div>
    </div>
  );
}

function ComponentTypographyRow({
  example,
  weight,
  size,
  lineHeight,
  letterSpacing,
}: TableRowProps) {
  return (
    <div className='h-[66px] flex items-center border-b border-gray-100'>
      <div className='w-80 px-4 py-0 flex items-center'>
        <div className='flex flex-col justify-center h-full'>{example}</div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{weight}</span>
        </div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{size}</span>
        </div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{lineHeight}</span>
        </div>
      </div>
      <div className='flex-1 px-4 py-6 flex items-center justify-start'>
        <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
          <span className='sub-base text-red-500'>{letterSpacing}</span>
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof Typography> = {
  title: 'UI/Data Display/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Figma에서 추출한 CSS 토큰을 사용하는 타이포그래피 컴포넌트입니다. CSS 클래스로 스타일이 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display',
        'h1',
        'h2',
        'h3',
        'body-base',
        'body-medium',
        'body-bold',
        'sub-base',
        'sub-medium',
        'sub-bold',
        'caption',
      ],
      description: '타이포그래피 변형 타입',
    },
    as: {
      control: 'text',
      description: 'HTML 요소 타입',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 타이포그래피 컴포넌트 사용법
 */
export const Default: Story = {
  args: {
    variant: 'body-base',
    children: '이것은 기본 본문 텍스트입니다.',
  },
};

/**
 * Figma 디자인 기반 타이포그래피 가이드라인
 */
export const FigmaDesignGuide: Story = {
  render: () => (
    <div className='bg-white'>
      {/* Header */}
      <div className='bg-white px-10 py-6'>
        <h1 className='display text-black'>Typography</h1>
      </div>

      {/* Content */}
      <div className='p-10 space-y-10'>
        {/* Pretendard Section */}
        <div className='space-y-5'>
          <div className='flex items-center gap-2.5'>
            <h2 className='h2'>Pretendard</h2>
          </div>
          <div className='flex gap-3'>
            <div className='bg-gray-50 p-4 rounded flex flex-col gap-2 items-center justify-center w-48 h-48'>
              <div className='text-8xl font-bold text-black'>가</div>
              <div className='bg-gray-50 px-3 py-0.5 rounded border border-gray-200'>
                <span className='sub-base text-red-500'>
                  font/family/pretendard
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Default Typography Table */}
        <div className='space-y-5'>
          <h2 className='h2'>Default Typography</h2>
          <div className='w-full'>
            {/* Table Header */}
            <div className='bg-gray-50 h-11 flex items-center'>
              <div className='w-80 px-4 flex items-center'>
                <span className='body-base'>Example</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>Weight</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>Size</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>LineHeight</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>letterSpacing</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className='space-y-0'>
              <DefaultTypographyRow
                example={<span className='display'>대 타이틀</span>}
                weight='font/weight/bold'
                size='font/size/2xl'
                lineHeight='font/lineHeight/2xl'
                letterSpacing='font/letterSpacing/2xl'
              />
              <DefaultTypographyRow
                example={<span className='display'>페이지 타이틀</span>}
                weight='font/weight/bold'
                size='font/size/xl'
                lineHeight='font/lineHeight/xl'
                letterSpacing='font/letterSpacing/xl'
              />
              <DefaultTypographyRow
                example={<span className='h1'>서브 타이틀</span>}
                weight='font/weight/bold'
                size='font/size/lg'
                lineHeight='font/lineHeight/lg'
                letterSpacing='font/letterSpacing/lg'
              />
              <DefaultTypographyRow
                example={<span className='h2'>콘텐츠 타이틀</span>}
                weight='font/weight/bold'
                size='font/size/md'
                lineHeight='font/lineHeight/md'
                letterSpacing='font/letterSpacing/md'
              />
              <DefaultTypographyRow
                example={<span className='h3'>본문 소제목</span>}
                weight='font/weight/bold'
                size='font/size/sm'
                lineHeight='font/lineHeight/sm'
                letterSpacing='font/letterSpacing/sm'
              />
              <DefaultTypographyRow
                example={
                  <span className='body-bold'>일반 본문 강조 텍스트</span>
                }
                weight='font/weight/bold'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
              <DefaultTypographyRow
                example={
                  <span className='body-medium'>일반 본문 중간 텍스트</span>
                }
                weight='font/weight/medium'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
              <DefaultTypographyRow
                example={<span className='body-base'>일반 본문 텍스트</span>}
                weight='font/weight/regular'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
              <DefaultTypographyRow
                example={
                  <span className='sub-bold'>작은 본문 강조 텍스트</span>
                }
                weight='font/weight/bold'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <DefaultTypographyRow
                example={
                  <span className='sub-medium'>작은 본문 중간 텍스트</span>
                }
                weight='font/weight/medium'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <DefaultTypographyRow
                example={<span className='sub-base'>작은 본문 텍스트</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <DefaultTypographyRow
                example={<span className='caption'>보조적인 정보 텍스트</span>}
                weight='font/weight/regular'
                size='font/size/caption'
                lineHeight='font/lineHeight/caption'
                letterSpacing='font/letterSpacing/caption'
              />
            </div>
          </div>
        </div>

        {/* Components Typography Table */}
        <div className='space-y-5'>
          <h2 className='h2'>Components Typography</h2>
          <div className='w-full'>
            {/* Table Header */}
            <div className='bg-gray-50 h-11 flex items-center'>
              <div className='w-80 px-4 flex items-center'>
                <span className='body-base'>Example</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>Weight</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>Size</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>LineHeight</span>
              </div>
              <div className='flex-1 px-4 flex items-center justify-center'>
                <span className='body-base'>letterSpacing</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className='space-y-0'>
              <ComponentTypographyRow
                example={<span className='body-medium'>Button Large</span>}
                weight='font/weight/medium'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Button Medium</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={
                  <span className='text-xs leading-[18px]'>Button Small</span>
                }
                weight='font/weight/regular'
                size='font/size/caption'
                lineHeight='font/lineHeight/caption'
                letterSpacing='font/letterSpacing/caption'
              />
              <ComponentTypographyRow
                example={<span className='sub-medium'>Input Label</span>}
                weight='font/weight/medium'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='body-base'>Input Text Large</span>}
                weight='font/weight/regular'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Input Text</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Input Text Small</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={
                  <span className='text-xs leading-[18px]'>Helper Text</span>
                }
                weight='font/weight/regular'
                size='font/size/caption'
                lineHeight='font/lineHeight/caption'
                letterSpacing='font/letterSpacing/caption'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Chip</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Tooltip</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='body-base'>Alert Title</span>}
                weight='font/weight/regular'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Table Header</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Table Body</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='sub-base'>Badge Label</span>}
                weight='font/weight/regular'
                size='font/size/sub'
                lineHeight='font/lineHeight/sub'
                letterSpacing='font/letterSpacing/sub'
              />
              <ComponentTypographyRow
                example={<span className='body-base'>Toast</span>}
                weight='font/weight/regular'
                size='font/size/body'
                lineHeight='font/lineHeight/body'
                letterSpacing='font/letterSpacing/body'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * 모든 타이포그래피 스타일 쇼케이스
 */
export const AllVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <Display>Display - 가장 큰 제목 (32px)</Display>
        <p className='text-sm text-gray-500 mt-2'>CSS 클래스: display</p>
      </div>

      <div>
        <H1>Heading 1 - 주요 제목 (28px)</H1>
        <p className='text-sm text-gray-500 mt-2'>CSS 클래스: h1</p>
      </div>

      <div>
        <H2>Heading 2 - 부제목 (24px)</H2>
        <p className='text-sm text-gray-500 mt-2'>CSS 클래스: h2</p>
      </div>

      <div>
        <H3>Heading 3 - 작은 제목 (20px)</H3>
        <p className='text-sm text-gray-500 mt-2'>CSS 클래스: h3</p>
      </div>

      <div className='space-y-3'>
        <Body weight='base'>Body Base - 기본 본문 텍스트 (16px)</Body>
        <Body weight='medium'>Body Medium - 중간 본문 텍스트 (16px)</Body>
        <Body weight='bold'>Body Bold - 굵은 본문 텍스트 (16px)</Body>
        <p className='text-sm text-gray-500 mt-2'>
          CSS 클래스: body-base, body-medium, body-bold
        </p>
      </div>

      <div className='space-y-3'>
        <Sub weight='base'>Sub Base - 기본 부제목 (14px)</Sub>
        <Sub weight='medium'>Sub Medium - 중간 부제목 (14px)</Sub>
        <Sub weight='bold'>Sub Bold - 굵은 부제목 (14px)</Sub>
        <p className='text-sm text-gray-500 mt-2'>
          CSS 클래스: sub-base, sub-medium, sub-bold
        </p>
      </div>

      <div>
        <Caption>Caption - 작은 설명 텍스트 (12px)</Caption>
        <p className='text-sm text-gray-500 mt-2'>CSS 클래스: caption</p>
      </div>
    </div>
  ),
};

/**
 * CSS 클래스 직접 사용 예시
 */
export const DirectCSSUsage: Story = {
  render: () => (
    <div className='space-y-4'>
      <h1 className='display'>CSS 클래스 직접 사용: display</h1>
      <h2 className='h1'>CSS 클래스 직접 사용: h1</h2>
      <h3 className='h2'>CSS 클래스 직접 사용: h2</h3>
      <p className='body-medium'>CSS 클래스 직접 사용: body-medium</p>
      <span className='sub-bold'>CSS 클래스 직접 사용: sub-bold</span>
      <small className='caption'>CSS 클래스 직접 사용: caption</small>
    </div>
  ),
};

/**
 * HTML 요소 변경 예시
 */
export const CustomElements: Story = {
  render: () => (
    <div className='space-y-4'>
      <Typography variant='h1' as='div'>
        div 요소로 렌더링된 H1
      </Typography>
      <Typography variant='body-base' as='span'>
        span 요소로 렌더링된 Body
      </Typography>
      <Typography variant='sub-medium' as='label'>
        label 요소로 렌더링된 Sub
      </Typography>
      <Typography variant='caption' as='small'>
        small 요소로 렌더링된 Caption
      </Typography>
    </div>
  ),
};

/**
 * 실제 사용 예시 - 카드 레이아웃
 */
export const RealWorldExample: Story = {
  render: () => (
    <div className='max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
      <Display className='mb-4'>제품 소개</Display>
      <H2 className='mb-3'>새로운 기능 출시</H2>
      <Body weight='medium' className='mb-4'>
        이번 업데이트에서는 사용자 경험을 개선하고 새로운 기능들을 추가했습니다.
        더욱 직관적인 인터페이스와 향상된 성능을 경험해보세요.
      </Body>
      <Sub weight='medium' className='mb-2'>
        주요 변경사항:
      </Sub>
      <ul className='space-y-1 mb-4'>
        <Sub as='li'>• 새로운 대시보드 디자인</Sub>
        <Sub as='li'>• 향상된 검색 기능</Sub>
        <Sub as='li'>• 모바일 최적화</Sub>
      </ul>
      <Caption className='text-gray-500'>2024년 1월 15일 업데이트</Caption>
    </div>
  ),
};

/**
 * CSS 변수 값 확인
 */
export const CSSVariables: Story = {
  render: () => (
    <div className='space-y-4'>
      <h3 className='font-semibold'>CSS 변수 값들</h3>
      <div className='bg-gray-100 p-4 rounded-lg font-mono text-sm space-y-2'>
        <p>
          --font-family:{' '}
          <span className='text-blue-600'>
            Pretendard, system-ui, sans-serif
          </span>
        </p>
        <p>
          --font-size-32: <span className='text-blue-600'>32px</span>
        </p>
        <p>
          --font-weight-700: <span className='text-blue-600'>700</span>
        </p>
        <p>
          --line-height-40: <span className='text-blue-600'>40px</span>
        </p>
        <p>
          --letter-spacing-heading1:{' '}
          <span className='text-blue-600'>-0.5px</span>
        </p>
      </div>
      <p className='text-sm text-gray-600'>
        이 값들은 CSS 변수로 정의되어 있어 런타임에 변경 가능합니다.
      </p>
    </div>
  ),
};
