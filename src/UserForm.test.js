import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm/UserForm.component';

test('it shows 2 inputs and a button', () => {
  // render the component

  render(<UserForm />);

  // manipulate the component and find element

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // assertion - make sure component is doing
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
  //
});

test('some random test', () => {
  const mock = jest.fn();

  render(<UserForm addName={mock} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  user.click(nameInput);
  user.type(nameInput, 'unnati');

  user.click(emailInput);
  user.type(emailInput, 'a@a.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'unnati', email: 'a@a.com' });
});
