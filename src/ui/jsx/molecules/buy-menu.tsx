'use client';
import {
    ChevronDown,
    Eye,
    ListPlus,
    Scale,
    ShoppingBasket,
} from 'lucide-react';
import { CSSProperties } from 'react';

import { ClassNameProp, cn } from '@lejdar/webdev';
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '../atoms/menu';

const options = [
  {
    label: 'Koupit zrychleně',
    icon: ShoppingBasket,
    highlight: true,
    action: () => console.log('Koupit zrychleně'),
  },
  {
    label: 'Porovnat',
    icon: Scale,
    highlight: false,
    action: () => console.log('Porovnat'),
  },
  {
    label: 'Hlídat',
    icon: Eye,
    highlight: false,
    action: () => console.log('Hlídat'),
  },
  {
    label: 'Přidat do seznamu',
    icon: ListPlus,
    highlight: false,
    action: () => console.log('Přidat do seznamu'),
  },
];

const style = {
  trigger: cn(
    'grid grid-cols-[1fr_auto]',
    'min-w-24 h-min p-1 ',
    'bg-secondary text-on-secondary',
    'cursor-pointer',
    'outline-none'
  ),
  menu: cn(
    'shadow-md outline-none',
    'backdrop-blur-md border-1 border-secondary/20 rounded-md'
  ),
  option: cn(
    'hover:text-secondary hover:bg-secondary/10',
    'data-[highlight=true]:text-primary data-[highlight=true]:bg-primary/10 data-[highlight=true]:font-medium',
    'outline-none',
    'text-sm',
    'flex items-center gap-2',
    'px-2 py-2',
    'cursor-pointer ',
    'opacity-0 animate-fade-in [animation-delay:var(--delay)]'
  ),
};

export default function BuyMenu({ className }: ClassNameProp) {
  return (
    <Menu>
      <MenuTrigger className={cn(style.trigger, className)}>
        <span>Koupit</span>
        <ChevronDown />
      </MenuTrigger>
      <MenuPopover className={style.menu} placement="bottom right">
        {options.map(({ icon: Icon, label, highlight }, index) => (
          <MenuItem
            style={{ '--delay': `${index * 0.05}s` } as CSSProperties}
            key={label}
            data-highlight={highlight}
            className={style.option}
          >
            {<Icon strokeWidth={0.5} />}
            <span>{label}</span>
          </MenuItem>
        ))}
      </MenuPopover>
    </Menu>
  );
}

export const story = () => <BuyMenu />;
