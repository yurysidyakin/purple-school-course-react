import cn from 'classnames';
import styles from './Title.module.css';
import { TitleProps } from './TitleProps';

function Title({ children }: TitleProps) {
	return <h1 className={cn(styles['title'])}>{children}</h1>;
}

export default Title;
