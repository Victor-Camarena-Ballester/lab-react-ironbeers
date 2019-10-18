import React, { Component } from 'react';
import beerServices from '../services/beerServices';

class GetData extends Component {
  state = {
    beer: {},
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    let beer = {};

    if (id === 'random') {
      beer = await beerServices.getRandomBeer();
    } else {
      beer = await beerServices.getABeer(id);
    }

    if (beer) {
      this.setState({ beer });
    }
  }

  render() {
    const { beer } = this.state;
    const { children } = this.props;
    return <div>{children(beer)}</div>;
  }
}

export default GetData;
