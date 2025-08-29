import { useState } from "react";
import "./Card.css";

export default function Card({ sourceImg, name, handleChoose, choose }) {
    const [isFront, setIsFront] = useState(false);

    const handleClick = (e) => {
        // !isFront ? setIsFront(true) : setIsFront(false);
        if (!isFront) {
            setIsFront(true);
            handleChoose(e);
        } else {
            setIsFront(false);
        }
    };
    console.log(choose);

    return (
        <div className="card" onClick={handleClick} data-name={name}>
            <div
                className={
                    "card__front" +
                    " " +
                    (isFront ? "card__front-show" : "card__front-hide")
                }
            >
                <img src={sourceImg} alt="." />
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
