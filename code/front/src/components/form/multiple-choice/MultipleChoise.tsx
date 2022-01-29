import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { Question } from "../../../models/Cost";

type MultipleChoiseProps = {
    question: Question,
    control: any,
}

const MultipleChoise: React.FunctionComponent<MultipleChoiseProps> = ({ question, control }) => {
    return (
        <section>
            <Controller
                as={
                    <RadioGroup aria-label={"MultipleChoise".concat(question.id.toString())}>
                        {
                            question.options?.map(function (item, i) {
                                return (
                                    <FormControlLabel
                                        value={item}
                                        control={<Radio />}
                                        label={item}
                                        key={item.toString()}
                                    />
                                );
                            })
                        }
                    </RadioGroup>
                }
                name={question.id.toString()}
                control={control}
            />
        </section>
    );
}

export default MultipleChoise
