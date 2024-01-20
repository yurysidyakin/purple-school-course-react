import styles from './Logo.module.css';
import cn from 'classnames';

function Logo() {
	return <img src='./logo.svg' alt='logo' className={cn(styles['logo'])} />;
}

export default Logo;
