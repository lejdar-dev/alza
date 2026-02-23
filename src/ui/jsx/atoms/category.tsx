import { cn } from '@lejdar/webdev';
import { SkeletonBox } from './skeleton';

const style = cn(
  `w-128 p-4 py-3`,
  'max-w-full',
  'text-center',
  'bg-surface shadow-sm',
  'select-none cursor-pointer'
);

export default function Category({ category }: { category: string }) {
  return <div className={style}>{category}</div>;
}

export const CategorySkeleton = () => {
  return (
    <SkeletonBox className={cn(style, 'text-transparent')}>
      Skeleton
    </SkeletonBox>
  );
};

export const story = {
  args: {
    skeleton: false,
  },
  component: ({ skeleton }: { skeleton: boolean }) =>
    skeleton ? <CategorySkeleton /> : <Category category="Repasované" />,
};
