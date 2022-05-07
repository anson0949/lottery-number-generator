import { useState } from "react";
import "./LotteryNumberComponent.scss";

const Set = require("sorted-set");
const COLOURS = ["grey", "blue", "pink", "green", "yellow"];

const LotteryNumberComponent = () => {
    const [values, setValues] = useState<number[]>(generateNewValues());

    return (
        <>
            <div className="lottery-numbers">
                {values.map((value) => (
                    <Ball value={value} />
                ))}
                {/* Just add <Ball > here for the special ball, can add special parameter saying that ball is special for different styling */}
            </div>
            <button onClick={() => setValues(generateNewValues())}>
                Generate new numbers
            </button>
        </>
    );
};

interface NumberProps {
    value: number;
}

const Ball = ({ value }: NumberProps) => {
    return (
        <div className={`number number-${COLOURS[Math.floor(value / 10)]}`}>
            {value}
        </div>
    );
};

function generateNewValues() {
    var set = new Set();

    while (set.length < 6) {
        const newNum = generateRandomInt();

        set.add(newNum);
    }

    return set.values();
}

function generateRandomInt() {
    return Math.floor(Math.random() * 49) + 1;
}

export default LotteryNumberComponent;
