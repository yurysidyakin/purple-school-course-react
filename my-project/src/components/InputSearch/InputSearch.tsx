import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { InputSearchProps } from './InputSearch.Props';
import styles from './InputSearch.module.css';

const InputSearch = forwardRef(function InputSearch(
	props: InputSearchProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<input
			{...props}
			ref={ref}
			type='text'
			className={cn(styles['input-search'])}
			placeholder={props.placeholder}
			value={props.value}
		/>
	);
});

export default InputSearch;
