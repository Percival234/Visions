import { cn } from '@/helpers/cn/cn';

interface CenteredContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CenteredContainer = ({ className, ...props }: CenteredContainerProps) => {
  return (
    <div
      className={cn('container px-3 md:px-5 flex flex-col gap-3 md:gap-5', className)}
      {...props}
    />
  );
};
