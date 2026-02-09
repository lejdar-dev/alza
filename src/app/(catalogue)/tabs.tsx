import { CircleDollarSign, Sparkles, TrendingUp, Wallet } from "lucide-react";

export const tabs = [
  { label: 'Top', id: 'top', routes: ['/top', '/'], icon: <Sparkles/> },
  { label: 'Nejprodávanější', id: 'popular', routes: ['/popular'], icon: <TrendingUp/> },
  { label: 'Od nejlevnějšího', id: 'cheapest', routes: ['/cheapest'], icon: <Wallet/> },
  {
    label: 'Od nejdražšího',
    id: 'most-expensive',
    routes: ['/most-expensive'],
    icon: <CircleDollarSign/>
  },
];

type Tab = (typeof tabs)[number]['id'];

export const isValidTab = (tab: string): tab is Tab =>
  tabs.some((t) => t.id === tab);
