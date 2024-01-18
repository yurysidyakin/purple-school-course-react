import styles from './InputSearch.module.css';

function InputSearch() {
	return (
		<input
			type='text'
			className={styles['input-search']}
			placeholder='Введите название'
		/>
	);
}

export default InputSearch;
