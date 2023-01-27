import React from 'react';
import { Form, Segment, Button, TextArea, Message } from 'semantic-ui-react';
import SegmentDivider from '../views/SegmentDivider';

const SUCCESSFUL_RESULT = 'Message Sent';
const SUCCESS_MESSAGE = 'Message Sent Successfully';
const FAILED_MESSAGE = 'Failed to Send Message, Please try again';

const ContactUsForm = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [result, setResult] = React.useState('');
  const [isHidden, setIsHidden] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleChange = (e, { name, value }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDismiss = () => {
    setIsHidden(true);
  };

  const onSubmit = async () => {
    const { email } = formState;
    const isEmailValid = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
      email
    );
    if (!isEmailValid) {
      setHasError(true);
    } else {
      setHasError(false);
      sendFormData();
    }
  };

  const sendFormData = async () => {
    const { name, email, message } = formState;
    const formData = { name: name, email: email, message: message };
    let response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });

    let result = await response.json();
    setResult(result.status);

    if (result.status === SUCCESSFUL_RESULT) {
      setIsHidden(false);
    }
  };

  return (
    <>
      <SegmentDivider
        headerText={'Contact Us'}
        className={'contact-section'}
        containerId='contact-us'
      />

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Form onSubmit={onSubmit} error={hasError}>
          <Message
            onDismiss={handleDismiss}
            hidden={isHidden}
            color={result === SUCCESSFUL_RESULT ? 'green' : 'red'}
          >
            {result === SUCCESSFUL_RESULT ? SUCCESS_MESSAGE : FAILED_MESSAGE}
          </Message>
          <Message error header='Error' content='Please enter a valid email address' />
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              placeholder='Full name'
              name='name'
              label='Full Name'
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              placeholder='Email'
              name='email'
              label='Email'
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            name='message'
            label='Message'
            onChange={handleChange}
            required
          />
          <Button type='submit' primary content='Submit' />
        </Form>
      </Segment>
    </>
  );
};

export default ContactUsForm;
