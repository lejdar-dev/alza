import { ReactNode } from 'react';
import { story as Categories } from '../organisms/categories';
import { story as Popular } from '../organisms/popular';
import { story as Gallery } from '../organisms/gallery';
import { cn } from 'webdev';
import TabSelector from '../molecules/tab-selector';

type Props = {
  categories: ReactNode;
  popular: ReactNode;
  products: ReactNode;
  tabs: ReactNode;
};

const style = {
  layout: cn(
    'w-340 max-w-full',
    'flex flex-col mx-auto',
    'pt-24 pb-[33vh] px-[5vw] '
  ),
  title: cn('text-2xl font-bold  '),
  popular: cn('text-xl font-medium'),
};

export default function Catalogue(props: Props) {
  const { categories, popular, products, tabs } = props;
  return (
    <div className={style.layout}>
      <h1 className={style.title}>Notebooky</h1>
      <span aria-hidden className='pb-8'/>
      {categories}
      <span aria-hidden className='pb-24'/>

      <h2 className={style.popular}>Nejprodávanější</h2>
      <span aria-hidden className='pb-8'/>
      {popular}
      <span aria-hidden className='pb-24'/>

      {tabs}
      <span aria-hidden className='pb-8'/>
      {products}
    </div>
  );
}

export const story = () => (
  <Catalogue
    tabs={<TabSelector tabs={[]} />}
    categories={<Categories />}
    popular={<Popular />}
    products={<Gallery />}
  />
);
