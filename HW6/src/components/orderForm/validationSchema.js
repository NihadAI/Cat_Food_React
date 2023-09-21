import { object, string, number } from 'yup';

export const validationSchema = object({
	name: string()
		.required('Is required')
		.min(2, 'Must be at least 2 characters'),
	lastName: string()
		.required('Is required')
		.min(2, 'Must be at least 2 characters'),
	age: number()
		.required('Is required')
		.integer('Please, enter age as an integer')
		.min(16, 'You must be at least 16 years old to continue')
		.max(122, 'You are breaking the Guinness World Record!'),
	email: string().required('Is required').email('Invalid email format'),
	deliveryAddress: string().required('Is required'),
	phoneNumber: string().required('Is required'),
});
