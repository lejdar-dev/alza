'use client';

import { cn } from '@lejdar/webdev';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type Props = Omit<ImageProps, 'blurDataURL'> & {
  blurDataUrl: string;
};

const style = {
  image: cn(
    'transition-all duration-300',
    'opacity-0 data-[loaded=true]:opacity-100'
  ),

  overlay: cn(
    'absolute inset-0',
    'bg-contain bg-center bg-no-repeat',
    'transition-all duration-300',
    'opacity-100 data-[loaded=true]:opacity-0',
    'blur-md data-[loaded=true]:blur-0'
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

export const story = () => (
  <div className="relative w-120 h-120">
    <TransitionImage
      alt="Optimized image"
      src="https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png"
      blurDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAS0lEQVR4nGNwiM3QDirvS5eKaUoHsRnSZh4uPPL///+WbV//e5bOKGQw9ohrcwgv/m9uH/Rf28avjaG9sdGfl40hjZWVI629qd0fAOFkG3lVMpbVAAAAAElFTkSuQmCC"
      className="object-contain"
      fill
    />
  </div>
);
