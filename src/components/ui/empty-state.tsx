import React from 'react';

import { cn } from '@/helpers/cn/cn';

export const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    text: string;
  }
>(({ className, text, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props}>
    {text}
  </div>
));
EmptyState.displayName = 'EmptyState';
