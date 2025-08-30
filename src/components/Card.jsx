import { useState, useEffect } from "react";
import "./Card.css";

export default function Card({
    identify,
    sourceImg,
    name,
    handleChoose,
    choose1,
    choose2,
}) {
    const [isFront, setIsFront] = useState(false);

    const handleClick = (e) => {
        // !isFront ? setIsFront(true) : setIsFront(false);
        if (!isFront) {
            setIsFront(true);
            handleChoose(e);
        }
    };

    if (choose2.name !== "" && choose1.name !== choose2.name) {
        if (
            choose1.id === identify.toString() ||
            choose2.id === identify.toString()
        ) {
            setTimeout(() => {
                setIsFront(false);
            }, 900);
        }
    }

    return (
        <div
            className="card"
            onClick={handleClick}
            data-name={name}
            id={identify}
        >
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
