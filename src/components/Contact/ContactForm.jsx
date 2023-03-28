import React, { useState, useRef } from 'react';
import { ReactComponent as CheckmarkIcon } from '../../assets/shared/desktop/icon-check.svg';

const ContactForm = () => {
	// CheckBox State
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckBoxChange = event => {
		setIsChecked(event.target.checked);
	};

	// Form Validation
	// Name
	const [enteredName, setEnteredName] = useState('');
	const enteredNameIsValid = enteredName !== '';
	const [nameInputWasTouched, setNameInputWasTouched] = useState(false);
	const nameInputIsInvalid = enteredName === '' && nameInputWasTouched;
	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value);
	};
	const nameInputBlurHandler = () => {
		setNameInputWasTouched(true);
	};

	// Email
	const [enteredEmail, setEnteredEmail] = useState('');
	const [emailInputWasTouched, setEmailInputWasTouched] = useState(false);
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
	const enteredEmailIsValid = emailRegex.test(enteredEmail);
	const emailInputIsInvalid =
		(enteredEmail === '' || !emailRegex.test(enteredEmail)) && emailInputWasTouched;
	const emailInputChangeHandler = event => {
		setEnteredEmail(event.target.value);
	};
	const emailInputBlurHandler = () => {
		setEmailInputWasTouched(true);
	};

	// Company
	const companyName = useRef();

	// Message Title
	const messageTitle = useRef();

	// Message
	const [enteredMessage, setEnteredMessage] = useState('');
	const enteredMessageIsValid = enteredMessage !== '';
	const [messageWasTouched, setMessageInputWasTouched] = useState(false);
	const messageInputIsInvalid = enteredMessage === '' && messageWasTouched;
	const messageInputChangeHandler = event => {
		setEnteredMessage(event.target.value);
	};
	const messageInputBlurHandler = () => {
		setMessageInputWasTouched(true);
	};

	// Form Submit
	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = event => {
		event.preventDefault();
		let submissionData;

		if (formIsValid) {
			submissionData = {
				name: enteredName,
				email: enteredEmail,
				company: companyName.current.value.trim(),
				messageTitle: messageTitle.current.value.trim(),
				message: enteredMessage,
				emailUpdates: isChecked,
			};
			setEnteredName('');
			setEnteredEmail('');
			companyName.current.value = '';
			messageTitle.current.value = '';
			setEnteredMessage('');
			setNameInputWasTouched(false);
			setEmailInputWasTouched(false);
			setMessageInputWasTouched(false);
		} else return;

		console.log(submissionData);
	};

	return (
		<form onSubmit={formSubmissionHandler} className='contact__form'>
			<div className={`form-group ${nameInputIsInvalid ? 'error' : ''}`}>
				<div className='input-container'>
					<label className='sr-only' htmlFor='name'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Name'
						maxLength='100'
						value={enteredName}
						onChange={nameInputChangeHandler}
						onBlur={nameInputBlurHandler}
					></input>
				</div>
				<p className='form-group-error'>This field can't be empty</p>
			</div>
			<div className={`form-group ${emailInputIsInvalid ? 'error' : ''}`}>
				<div className='input-container'>
					<label className='sr-only' htmlFor='email'>
						Email Address
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={enteredEmail}
						placeholder='Email Address'
						maxLength='255'
						onChange={emailInputChangeHandler}
						onBlur={emailInputBlurHandler}
					></input>
				</div>
				<p className='form-group-error'>This field can't be empty</p>
			</div>
			<div className='form-group'>
				<div className='input-container'>
					<label className='sr-only' htmlFor='company'>
						Company Name
					</label>
					<input
						type='text'
						id='company'
						name='company'
						placeholder='Company Name'
						maxLength='100'
						ref={companyName}
					></input>
				</div>
			</div>
			<div className='form-group'>
				<div className='input-container'>
					<label className='sr-only' htmlFor='title'>
						Title
					</label>
					<input
						type='text'
						id='title'
						name='title'
						placeholder='Title'
						maxLength='100'
						ref={messageTitle}
					></input>
				</div>
			</div>
			<div className={`form-group ${messageInputIsInvalid ? 'error' : ''}`}>
				<div className='input-container'>
					<label className='sr-only' htmlFor='message'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						placeholder='Message'
						value={enteredMessage}
						maxLength='500'
						onChange={messageInputChangeHandler}
						onBlur={messageInputBlurHandler}
					></textarea>
				</div>
				<p className='form-group-error'>This field can't be empty</p>
			</div>
			<div className='checkbox-container'>
				<label className='sr-only' htmlFor='updates'>
					Stay up-to-date with company announcements and updates to our API
				</label>
				<input
					onChange={handleCheckBoxChange}
					type='checkbox'
					id='updates'
					name='updates'
					value='yes'
				></input>
				<CheckmarkIcon className={isChecked ? 'checked' : ''} />
				<p>Stay up-to-date with company announcements and updates to our API</p>
			</div>
			<button type='submit' className='button button-secondary button-dark'>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
