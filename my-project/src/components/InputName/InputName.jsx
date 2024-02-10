import { forwardRef } from 'react';
import styles from './InputName.module.css';
import cn from 'classnames';


const InputName = forwardRef(function InputName(props, ref)  {

	return (
		<input
			{...props}
			ref={ref}
			type='text'
			className={cn(styles['input-name'])}
			placeholder={props.placeholder}
			value={props.value} 
		/>
	);
}
);


export default InputName;
