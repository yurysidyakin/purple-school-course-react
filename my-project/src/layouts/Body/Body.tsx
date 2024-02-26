import cn from 'classnames';
import styles from './Body.module.css';
import { BodyProps } from './BodyProps';

function Body({ children }: BodyProps) {
	return <div className={cn(styles['body'])}>{children}</div>;
}

export default Body;
