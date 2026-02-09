'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';
import { ClassNameProp, cn } from 'webdev';

type Props = {
  tabs: readonly { label: string; route: string; id: string }[];
} & ClassNameProp;

const style = {
  container: cn(
    'w-full overflow-x-auto',
    'flex gap-4',
    'text-lg',
    'border-b-1 border-text/10',
    'overflow-hidden hover:overflow-auto'
  ),
  tab: cn(
    'w-max',
    'cursor-pointer',
    'text-center whitespace-nowrap',
    'py-4 px-6 row-1',
    'data-[selected=true]:font-bold data-[selected=true]:text-secondary ',
    'transition-all'
  ),
};

export default function TabSelector(props: Props) {
  const { tabs, className } = props;

  const pathname = usePathname() ?? '/';

  return (
    <div
      className={cn(style.container, className)}
      style={
        {
          '--tab-count': tabs.length,
          '--selected':
            1 +
            tabs.indexOf(tabs.find(({ route }) => pathname.startsWith(route))!),
        } as CSSProperties
      }
    >
      {tabs.map(({ label, route, id }) => (
        <Link
          onClick={({ currentTarget }) =>
            currentTarget.scrollIntoView({
              block: 'nearest',
              inline: 'center',
              behavior: 'smooth',
            })
          }
          href={route}
          key={id}
          className={style.tab}
          data-selected={pathname.startsWith(route)}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export const story = () => (
  <TabSelector
    tabs={[
      { label: 'Home', route: '/', id: 'home' },
      { label: 'About', route: '/about', id: 'about' },
      { label: 'Contact', route: '/contact', id: 'contact' },
      { label: 'Blog', route: '/blog', id: 'blog' },
      { label: 'Portfolio', route: '/portfolio', id: 'portfolio' },
      { label: 'Services', route: '/services', id: 'services' },
      { label: 'Testimonials', route: '/testimonials', id: 'testimonials' },
      { label: 'FAQ', route: '/faq', id: 'faq' },
      { label: 'Contact', route: '/contact', id: 'contact' },
      { label: 'Contact', route: '/contact', id: 'contact' },
    ]}
  />
);
