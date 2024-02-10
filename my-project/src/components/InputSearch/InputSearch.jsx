
import { forwardRef } from 'react';
import styles from './InputSearch.module.css';
import cn from 'classnames';


const InputSearch = forwardRef(function InputSearch(props, ref)  {

	return (
		<input
			{...props}
			ref={ref}
			type='text'
			className={cn(styles['input-search'])}
			placeholder={props.placeholder}
			
		/>
	);
}
);


export default InputSearch;
