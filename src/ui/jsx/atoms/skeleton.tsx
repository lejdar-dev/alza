import { ClassNameProp, cn } from '@lejdar/webdev';
import { ReactNode } from 'react';

export const SkeletonLine = ({ className }: ClassNameProp) => {
  return (
    <div
      className={cn(
        'bg-surface w-full  h-[1.2em] my-[0.15em]',
        'animate-pulse',
        className
      )}
    />
  );
};

type BoxProps = {
  children?: ReactNode;
} & ClassNameProp;

export const SkeletonBox = ({ children, className }: BoxProps) => {
  return (
    <div className={cn('bg-surface w-full h-full', 'animate-pulse', className)}>
      {children}
    </div>
  );
};
