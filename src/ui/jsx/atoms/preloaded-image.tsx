import { generatePlaceholder } from '@/lib/util/plaiceholder';
import { ImageProps } from 'next/image';
import TransitionImage from './transition-image';

type Props = ImageProps;

export default async function PreloadedImage(props: Props) {
  return (
    <TransitionImage
      {...props}
      blurDataUrl={await generatePlaceholder(props.src as string)}
    />
  );
}
