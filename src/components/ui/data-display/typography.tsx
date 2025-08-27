import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * CSS 스타일 적용 디버깅용 컴포넌트
 */

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 타이포그래피 변형 타입
   */
  variant?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body-base'
    | 'body-medium'
    | 'body-bold'
    | 'sub-base'
    | 'sub-medium'
    | 'sub-bold'
    | 'caption';
  /**
   * HTML 요소 타입 (기본값은 variant에 따라 자동 결정)
   */
  as?: React.ElementType;
  /**
   * 자식 요소
   */
  children: React.ReactNode;
}

/**
 * Figma CSS 토큰을 사용하는 타이포그래피 컴포넌트
 *
 * @example
 * ```tsx
 * <Typography variant="h1">제목</Typography>
 * <Typography variant="body-medium">중간 굵기 본문</Typography>
 * <Typography variant="caption">캡션</Typography>
 * ```
 */
export function Typography({
  variant = 'body-base',
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  // variant에 따른 기본 HTML 요소 결정
  const getDefaultElement = (): React.ElementType => {
    switch (variant) {
      case 'display':
        return 'h1';
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'body-base':
      case 'body-medium':
      case 'body-bold':
        return 'p';
      case 'sub-base':
      case 'sub-medium':
      case 'sub-bold':
        return 'span';
      case 'caption':
        return 'span';
      default:
        return 'p';
    }
  };

  // CSS 클래스명 생성
  const getTypographyClass = () => {
    return variant;
  };

  const Component = as || getDefaultElement();
  const typographyClass = getTypographyClass();

  return (
    <Component className={cn(typographyClass, className)} {...props}>
      {children}
    </Component>
  );
}

// 편의를 위한 개별 컴포넌트들
export const Display = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant='display' {...props} />
);

export const H1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant='h1' {...props} />
);

export const H2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant='h2' {...props} />
);

export const H3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant='h3' {...props} />
);

export const Body = (
  props: Omit<TypographyProps, 'variant'> & {
    weight?: 'base' | 'medium' | 'bold';
  }
) => {
  const { weight = 'base', ...rest } = props;
  return <Typography variant={`body-${weight}` as any} {...rest} />;
};

export const Sub = (
  props: Omit<TypographyProps, 'variant'> & {
    weight?: 'base' | 'medium' | 'bold';
  }
) => {
  const { weight = 'base', ...rest } = props;
  return <Typography variant={`sub-${weight}` as any} {...rest} />;
};

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant='caption' {...props} />
);
