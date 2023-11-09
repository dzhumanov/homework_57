import {useState} from 'react';
import "./App.css";
import ToolBar from "./Components/ToolBar/Toolbar";
import Users from "./Components/Users/Users";
import UsersForm from "./Components/UsersForm/UsersForm";
import { User } from './types';

function App() {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Tema',
      email: 'temadjumanov@gmail.com',
      active: true,
      role: 'admin',
    },
    {
      id: '2',
      name: 'Kanya',
      email: 'duishenalievak@gmail.com',
      active: true,
      role: 'admin',
    },
  ])

  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className='mt-3'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <UsersForm/>
            </div>
            <div className="col-6">
              <Users users={users}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
