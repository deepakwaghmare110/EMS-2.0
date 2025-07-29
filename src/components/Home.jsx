import Table, { Cell, HeadCell, Row, TBody, THead } from "@atlaskit/table";
import Heading from "@atlaskit/heading";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import { useState } from "react";

const Home = ({ users }) => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (selectedOption) => {
    setSortKey(selectedOption.value);
  };

  const filteredUsers = users
    .filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;

      let valA = a[sortKey];
      let valB = b[sortKey];

      if (sortKey === "age") {
        return Number(valA) - Number(valB);
      }

      valA = valA.toString().toLowerCase();
      valB = valB.toString().toLowerCase();

      return valA.localeCompare(valB);
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

      <div style={{ margin: "16px 0", width: "250px" }}>
        <Select
          onChange={handleSort}
          inputId="sort-key"
          options={[
            { label: "All", value: "" },
            { label: "First Name", value: "firstName" },
            { label: "Last Name", value: "lastName" },
            { label: "Age", value: "age" },
          ]}
          placeholder="Sort by"
        />
      </div>

      <Table>
        <THead>
          <HeadCell>First Name</HeadCell>
          <HeadCell>Last Name</HeadCell>
          <HeadCell>Company</HeadCell>
          <HeadCell>Blood Group</HeadCell>
          <HeadCell>Age</HeadCell>
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
              <Cell>{user.age}</Cell>
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
