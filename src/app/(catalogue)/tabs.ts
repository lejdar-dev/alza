export const tabs = [
  { label: 'Top', id: 'top', route: '/top' },
  { label: 'Nejprodávanější', id: 'popular', route: '/popular' },
  { label: 'Od nejlevnějšího', id: 'cheapest', route: '/cheapest' },
  { label: 'Od nejdražšího', id: 'most-expensive', route: '/most-expensive' },
] as const;

type Tab = (typeof tabs)[number]['id'];

export const isValidTab = (tab: string): tab is Tab => tabs.some((t) => t.id === tab);
