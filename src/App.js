import React, { useEffect, useState } from "react";
import User from "./User";

export default function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  const showUsers = usersData.map((user) => {
    return (
      <User
        key={user.id}
        data={usersData[user.id - 1]}
        contactName={user.name}
      />
    );
  });

  return <div className="space-y-10">{showUsers}</div>;
}
