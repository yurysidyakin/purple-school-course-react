import styles from './Title.module.css';
import cn from 'classnames';

function Title({ title }) {
	return <h1 className={cn(styles['title'])}>{title}</h1>;
}

export default Title;
