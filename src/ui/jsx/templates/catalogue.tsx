import { ReactNode } from 'react';
import { story as Categories } from '../organisms/categories';
import { story as Popular } from '../organisms/popular';
import { story as Gallery } from '../organisms/gallery';
import { cn } from 'webdev';
import { story as TabSelector } from '../molecules/tab-selector';

type Props = {
  categories: ReactNode;
  popular: ReactNode;
  products: ReactNode;
  tabs: ReactNode;
};

const style = {
  layout: cn(
    'max-w-6xl',
    'grid grid-rows-[auto_2rem_auto_4rem_auto_2rem_auto_8rem_auto_4rem_auto]',
    'justify-center mx-auto'
  ),
  title: cn('text-2xl font-bold  '),
  popular: cn('text-xl font-medium -5'),
};

export default function Catalogue(props: Props) {
  const { categories, popular, products, tabs } = props;
  return (
    <div className={style.layout}>
      <h1 className={style.title}>Notebooky</h1>
      <span aria-hidden />
      {categories}
      <span aria-hidden />

      <h2 className={style.popular}>Nejprodávanější</h2>
      <span aria-hidden />
      {popular}
      <span aria-hidden />

      {tabs}
      <span aria-hidden />
      {products}
    </div>
  );
}

export const story = () => (
  <Catalogue
    tabs={<TabSelector />}
    categories={<Categories />}
    popular={<Popular />}
    products={<Gallery />}
  />
);
