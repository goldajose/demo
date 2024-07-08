import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <header>
        <h1>Users</h1>
      </header>
      <main>
        <ul>
          {users.map((u) => (
            <li key={u.name}>{u.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
