import React, { Component } from 'react';
import './Pokecard.css';

function formatNumber(num) {
  return ('000' + num).substr(-3);
}
class Pokecard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h3 className="name">{this.props.pokeData.name}</h3>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber(this.props.pokeData.id)}.png`} />
        <div className="stats">
          <p>Type: {this.props.pokeData.type + "\n"}</p>
          <p>EXP: {this.props.pokeData.base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;