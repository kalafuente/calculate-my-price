import React from "react";
import { Question } from "../../../ducks";

type InputProps = {
    question: Question,
    register: any,
}

const Input: React.FunctionComponent<InputProps> = ({ question, register }) => {
    return (
        <section>
            <input name={question.id.toString()} className="input" ref={register} />
        </section>
    );
}

export default Input
