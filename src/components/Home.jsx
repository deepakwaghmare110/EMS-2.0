import Table, { Cell, HeadCell, Row, TBody, THead } from "@atlaskit/table";
import Heading from "@atlaskit/heading";
import Textfield from "@atlaskit/textfield";
import { useState } from "react";

const Home = ({ users }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <div>
      <div className="heading">
        <Heading size="large">Employee Management System</Heading>
      </div>
      <Textfield
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search for employee"
        className="search-bar"
      />
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
          {filteredUsers.map((user) => (
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
};

export default Home;
