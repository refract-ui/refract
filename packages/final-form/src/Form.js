import React from 'react';
import { Form } from 'react-final-form';

export default function FForm({ ...props }): JSX.Element {
	console.log(props)
	return <Form {...props} />;
}
