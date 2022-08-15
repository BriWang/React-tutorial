import { useState } from "react";
import Users from './components/Users';
import NewUser from "./components/NewUser";


function App() {

  const dummy_users = [
    {
      id: 'e1',
      name: 'Max Tennet',
      age: 34
    },
    {
      id: 'e2',
      name: 'Hugo Adkins',
      age: 24
    },
    {
      id: 'e3',
      name: 'Mark Ballinger',
      age: 63
    },
    {
      id: 'e4',
      name: 'Scott Cable',
      age: 15
    },
  ];

  const [users, setUsers] = useState(dummy_users);

  const addUser = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  }

  return (
    <div>
      <NewUser onAddUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
