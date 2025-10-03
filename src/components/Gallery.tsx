import Card from './Card';  
import Image from 'next/image'
import {players} from '../app/data/players';

interface ProfileProps {
  prenom: string;
  nom: string;
  photo: string;
  club: string;
  poste: string;
  pays: string;
}


function Profile({...player}: ProfileProps) {
  return (
    <Card>
      <h3>{player.prenom} {player.nom}</h3>
      <Image 
        src={player.photo} 
        alt={player.nom} 
        width={200} 
        height={50}
        className="rounded"
      />
      <span>Club: {player.club}</span><br/>
      <span>Poste: {player.poste}</span><br/>
      <span>Pays: {player.pays}</span>  
    </Card>
  );
}




export default function Gallery() {
  return (
    <section className="container bg-blue-200 p-6">
      <h2 className="text-1xl font-bold mb-3">Footballeurs de renom</h2>
      <div className="flex gap-3 justify-center">
        {
          players.map((player) =>(
            <Profile key={player.id} {...player} />
          )
        )
        }
      </div>
    </section>
  );
}