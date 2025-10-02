export default function Card({children}){
    return(
        <div className="card p-4 border-2 border-black rounded rounded-xl shadow-lg bg-white">
            {children}
        </div>
    );
}