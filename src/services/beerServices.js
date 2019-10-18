import axios from 'axios';

class BeerService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers',
    });
  }

  getABeer(beerId) {
    return this.axios.get('/' + beerId).then(({ data: beer }) => beer);
  }
  getRandomBeer() {
    return this.axios.get('/random').then(({ data: beer }) => beer);
  }
  getAllBeers() {
    return this.axios
      .get('/')
      .then(({ data: beers }) => beers.slice(0, 30))
      .catch((err) => console.log(err));
  }
  createBeer(beer) {
    return this.axios
      .post('/new', beer)
      .then(({ data: beer }) => beer)
      .catch((err) => console.log(err));
  }
}

const beerService = new BeerService();

export default beerService;
