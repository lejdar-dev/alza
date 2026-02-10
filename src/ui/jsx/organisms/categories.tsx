import { fetchCategories } from '@/lib/api/product.api';
import { cn } from '@lejdar/webdev';
import Category from '../atoms/category';

const style = cn(
  `grid gap-3`,

  'max-sm:grid-cols-[1fr_1fr] ',
  'min-sm:grid-cols-[repeat(auto-fit,12rem)]',

  'max-sm:text-sm'
);

export default async function Categories() {
  'use cache';

  const { ok, data: categories } = await fetchCategories();

  if (!ok) throw 'Impossible state.';

  return (
    <div className={style}>
      {categories.map((category) => (
        <Category key={category.id} category={category.label} />
        ))}
      </div>
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
