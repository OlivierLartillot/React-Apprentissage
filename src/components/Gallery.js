import Card from '../components/Card';  

function Profile({prenom}) {
  return (
    <Card>
      <h3>{prenom}</h3>
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
        className="w-32 h-32 rounded border-4 border-black shadow-lg"
      />
    </Card>
  );
}




export default function Gallery() {
  return (
    <section className="container bg-blue-200 p-6">
      <h2 className="text-1xl font-bold mb-3">Scientifiques de renom</h2>
      <div className="flex gap-3 justify-center">
        <Profile prenom="Lucien"/>
        <Profile prenom="Jean-Pierre"/>
        <Profile prenom="Eustache"/>
      </div>
    </section>
  );
}