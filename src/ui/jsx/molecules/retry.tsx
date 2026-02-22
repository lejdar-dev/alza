'use client';
import { ClassNameProp, cn } from '@lejdar/webdev';
import { Repeat } from 'lucide-react';
import { ReactNode, useCallback, useTransition } from 'react';
import ErrorBanner from '../atoms/error-banner';
type Props = {
  retry: () => void;
  loadingUI?: ReactNode;
  message: ReactNode;
  retryMessage: ReactNode;
} & ClassNameProp;

const style = {
  retryButton: cn(
    'flex items-center gap-2',
    'bg-negative/10 text-negative',
    'p-3 rounded-md',
    'select-none active:scale-95 transition-all cursor-pointer'
  ),
};

export default function Retry(props: Props) {
  const { retry, loadingUI, message, retryMessage, className } = props;
  const [isPending, startTransition] = useTransition();

  const onClick = useCallback(async () => {
    startTransition(async () => {
      await retry();
    });
  }, [retry]);

  if (isPending && loadingUI) return loadingUI;

  return (
    <ErrorBanner
      className={className}
      message={message}
      action={
        <div onClick={onClick} className={style.retryButton}>
          <Repeat size={'1em'} />
          {retryMessage}
        </div>
      }
    />
  );
}

export const story = () => (
  <Retry
    retry={() => {}}
    message={'The server was to shy to respond'}
    retryMessage={'Shall we try again'}
  />
);
