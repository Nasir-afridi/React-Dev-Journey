import React, { useEffect, useState } from "react";

const FetchConsole = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h2>Fetching data...</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} : {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchConsole;
