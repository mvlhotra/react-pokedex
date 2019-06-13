import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {
  render() {
    let title;
    this.props.isWinner ? title = <h1 className="winner">Winning Hand</h1> :
      title = <h1 className="loser">Losing Hand</h1>;
    return (
      <div>
        <div className="cardGrid">
          <div className="outcome">
            {title}
            <h4>Total EXP: {this.props.exp}</h4>
          </div>
          <div className="cardSet">
            {this.props.pokemon.map((p) => (
              <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Pokedex;