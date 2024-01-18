import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import cn from 'classnames';

import styles from './Header.module.css';

function Header() {
	return (
		<div className={cn(styles['header'])}>
			<Logo />
			<Menu />
		</div>
	);
}

export default Header;
