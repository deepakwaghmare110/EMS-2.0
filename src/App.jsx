import { useEffect, useState } from "react";
import Table, { Cell, HeadCell, Row, TBody, THead } from "@atlaskit/table";
import Heading from "@atlaskit/heading";

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
      <div className="heading">
        <Heading size="large">Employee Management System</Heading>
      </div>
      <Table>
        <THead>
          <HeadCell>First Name</HeadCell>
          <HeadCell>Last Name</HeadCell>
          <HeadCell>Company</HeadCell>
          <HeadCell>Blood Group</HeadCell>
          <HeadCell>Email</HeadCell>
          <HeadCell>Phone Number</HeadCell>
        </THead>
        <TBody>
          {users.map((user) => (
            <Row key={user.id}>
              <Cell>{user.firstName}</Cell>
              <Cell>{user.lastName}</Cell>
              <Cell>{user.company.name}</Cell>
              <Cell>{user.bloodGroup}</Cell>
              <Cell>{user.email}</Cell>
              <Cell>{user.phone}</Cell>
            </Row>
          ))}
        </TBody>
      </Table>
    </div>
  );
}

export default App;
