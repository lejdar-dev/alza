import { fetchCategories, refreshCategories } from '@/lib/api/product.api';
import { cn } from '@lejdar/webdev';
import { Repeat } from 'lucide-react';
import Category, { CategorySkeleton } from '../atoms/category';
import ErrorBanner from '../atoms/error-banner';

const style = cn(
  `grid gap-3`,

  'max-sm:grid-cols-[1fr_1fr] ',
  'min-sm:grid-cols-[repeat(auto-fit,12rem)]',

  'max-sm:text-sm'
);

export default async function Categories() {
  'use cache';

  const { ok, data: categories } = await fetchCategories();

  if (ok)
    return (
      <div className={style}>
        {categories.map((category) => (
          <Category key={category.id} category={category.label} />
        ))}
      </div>
    );

  return (
    <ErrorBanner
      // eslint-disable-next-line react-hooks/purity
      key={Math.random().toString()}
      retry={refreshCategories}
      message={'Při komunikaci se serverem došlo k chybě.'}
      retryMessage={
        <>
          <Repeat size={16} />
          Načíst znovu
        </>
      }
    />
  );
}

export async function CategoriesSkeleton() {
  return (
    <div className={style}>
      {Array.from({ length: 13 }).map((_, index) => (
        <CategorySkeleton key={index} />
      ))}
    </div>
  );
}

export const story = () => <Categories />;
