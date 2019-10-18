import React, { Component } from 'react';
import beerServices from '../services/beerServices';
import '../css/beerlist.css';
import Header from '../components/Header';

class BeerCardList extends Component {
  state = {
    beers: [],
    loading: true,
  };

  async componentDidMount() {
    const beers = await beerServices.getAllBeers();

    if (beers.length > 0) {
      this.setState({ beers, loading: false });
    }
  }

  render() {
    const { beers, loading } = this.state;
    return (
      <div>
        <Header />
        {!loading &&
          beers.map((beer) => {
            return (
              <div className="card__beerlist" key={beer._id}>
                <div className="img-wrap__beerlist">
                  <img src={beer.image_url} alt="beer"></img>
                </div>
                <div>
                  <div>{beer.name}</div>
                  <div>{beer.tagline}</div>
                  <div>{beer.contributed_by}</div>
                  <div>
                    <a href={`/beers/${beer._id}`}>view details</a>
                  </div>
                </div>
              </div>
            );
          })}
        {loading && <div>loading...</div>}
      </div>
    );
  }
}

export default BeerCardList;
