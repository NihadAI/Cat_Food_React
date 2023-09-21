import React from 'react';
import styles from './OrderInput.module.css';
import { useField } from 'formik';
import { PatternFormat } from 'react-number-format';
import { PropTypes } from 'prop-types';

function OrderInput(props) {
	const { name, label } = props;
	const [field, meta] = useField(name);

	// if (field.name === 'name') console.clear();
	// console.log(meta);

	const id = `${field.name}-${Math.floor(Math.random() * 1000)}`;
	return (
		<div
			className={styles.wrapper}
			style={
				props.readOnly
					? {
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
					  }
					: {}
			}>
			<label
				className={styles.label}
				htmlFor={id}>
				{label}
			</label>
			{props.type === 'tel' ? (
				<PatternFormat
					format='(###) ### ## ##'
					allowEmptyFormatting
					mask='_'
					className={styles.input}
					id={id}
					{...props}
					{...field}
				/>
			) : (
				<input
					style={meta.error && meta.touched ? { borderColor: 'red' } : {}}
					className={styles.input}
					id={id}
					{...props}
					{...field}
				/>
			)}
			{meta.touched && <p className={styles.error}>{meta.error}</p>}
		</div>
	);
}

OrderInput.propTypes = {
	item: PropTypes.object.isRequired,
};

export default OrderInput;
