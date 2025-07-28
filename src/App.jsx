import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState([]);
  const BASIC_URL = "https://dummyjson.com/users?limit=100";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(BASIC_URL);
      const data = await res.json();
      setUsers(data.users);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Home users={users} />
    </div>
  );
}

export default App;
