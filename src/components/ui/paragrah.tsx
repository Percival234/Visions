import React from 'react';

import { cn } from '@/helpers/cn/cn';

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
Paragraph.displayName = 'Paragraph';
