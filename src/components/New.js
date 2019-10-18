import React, { Component } from 'react';
import beerServices from '../services/beerServices';
import Header from '../components/Header';

class New extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    inserted: false,
  };

  handlerOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const result = await beerServices.createBeer(this.state);
    if (result) {
      this.setState({ inserted: true });
    }
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
      inserted,
    } = this.state;
    return (
      <div>
        <Header />
        {!inserted && (
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>Name:</div>
              <div>
                <input
                  type="text"
                  onChange={this.handlerOnChange}
                  value={name}
                  name="name"
                ></input>
              </div>
            </div>
            <div>
              <div>TagLine</div>
              <div>
                <input
                  type="text"
                  onChange={this.handlerOnChange}
                  value={tagline}
                  name="tagline"
                ></input>
              </div>
            </div>
            <div>
              <div>Description</div>
              <div>
                <input
                  type="text"
                  onChange={this.handlerOnChange}
                  value={description}
                  name="description"
                ></input>
              </div>
            </div>
            <div>
              <div>First Brewed</div>
              <div>
                <input
                  type="text"
                  onChange={this.handlerOnChange}
                  value={first_brewed}
                  name="first_brewed"
                ></input>
              </div>
            </div>
            <div>
              <div>Brewer Tips</div>
              <div>
                <input
                  type="text"
                  onChange={this.handlerOnChange}
                  value={brewers_tips}
                  name="brewers_tips"
                ></input>
              </div>
            </div>
            <div>
              <div>Attenuation</div>
            </div>
            <div>
              <input
                type="text"
                value={attenuation_level}
                name="attenuation_level"
                onChange={this.handlerOnChange}
              ></input>
            </div>
            <div>
              <div>Contributed by:</div>
              <div>
                <input
                  type="text"
                  value={contributed_by}
                  onChange={this.handlerOnChange}
                  name="contributed_by"
                ></input>
              </div>
            </div>
            <div>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        )}
        {inserted && <div>Good Job</div>}
      </div>
    );
  }
}

export default New;
