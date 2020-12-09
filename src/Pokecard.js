import React , {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {

    

    render() {
        const props = this.props;

        let id = props.id < 1000? `00${props.id}`.slice(-3) : props.id;

        return (
                <div className='Pokecard'>
                    <h1>{props.name}</h1>
                    <div className='Pokecard-img'>
                        <img 
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} 
                        alt={props.name}
                    />
                    </div>
                    <div class='Pokecard-data'>Type: {props.type}</div>
                    <div class='Pokecard-data'>EXP: {props.exp}</div>
                </div>
            )
    }
}

export default Pokecard;