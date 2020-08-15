import React from 'react';

import UserItem from './UserItem';

const UserList = (props) => {
  if (props.items.length === 0) {
    return <div>No one is here 😥</div>;
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
