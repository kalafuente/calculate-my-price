
import { Item, RadioButtonStyled } from './TrueOrFalseStyles';
import React from "react";
import { Question } from "../../../ducks";
import { Controller } from 'react-hook-form';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

type TrueOrFalseProps = {
    question: Question,
    control: any,
}

const TrueOrFalse: React.FunctionComponent<TrueOrFalseProps> = ({ question, control }) => {
    return (
        <section>
            <Controller
                as={
                    <RadioButtonStyled>
                        <RadioGroup aria-label={"TrueOrFalso".concat(question.id.toString())}>
                            <Item first={true}>
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Verdadero"
                                />
                            </Item>
                            <Item>
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="Falso"
                                />
                            </Item>
                        </RadioGroup>
                    </RadioButtonStyled>

                }
                name={question.id.toString()}
                control={control}
            />
        </section>
    );
}

export default TrueOrFalse
