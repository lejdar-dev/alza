import { useCategories } from '@/lib/service/product';
import Category from '../atoms/category';
import { cn } from 'webdev';

const style = cn(`flex flex flex-wrap gap-2`);

export default function Categories() {
  const categories = useCategories();

  return (
    <div className={style}>
      {categories.map((category) => (
        <Category key={category.label} category={category.label} />
      ))}
    </div>
  );
}

export const story = () => <Categories />;
