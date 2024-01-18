import cn from 'classnames';
import styles from './Container.module.css';

function Container({ children }) {
	return <div className={cn(styles['container'])}>{children}</div>;
}

export default Container;
