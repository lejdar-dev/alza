import { ClassNameProp, cn } from '@lejdar/webdev';
import { writeStory } from '@story';

type Props = {
  score: number;
} & ClassNameProp;

export default function Rating({ score, className }: Props) {
  const mapped = score * 16 + 2 * Math.floor(score);

  return (
    <svg
      className={cn(className)}
      width="88"
      height="16"
      viewBox="0 0 88 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_1_14)">
        <path d="M0 0H88V16H0V0Z" className="fill-surface" />
        <rect width={mapped} height="16" className="fill-rating" />
      </g>
      <StarMask />
    </svg>
  );
}

export const story = writeStory({
  args: {
    score: 3.4,
  },

  component({ score }) {
    return <Rating score={score} />;
  },
});

function StarMask() {
  return (
    <mask
      id="mask0_1_14"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="88"
      height="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0264 15.9105L8.05816 13.1008L3.13699 16L4.1505 10.1781L0 6.16577L5.59443 5.37749L7.95105 0L10.3949 5.3345L16 6.02181L11.9159 10.1072L13.0264 15.9105Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0264 15.9105L26.0582 13.1008L21.137 16L22.1505 10.1781L18 6.16577L23.5944 5.37749L25.951 0L28.3949 5.3345L34 6.02181L29.9159 10.1072L31.0264 15.9105Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.0264 15.9105L44.0582 13.1008L39.137 16L40.1505 10.1781L36 6.16577L41.5944 5.37749L43.951 0L46.3949 5.3345L52 6.02181L47.9159 10.1072L49.0264 15.9105Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.0264 15.9105L62.0582 13.1008L57.137 16L58.1505 10.1781L54 6.16577L59.5944 5.37749L61.951 0L64.3949 5.3345L70 6.02181L65.9159 10.1072L67.0264 15.9105Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85.0264 15.9105L80.0582 13.1008L75.137 16L76.1505 10.1781L72 6.16577L77.5944 5.37749L79.951 0L82.3949 5.3345L88 6.02181L83.9159 10.1072L85.0264 15.9105Z"
        fill="black"
      />
    </mask>
  );
}
