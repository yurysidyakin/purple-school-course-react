import styles from './InputSearch.module.css';
import cn from 'classnames';

function InputSearch() {
	return (
		<input
			type='text'
			className={cn(styles['input-search'])}
			placeholder='Введите название'
		/>
	);
}

export default InputSearch;
