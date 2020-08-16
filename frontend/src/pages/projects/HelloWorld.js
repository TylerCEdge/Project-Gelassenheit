import React from 'react';

import '../../css/CustomContainer.css';

import Searchbar from '../../components/Searchbar';
import Jumbotron from '../../components/Jumbotron';
import Table from '../../components/Table';
import Card from '../../components/Card';

const HelloWorld = () => {
  return (
    <React.Fragment>
      <Searchbar />
      <Jumbotron />
      <Table />
      <Card />
    </React.Fragment>
  );
};

export default HelloWorld;
