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
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from 'react-aria-components';

const style = {
  trigger: cn(
    'grid grid-cols-[1fr_auto]',
    'w-24 h-min p-1 ',
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

const options = [
  {
    label: 'Koupit zrychleně',
    icon: ShoppingBasket,
    highlight: true,
  },
  {
    label: 'Porovnat',
    icon: Scale,
    highlight: false,
  },
  {
    label: 'Hlídat',
    icon: Eye,
    highlight: false,
  },
  {
    label: 'Přidat do seznamu',
    icon: ListPlus,
    highlight: false,
  },
];

export default function BuyMenu({ className }: ClassNameProp) {
  return (
    <MenuTrigger>
      <Button className={cn(style.trigger, className)}>
        <span>Koupit</span>
        <ChevronDown />
      </Button>
      <Popover placement="bottom right">
        <Menu className={style.menu}>
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
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export const story = () => <BuyMenu />;
