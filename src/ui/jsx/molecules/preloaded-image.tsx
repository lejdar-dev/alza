import { generatePlaceholder } from '@/lib/util/plaiceholder';
import { writeStory } from '@story';
import { ImageProps } from 'next/image';
import TransitionImage from '../atoms/transition-image';

type Props = ImageProps;

export default async function PreloadedImage(props: Props) {
  return (
    <TransitionImage
      {...props}
      blurDataUrl={await generatePlaceholder(props.src as string)}
    />
  );
}

export const story = writeStory({
  args: {
    imageUrl:
      'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL2C-A-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg',
  },
  component: ({ imageUrl }) => (
    <div className="w-120 max-w-full aspect-square relative">
      <PreloadedImage
        alt="Preloaded image test"
        src={imageUrl}
        fill
        className="object-contain"
      />
    </div>
  ),
});
