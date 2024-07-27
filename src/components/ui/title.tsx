import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const headingVariants = cva('font-bold leading-none tracking-tight', {
  variants: {
    size: {
      h1: 'text-3xl',
      h2: 'text-2xl',
      h3: 'text-xl',
      h4: 'text-lg',
      h5: 'text-base',
      h6: 'text-base',
    },
  },
  defaultVariants: {
    size: 'h2',
  },
});

export const Title = React.forwardRef<HTMLParagraphElement, TitleProps>(
  ({ className, size = 'h2', ...props }, ref) => {
    const Tag = size;
    return <Tag ref={ref} className={cn(headingVariants({ size, className }))} {...props} />;
  }
);

Title.displayName = 'Title';
