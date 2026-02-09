import Gallery from '@/ui/jsx/organisms/gallery';
import { notFound } from 'next/navigation';
import { isValidTab, tabs } from '../../tabs';

export function generateStaticParams() {
  return tabs.map((tab) => ({ sorting: [tab.id] }));
}

export default async function GalleryPage({
  params,
}: PageProps<'/[[...sorting]]'>) {
  const { sorting: [sorting, ...rest] = ['top'] } = await params;

  if (rest.length > 0) notFound();
  if (!isValidTab(sorting)) notFound();

  return <Gallery />;
}
