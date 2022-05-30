import React, { useEffect, useState } from "react";
import UserModel from "../types/models";

import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const [team, setTeam] = useState<UserModel[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (user: UserModel) => {
    setTeam([...team, user]);
  };

  return (
    <div>
      <h3>My Users</h3>
      <h4>Team Size {team.length}</h4>
      {users.map((user) => (
        <User user={user} addUser={addUser}></User>
      ))}
    </div>
  );
};

export default Users;
