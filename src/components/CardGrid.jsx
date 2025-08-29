import Card from "./Card";
import "./CardGrid.css";

const pokemons = [
    {
        name: "pikachu",
    },
    {
        name: "dragon",
    },
    {
        name: "pikachu",
    },
    {
        name: "dragon",
    },
    {
        name: "pikachu",
    },
    {
        name: "dragon",
    },
];

export default function CardGrid() {
    const doublePokemons = [...pokemons, ...pokemons]
        .sort(() => Math.random() - 0.5)
        .map((item) => {
            return { ...item, id: Math.random() };
        });

    return (
        <div className="card-grid">
            {doublePokemons.map((item) => (
                <Card key={item.id} />
            ))}
        </div>
    );
}
