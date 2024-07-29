import { cn } from '@/lib/utils';

const markVariants = {
  red: 'text-red-500',
  sky: 'text-sky-500',
  fuchsia: 'text-fuchsia-500',
  violet: 'text-violet-500',
  yellow: 'text-yellow-500',
  lime: 'text-lime-500',
  green: 'text-green-500',
};

interface MarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: keyof typeof markVariants;
}

export const Mark = ({ color, className, children, ...props }: MarkProps) => {
  return (
    <span className={cn(markVariants[color], className)} {...props}>
      <b>{children}</b>
    </span>
  );
};

// TODO зробити нормальний компонент як в шадсн
