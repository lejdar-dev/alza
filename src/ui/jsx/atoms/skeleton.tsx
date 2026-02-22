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

export const story = () => (
  <div className="flex flex-col gap-2 w-xs">
    <SkeletonBox className="aspect-square" />

    <SkeletonLine />
    <SkeletonLine />
    <SkeletonLine className="w-[70%]" />
  </div>
);
