import React from 'react';
import Header from '../components/Header';

const Beer = (props) => {
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = props.beer;
  return (
    <div>
      <Header />
      <div>
        <img src={image_url} alt="beer"></img>
      </div>
      <div>
        <div>{name}</div>
        <div>{attenuation_level}</div>
      </div>
      <div>
        <div>{tagline}</div>
        <div>{first_brewed}</div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>{contributed_by}</div>
    </div>
  );
};

export default Beer;
