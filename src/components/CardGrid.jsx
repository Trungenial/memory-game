import { useEffect, useState } from "react";
import Card from "./Card";
import "./CardGrid.css";

function getRandomNumber(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers);
}

async function getPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Fetch error for id " + id + ":", error);

        throw error;
    }
}

function shufflePokemons(pokemons) {
    const doublePokemons = [...pokemons, ...pokemons]
        .sort(() => Math.random() - 0.5)
        .map((item) => {
            return { ...item, id: Math.random() };
        });
    return doublePokemons;
}

export default function CardGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [choose, setChoose] = useState({ choose1: "", choose2: "" });

    function handleChoose(e) {
        if (choose.choose1 === "") {
            setChoose({
                ...choose,
                choose1: e.currentTarget.getAttribute("data-name"),
            });
        } else {
            setChoose({
                ...choose,
                choose2: e.currentTarget.getAttribute("data-name"),
            });
        }
    }

    if (choose.choose1 !== "" && choose.choose2 !== "") {
        if (choose.choose1 !== choose.choose2) {
            // use effect here?
            setChoose({ choose1: "", choose2: "" });
        }
    }

    // get 6 pokemon id from 1 to 100
    const pokemonIds = getRandomNumber(6, 1, 100);

    useEffect(() => {
        async function getPokemons(pokemonIds) {
            try {
                const promises = pokemonIds.map((id) => {
                    return getPokemon(id);
                });

                const allPokemons = await Promise.all(promises);
                const finalPokemons = shufflePokemons(allPokemons);
                setPokemons(finalPokemons);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getPokemons(pokemonIds);
    }, []);

    return (
        <div className="card-grid">
            {isloading ? (
                <div>Loading</div>
            ) : (
                pokemons.map((item) => (
                    <Card
                        key={item.id}
                        sourceImg={item.sprites.front_default}
                        name={item.name}
                        handleChoose={handleChoose}
                        choose={choose}
                    />
                ))
            )}
            {error.length > 0 && <div>{error}</div>}
        </div>
    );
}
