'use client';
import { ClassNameProp, cn } from '@lejdar/webdev';
import { AlertTriangle, Repeat } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  message: ReactNode;
  action: ReactNode;
} & ClassNameProp;

const style = {
  container: cn(
    'w-full',
    'flex flex-col items-center justify-center',
    'gap-2 p-8',
    'bg-negative/5 text-negative rounded-md'
  ),
  icon: cn('text-negative/40'),
  message: cn('text-lg mb-8'),
};

export default function ErrorBanner(props: Props) {
  const { message, action, className } = props;

  return (
    <div className={cn(style.container, className)}>
      <AlertTriangle size={32} className={style.icon} />
      <span className={style.message}>{message}</span>
      {action}
    </div>
  );
}

export const story = () => (
  <ErrorBanner
    message={'The server was too shy to respond.'}
    action={
      <div className="flex gap-2 items-center  ">
        <Repeat size={16} />
        What's next?
      </div>
    }
  />
);
