'use client';
import { ClassNameProp, cn } from '@lejdar/webdev';
import { AlertTriangle, Repeat } from 'lucide-react';
import { ReactNode, useCallback, useTransition } from 'react';

type Props = {
  retry: () => void;
  loadingUI?: ReactNode;
  message: ReactNode;
  retryMessage: ReactNode;
} & ClassNameProp;

const style = {
  container: cn(
    'w-full flex flex-col items-center justify-center gap-2 p-4 ',
    'bg-negative/5',
    'border-negative border-1 rounded-md',
    'data-[pending=true]:animate-pulse'
  ),
  icon: cn('text-negative/50'),
  message: cn('text-negative '),
  action: cn(
    'flex items-center gap-2',
    'border-1 bg-negative/10 text-negative border-negative',
    'p-2 mt-4 rounded-md shadow-md',
    'select-none active:scale-95 transition-all cursor-pointer'
  ),
};

export default function ErrorBanner(props: Props) {
  const { retry, message, retryMessage, className, loadingUI } = props;

  const [isPending, startTransition] = useTransition();

  const onClick = useCallback(async () => {
    startTransition(async () => {
      await retry();
    });
  }, [retry]);

  if (isPending && loadingUI) return loadingUI;

  return (
    <div className={cn(style.container, className)} data-pending={isPending}>
      <AlertTriangle size={32} className={style.icon} />
      <span className={style.message}>{message}</span>
      <div className={style.action} onClick={onClick}>
        {retryMessage}
      </div>
    </div>
  );
}

export const story = () => (
  <ErrorBanner
    retry={() => {}}
    message={'The server was too shy to respond.'}
    retryMessage={
      <>
        <Repeat size={16} />
        Shall we try again?
      </>
    }
  />
);
