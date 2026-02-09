import { fetchCategories } from '@/lib/api/product.api';
import { cn } from '@lejdar/webdev';
import Category from '../atoms/category';

const style = cn(
  `grid gap-3`,

  'max-sm:grid-cols-[repeat(2,12rem)] max-sm:justify-center ',
  'min-sm:grid-cols-[repeat(auto-fit,12rem)]',

  'max-sm:text-sm'
);

export default async function Categories() {
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

export const story = () => <Categories />;
