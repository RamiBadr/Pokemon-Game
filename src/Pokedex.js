import React , {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {

    // static defaultProps = {
    //     pokecards: [
    //         {id: 4, name:"Charmandar", type: "fire" , exp: 62},
    //         {id: 7, name: "Squirtle", type: "water", exp: 63},
    //         {id: 11, name: "Metapod", type: "bug", exp: 72},
    //         {id: 12, name: "Butterfree", type: "flying", exp: 178},
    //         {id: 25, name: "Pikachu", type: "electric", exp: 112},
    //         {id: 39, name: "Jigglypuff", type: "normal", exp: 95},
    //         {id: 94, name: "Gengar", type: "poison", exp: 225},
    //         {id: 133, name: "Eevee", type: "normal", exp: 65}
    //     ]
    // }

    render() {
        const props = this.props;
        return (
            <div className='Pokedex'>
                
                {props.isWinner? <h2 style={{color: 'green'}}>WINNER</h2> : <h2 style={{color: 'red'}}>LOSER</h2>}
                <p><strong>Total Experience: {props.exp}</strong></p>
                <div className='Pokedex-cards'>
                    {props.hand.map((pok) => <Pokecard id={pok.id} name={pok.name} type={pok.type} exp={pok.exp}/>)}
                </div>
                
            </div>
            
            );
    }
} 

export default Pokedex;