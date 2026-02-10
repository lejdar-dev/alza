import TabSelector from '@/ui/jsx/molecules/tab-selector';
import Categories, { CategoriesSkeleton } from '@/ui/jsx/organisms/categories';
import Popular, { PopularSkeleton } from '@/ui/jsx/organisms/popular';
import Catalogue from '@/ui/jsx/templates/catalogue';
import { Suspense } from 'react';
import { tabs } from './tabs';

export default function CatalogueLayout({ gallery }: LayoutProps<'/'>) {
  return (
    <Catalogue
      categories={
        <Suspense fallback={<CategoriesSkeleton />}>
          <Categories />
        </Suspense>
      }
      popular={
        <Suspense fallback={<PopularSkeleton />}>
          <Popular />
        </Suspense>
      }
      products={gallery}
      tabs={<TabSelector className="mb-4" tabs={tabs} />}
    />
  );
}
