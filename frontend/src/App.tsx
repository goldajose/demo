import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api";

function App() {
  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((e) => console.log(e));
  }, []);
  const [users, setUsers] = useState([]);
  return (
    <>
      <header>
        <h1>Users</h1>
      </header>
      <main>
        <ul>
          {users.map((u) => (
            <li>{u.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
