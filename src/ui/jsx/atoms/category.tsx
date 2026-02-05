import { cn } from 'webdev';

const style = cn(`w-40 py-2`, 'bg-surface text-center');

export default function Category({ category }: { category: string }) {
  return <div className={style}>{category}</div>;
}

export const story = () => <Category category="Repasované" />;
