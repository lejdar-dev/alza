import { ClassNameProp, cn } from '@lejdar/webdev';

type Props = {
  score: number;
} & ClassNameProp;

export default function Rating({ score, className }: Props) {
  // 85 = 5 * (width of one star) + 2 * (gap between every star)
  const mapped = (score / 5) * 85 + 2 * Math.floor(score / 0.2);

  return (
    <svg
      className={cn(className, 'w-min')}
      width="auto"
      height="1em"
      viewBox="0 0 92 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask)">
        <rect width="92" height="16" className="fill-surface" />
        <rect width={mapped} height="16" className="fill-rating" />
      </g>
      <mask
        id="mask"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="92"
        height="16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8405 15.9105L8.5618 13.1008L3.33305 16L4.40991 10.1781L0 6.16577L5.94408 5.37749L8.44799 0L11.0446 5.3345L17 6.02181L12.6606 10.1072L13.8405 15.9105Z"
          fill="#FF6E6E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.8405 15.9105L27.5618 13.1008L22.3331 16L23.4099 10.1781L19 6.16577L24.9441 5.37749L27.448 0L30.0446 5.3345L36 6.02181L31.6606 10.1072L32.8405 15.9105Z"
          fill="#FF6E6E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.8405 15.9105L46.5618 13.1008L41.3331 16L42.4099 10.1781L38 6.16577L43.9441 5.37749L46.448 0L49.0446 5.3345L55 6.02181L50.6606 10.1072L51.8405 15.9105Z"
          fill="#FF6E6E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.8405 15.9105L65.5618 13.1008L60.3331 16L61.4099 10.1781L57 6.16577L62.9441 5.37749L65.448 0L68.0446 5.3345L74 6.02181L69.6606 10.1072L70.8405 15.9105Z"
          fill="#FF6E6E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.0264 15.9105L84.0582 13.1008L79.137 16L80.1505 10.1781L76 6.16577L81.5944 5.37749L83.951 0L86.3949 5.3345L92 6.02181L87.9159 10.1072L89.0264 15.9105Z"
          fill="#FF6E6E"
        />
      </mask>
    </svg>
  );
}

export const story = () => <Rating score={0.5} />;
