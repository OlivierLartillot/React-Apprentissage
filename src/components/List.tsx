import {players} from '../app/data/players';
import Image from 'next/image';

export default function List() {
    
    const listItems = players.map((player) => (
        <li key={player.id}>
            {player.prenom} {player.nom} - {player.club}
            <Image 
                src={player.photo} 
                alt={player.nom} 
                width={200} 
                height={50}
                className="rounded"
            />
        </li>
    
    ));
        return (
        
        <ul>
            {listItems}
        </ul>
        






    );
}