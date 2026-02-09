import { ReactNode } from 'react';
import {
  Button as AriaButton,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
  MenuTrigger as AriaMenuTrigger,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
} from 'react-aria-components';
import { ClassNameProp, cn } from 'webdev';

export function Menu({ children }: { children: ReactNode }) {
  return <AriaMenuTrigger>{children}</AriaMenuTrigger>;
}

type ItemProps = AriaMenuItemProps & { children: ReactNode } & ClassNameProp;

export function MenuItem({ children, className, ...props }: ItemProps) {
  return (
    <AriaMenuItem {...props} className={cn(className)}>
      {children}
    </AriaMenuItem>
  );
}

type PopoverProps = AriaPopoverProps & { children: ReactNode } & ClassNameProp;

export function MenuPopover({ children, className, ...props }: PopoverProps) {
  return (
    <AriaPopover {...props}>
      <AriaMenu className={cn(className)}>{children}</AriaMenu>
    </AriaPopover>
  );
}

type TriggerProps = ClassNameProp & { children: ReactNode };
export function MenuTrigger({ className, children }: TriggerProps) {
  return (
    <AriaButton aria-label="Actions" className={cn(className)}>
      {children}
    </AriaButton>
  );
}
