import { useState } from "react";
import "./Card.css";

export default function Card() {
    const [isFront, setIsFront] = useState(false);

    const handleClick = () => {
        !isFront ? setIsFront(true) : setIsFront(false);
    };

    return (
        <div className="card" onClick={handleClick}>
            <div
                className={
                    "card__front" +
                    " " +
                    (isFront ? "card__front-show" : "card__front-hide")
                }
            >
                ❓
            </div>
            <div
                className={
                    "card__back" +
                    " " +
                    (isFront ? "card__back-hide" : "card__back-show")
                }
            ></div>
        </div>
    );
}
