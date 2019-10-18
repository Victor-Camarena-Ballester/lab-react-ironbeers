import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/beers">All Beers</Link>
        </li>
        <li>
          <Link to="/beers/random">Random Beer</Link>
        </li>
        <li>
          <Link to="/beers/new">New Beer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
