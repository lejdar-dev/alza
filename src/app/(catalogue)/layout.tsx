import TabSelector from '@/ui/jsx/molecules/tab-selector';
import Categories from '@/ui/jsx/organisms/categories';
import Catalogue from '@/ui/jsx/templates/catalogue';
import { tabs } from './tabs';
import Popular, { PopularSkeleton } from '@/ui/jsx/organisms/popular';
import { Suspense } from 'react';

export default function CatalogueLayout({ gallery }: LayoutProps<'/'>) {
  return (
    <Catalogue
      categories={<Categories />}
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
