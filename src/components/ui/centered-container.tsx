import { cn } from '@/lib/utils';

type CenteredContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const CenteredContainer: React.FC<CenteredContainerProps> = ({ className, ...props }) => {
  return <div className={cn('container px-3', className)} {...props} />;
};
