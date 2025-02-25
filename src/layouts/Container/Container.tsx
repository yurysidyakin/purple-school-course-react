import cn from 'classnames';
import styles from './Container.module.css';
import { ContainerProps } from './ContainerProps';

function Container({ children }: ContainerProps) {
	return <div className={cn(styles['container'])}>{children}</div>;
}

export default Container;
