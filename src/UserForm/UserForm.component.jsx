import { useState } from 'react';

const UserForm = ({ addName }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addName({ name, email });
    setEmail('');
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
