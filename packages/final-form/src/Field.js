import React from 'react';
import { Field } from 'react-final-form';
import BaseTextInput from '../../core/src/components/Text-Input';

export default function FField({ ...props }): JSX.Element {
	return <Field {...props} component={BaseTextInput} />;
}
