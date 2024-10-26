import { type FC } from 'react';
import { IconProps } from '@/app/types';
import Link from 'next/link';

type IconWrapperProps = IconProps & {
	children?: JSX.Element;
};
const IconWrapper: FC<IconWrapperProps> = ({ children, className, href }) => {
	className = `${className} transition-colors duration-150`;
  
  if (href) {
		return (
			<Link className={className} href={href}>
				{children}
			</Link>
		);
	}

	return <span className={className}>{children}</span>;
};

export default IconWrapper;