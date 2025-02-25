import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './InputName.module.css';
import { InputNameProps } from './InputName.props';

const InputName = forwardRef(function InputName(
	props: InputNameProps,
	ref: ForwardedRef<HTMLInputElement>
) {
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
});

export default InputName;
