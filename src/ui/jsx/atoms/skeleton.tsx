import { ClassNameProp, cn } from '@lejdar/webdev';

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
export const SkeletonBox = ({ className }: ClassNameProp) => {
  return (
    <div
      className={cn('bg-surface w-full h-full', 'animate-pulse', className)}
    />
  );
};
