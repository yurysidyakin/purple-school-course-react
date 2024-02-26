import cn from 'classnames';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import styles from './Header.module.css';

function Header({ User }) {
	return (
		<div className={cn(styles['header'])}>
			<Logo />
			<Menu User={User} />
		</div>
	);
}

export default Header;
