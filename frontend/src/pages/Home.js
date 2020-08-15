import React from 'react';

import Table from '../components/Table';
import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
import Searchbar from '../components/Searchbar';
import Card from '../components/Card';

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <hr />
        <Searchbar />
        <Jumbotron />
        <Table />
        <Card />
      </Container>
    </React.Fragment>
  );
};

export default Home;
