import React, { Component } from 'react';
import './Pokecard.css';

function formatNumber(num) {
  return ('000' + num).substr(-3);
}
class Pokecard extends Component {
  render() {
    return (
      <div className="card">
        <h3 className="name">{this.props.name}</h3>
        <img alt={`${this.props.name}`} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber(this.props.id)}.png`} />
        <div className="stats">
          <p>Type: {this.props.type}</p>
          <p>EXP: {this.props.exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;