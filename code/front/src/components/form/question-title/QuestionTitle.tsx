import React from "react";
import { Numeration, Question } from './QuestionTitleStyles';

type QuestionTitleProps = {
    total: number,
    numeration: number,
    question: string,
}

const QuestionTitle: React.FunctionComponent<QuestionTitleProps> = ({ total, numeration, question }) => {
    return (
        <React.Fragment>
            <Numeration>
                {numeration.toString().concat("/").concat(total.toString())}
            </Numeration>
            <Question>
                {question}
            </Question>
        </React.Fragment>
    );
}

export default QuestionTitle
