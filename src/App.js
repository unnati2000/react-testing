import { useState } from 'react';
import './App.css';
import UserForm from './UserForm/UserForm.component';
import UserList from './UserList/UserList.component';

function App() {
  const [arr, setArr] = useState([]);

  const addName = (props) => {
    setArr([...arr, { name: props.name, email: props.email }]);
  };

  return (
    <div className="App">
      <UserForm addName={addName} />
      <UserList arr={arr} />
    </div>
  );
}

export default App;
