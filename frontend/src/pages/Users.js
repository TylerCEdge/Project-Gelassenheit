import React from 'react';

import UsersList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Someone',
      image: 'https://avatarfiles.alphacoders.com/220/thumb-220030.jpg',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
