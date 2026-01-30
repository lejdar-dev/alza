'use client';

import { ClassNameProp, cn } from '@lejdar/webdev';
import { Book, Briefcase, Contact, Heart, HelpCircle, Home, Info, Server } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  tabs: {
    label: string;
    routes: string[];
    id: string;
    icon: React.ReactNode;
  }[];
} & ClassNameProp;

const style = {
  container: cn(
    'w-full max-w-full ',
    'flex gap-4',
    'text-lg',
    'min-sm:border-b-1 border-text/10',
    // Responsive
    'max-md:justify-center',
    'max-md:text-sm',
    'max-sm:grid max-sm:grid-cols-[1fr_1fr]',
    'max-sm:gap-2'
  ),
  tab: cn(
    'flex items-center gap-2',
    'cursor-pointer',
    'text-center whitespace-nowrap',
    'py-4 px-6',
    'data-[selected=true]:font-bold data-[selected=true]:text-secondary ',
    'transition-all',

    // Responsive
    'max-sm:border-surface max-sm:border-1 max-sm:rounded-sm',
    'max-sm:py-2 max-sm:px-6',
    'border-secondary min-sm:data-[selected=true]:border-b-1 max-sm:data-[selected=true]:border-secondary max-sm:data-[selected=true]:bg-secondary/5'
  ),

  icon: cn('hidden max-sm:block', '*:w-4 *:h-4 text-text-low'),
};

export default function TabSelector(props: Props) {
  const { tabs, className } = props;

  const pathname = usePathname() ?? '/';

  return (
    <div className={cn(style.container, className)}>
      {tabs.map(({ label, routes, id, icon }) => (
        <Link
          onClick={({ currentTarget }) =>
            currentTarget.scrollIntoView({
              block: 'nearest',
              inline: 'center',
              behavior: 'smooth',
            })
          }
          href={routes[0]}
          key={id}
          className={style.tab}
          data-selected={routes.some((route) => pathname === route)}
        >
          <span className={style.icon}>{icon}</span>
          {label}
        </Link>
      ))}
    </div>
  );
}

export const story = () => (
  <TabSelector
    tabs={[
      { label: 'Home', routes: ['/'], id: 'home', icon: <Home /> },
      { label: 'About', routes: ['/about'], id: 'about', icon: <Info/> },
      { label: 'Contact', routes: ['/contact'], id: 'contact', icon: <Contact/> },
      { label: 'Blog', routes: ['/blog'], id: 'blog', icon: <Book/> },
      { label: 'Portfolio', routes: ['/portfolio'], id: 'portfolio', icon: <Briefcase/> },
      { label: 'Services', routes: ['/services'], id: 'services', icon: <Server/> },
      { label: 'Testimonials', routes: ['/testimonials'], id: 'testimonials', icon: <Heart /> },
      { label: 'FAQ', routes: ['/faq'], id: 'faq', icon: <HelpCircle /> },
      { label: 'Contact', routes: ['/contact'], id: 'contact', icon: <Contact/> },
    ]}
  />
);
