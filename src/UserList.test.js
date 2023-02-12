import { render, screen } from '@testing-library/react';
import UserList from './UserList/UserList.component';

test('render one row per user', () => {
  const users = [
    { name: 'sheep', email: 'sheep@gmail.com' },
    { name: 'brij', email: 'brij@gmail.com' },
  ];
  render(<UserList arr={users} />);

  //   screen.logTestingPlaygroundURL();

  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(3);
});

test('render email and name of each user', () => {});
