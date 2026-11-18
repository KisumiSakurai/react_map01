import { useState } from 'react';
import './App.css';

function App() {
  type User = {
    id: number;
    name: string;
    active: boolean;
  };

  const [users, setUsers] = useState<User[]>([
    { id: 1, name: '田中', active: true },
    { id: 2, name: '佐藤', active: false },
    { id: 3, name: '鈴木', active: true },
  ]);

  function toggleActive(id: number) {
    const newLists = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          active: !user.active,
        };
      }
      return user;
    });
    setUsers(newLists);
  }

  function addUser() {
    setUsers((prev) => [...prev, { id: 4, name: '高橋', active: false }]);
  }

  function deleteUser() {
    const newLists = users.filter((user) => user.active)
    setUsers(newLists);
  }

  return (
    <>
      <section>
        <ul>
          {users.map((user) => (
            <li onClick={() => toggleActive(user.id)}>
              {user.id}:{user.name} {user.active ? '🟢' : '⚪️'}
            </li>
          ))}
        </ul>
        <button onClick={addUser}>ユーザー追加</button>
        <button onClick={deleteUser}>非アクティブを削除</button>
      </section>
    </>
  );
}

export default App;
