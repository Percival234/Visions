import { cn } from '@/lib/utils';

interface CenteredContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CenteredContainer = ({ className, ...props }: CenteredContainerProps) => {
  return <div className={cn('container px-3', className)} {...props} />;
};
