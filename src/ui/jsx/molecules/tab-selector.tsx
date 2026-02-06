import { CSSProperties, MouseEventHandler, useCallback, useState } from 'react';
import { cn } from 'webdev';

type Props = {
  tabs: { label: string; id: string }[];
  onSelect: (tab: string) => void;
  selected: string;
};

const style = {
  container: cn(
    'flex',
    'relative',
    'text-lg',
    'border-b-1 border-text/10',
    'after:content-[""] after:h-[2px] after:w-24 after:bg-secondary',
    'after:absolute after:bottom-[-1px] after:left-[calc(var(--selected)_*_6rem)] after:rounded',
    'after:transition-all'
  ),
  tab: cn(
    'cursor-pointer',
    'w-24',
    'text-center',
    'px-2 py-2',
    'data-[selected=true]:font-bold data-[selected=true]:text-secondary ',
    'transition-all'
  ),
};

export default function TabSelector(props: Props) {
  const { tabs, onSelect, selected } = props;

  const handleSelect: MouseEventHandler<HTMLElement> = useCallback(
    ({ currentTarget }) => onSelect(currentTarget.dataset.tab as string),
    [onSelect]
  );
  return (
    <div
      className={style.container}
      style={
        {
          '--selected': tabs.findIndex((tab) => tab.id === selected),
        } as CSSProperties
      }
    >
      {tabs.map(({ label, id }) => (
        <span
          onClick={handleSelect}
          data-tab={id}
          data-selected={selected === id}
          key={id}
          className={style.tab}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export const story = () => {
  const [tab, select] = useState('tab1');
  return (
    <TabSelector
      selected={tab}
      tabs={[
        { label: 'Tab 1', id: 'tab1' },
        { label: 'Tab 2', id: 'tab2' },
      ]}
      onSelect={select}
    />
  );
};
