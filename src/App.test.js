import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateAccount from './Components/createaccount';

test("user-events allows users to add...", () => {
  const{getByText, getByPlaceholderText} = render(<CreateAccount/>)

  const input = getByPlaceholderText('Enter email');

  userEvent.type(input, 'ab@mit.edu')
  expect(input).toHaveValue('ab@mit.edu')
})