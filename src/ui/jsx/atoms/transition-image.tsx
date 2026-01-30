'use client';

import { cn } from '@lejdar/webdev';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type Props = ImageProps & {
  blurDataUrl: string;
};

const style = {
  image: cn(
    'transition-all duration-300',
    'opacity-0 data-[loaded=true]:not-group-data-[blurred=true]/image:opacity-100'
  ),

  overlay: cn(
    'absolute inset-0',
    'bg-contain bg-center bg-no-repeat',
    'transition-all duration-300',
    'opacity-100 data-[loaded=true]:not-group-data-[blurred=true]/image:opacity-0',
    'blur-md data-[loaded=true]:not-group-data-[blurred=true]/image:blur-0'
  ),
};

export default function TransitionImage(props: Props) {
  const { blurDataUrl, ...rest } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      <Image
        {...rest}
        className={cn(style.image, rest.className)}
        alt={'Hello'}
        data-loaded={hasLoaded}
        onLoad={() => setHasLoaded(true)}
      />
      <div
        data-placeholder={blurDataUrl}
        data-loaded={hasLoaded}
        style={{ backgroundImage: `url(${blurDataUrl})` }}
        className={style.overlay}
      />
    </>
  );
}
