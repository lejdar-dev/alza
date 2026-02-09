import { cn } from '@lejdar/webdev';

const style = cn(
  `w-full p-4 py-3`,
  'max-w-full',
  'text-center',
  'bg-surface shadow-sm',
  'select-none cursor-pointer'
);

export default function Category({ category }: { category: string }) {
  return <div className={style}>{category}</div>;
}

export const story = () => <Category category="Repasované" />;
