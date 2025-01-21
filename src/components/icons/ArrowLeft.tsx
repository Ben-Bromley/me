import { type FC } from 'react';
import { IconProps } from '@/app/types';
import IconWrapper from './_IconWrapper';

const ArrowLeft: FC<IconProps> = ({ className, href }) => {
  return (
    <IconWrapper className={className} href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </IconWrapper>
  );
};

export default ArrowLeft;
