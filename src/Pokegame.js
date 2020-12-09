import {Component} from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {

    static defaultProps = {
        pokecards: [
            {id: 4, name:"Charmandar", type: "fire" , exp: 62},
            {id: 7, name: "Squirtle", type: "water", exp: 63},
            {id: 11, name: "Metapod", type: "bug", exp: 72},
            {id: 12, name: "Butterfree", type: "flying", exp: 178},
            {id: 25, name: "Pikachu", type: "electric", exp: 112},
            {id: 39, name: "Jigglypuff", type: "normal", exp: 95},
            {id: 94, name: "Gengar", type: "poison", exp: 225},
            {id: 133, name: "Eevee", type: "normal", exp: 65}
        ]
    }

    render() {
        const cards = this.props.pokecards;
       
        function rand() {
            let randCards = [];
            for(let i = 0; i < 4; i++) {
                randCards.push(cards[Math.floor(Math.random() * cards.length)]);
            }
            return randCards;
        }

        const firstHand = rand();
        const secondHand = rand();

        const exp1 = firstHand.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        const exp2 = secondHand.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        return (
            <div>
                <Pokedex className='Pokedex-cards' hand={firstHand} exp={exp1} isWinner={exp1 > exp2? true : false} />
                <Pokedex className='Pokedex-cards' hand={secondHand} exp={exp2} isWinner={exp2 > exp1? true : false} />
            </div>
        );
    }
}

export default Pokegame;
