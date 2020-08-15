import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <li>
      <Link to={`/${props.id}/comments`}>
        <div>
          <img src={props.image} alt={props.name} />
        </div>
        <div>{props.name}</div>
      </Link>
    </li>
  );
};

export default UserItem;
