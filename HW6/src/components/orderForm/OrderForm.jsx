import { Form, Formik } from 'formik';
import React from 'react';
import styles from './OrderForm.module.css';
import OrderInput from '../orderInput/OrderInput';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { PRICE_TEMPLATE } from '../../constants';
import { setModal } from '../../redux/slices/modalSlice';
import { clearCartItems } from '../../redux/slices/cartSlice';
import { validationSchema } from './validationSchema';

function OrderForm() {
	const fullPrice = useSelector((state) => state.cart.fullPrice);
	const cartItems = useSelector((state) => state.cart.items, shallowEqual);
	const dispatch = useDispatch();

	const initialValues = {
		name: '',
		lastName: '',
		age: '',
		deliveryAddress: '',
		email: '',
		phoneNumber: '',
		fullPrice: PRICE_TEMPLATE(fullPrice),
	};

	const logCartItems = (items) => {
		console.group('Ordered items');
		items.forEach((el) => {
			console.log(
				`${el.count} of '${el.name}' with a total price of ${PRICE_TEMPLATE(
					el.price * el.count
				)}`
			);
		});
		console.groupEnd();
	};

	const logFormValues = (values) => {
		console.group('Form data');
		Object.keys(values).forEach((el) => {
			console.log(`${el}: ${values[el]}`);
		});
		console.groupEnd();
	};

	const onSubmit = (values, actions) => {
		logCartItems(cartItems);
		logFormValues(values);
		actions.resetForm();
		dispatch(clearCartItems());
		dispatch(setModal());
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}>
			{({ isValid }) => (
				<Form className={styles.form}>
					<OrderInput
						type='text'
						name='name'
						label='Name'
						placeholder='Your name'
					/>
					<OrderInput
						type='text'
						name='lastName'
						label='Last name'
						placeholder='Your last name'
					/>
					<OrderInput
						type='number'
						name='age'
						label='Age'
						placeholder='Your age'
					/>
					<OrderInput
						type='text'
						name='deliveryAddress'
						label='Delivery address'
						placeholder='Delivery address'
					/>
					<OrderInput
						type='email'
						name='email'
						label='Email'
						placeholder='Your email'
					/>
					<OrderInput
						type='tel'
						name='phoneNumber'
						label='Phone number'
						placeholder='Your phone number'
					/>
					<OrderInput
						type='text'
						name='fullPrice'
						label='Total price:'
						readOnly={true}
					/>
					<button
						disabled={!isValid}
						type='submit'
						className={styles['submit-btn']}>
						Complete order
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default OrderForm;
