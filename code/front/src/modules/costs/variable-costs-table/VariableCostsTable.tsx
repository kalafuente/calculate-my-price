import React, { useState } from "react"
import { ExamName, Row, CurrencySign, PriceContainer, TableContainer, AddRowButton, ButtonContainer, FinishButton, StepContainer } from './VariableCostsTableStyles';
import AddARow from "./add-a-row/AddARow";
import { useForm } from "react-hook-form";
import Button, { ButtonTypes } from '../../../components/button/Button';
import { CostCalculation } from "./cost-calculation/CostCalculation";
import { Cost, STEP } from "../../../models/Cost";
import { setCosts, finishStep } from '../../../ducks/index';
import { useDispatch, useSelector } from "react-redux";
import { AddProductResult } from "./add-product-result/AddProductResult";
import { stepSelector } from '../../../selectors/index';
import StepTitle from '../../../components/step-title/StepTitle';
import { AddGain } from "./add-gain/AddGain";

type ExamTableProps = {
    rows: number,
}

const mapInputs = (inputs) => {
    const costs : Cost[] = [];
    Object.keys(inputs).map(function(key, index) {
        const price = parseFloat(inputs['price-'.concat(index.toString())])
        if(price){
            costs.push(
                {
                    'name': inputs['name-'.concat(index.toString())],
                    'price': price,
                }
            )
        }
  });
  return costs;
}
const VariableCostsTable: React.FunctionComponent<ExamTableProps> = ({ rows }) => {
    const totalRows = []
    const { handleSubmit, register } = useForm({});
    const dispatch = useDispatch();
    const step: STEP = useSelector(stepSelector)

    for (var i = 0; i < rows; i++) {
        const isLast = i == rows -1;
        totalRows.push( 
        <Row index={i} key={i} data-type="tabla">
                <ExamName>   
                    <section>
                    <input name={"name-".concat(i.toString())} className="input" ref={register} />
                    </section>
                </ExamName>
                <PriceContainer>   
                    <CurrencySign>$</CurrencySign>
                    <section>
                    <input name={"price-".concat(i.toString())}  className="input" ref={register} />
                    </section>
                    {isLast && <AddRowButton> <AddARow/></AddRowButton>}
                </PriceContainer>
        </Row>)
     }

    return (
        <React.Fragment>
        {
            step === STEP.VARIABLE_COSTS &&  
            <StepContainer>
            <StepTitle title='Costos variables' />
            <TableContainer>
                <div>
                    <Row style={{
                        'fontSize': '16px'
                    }}>
                            <ExamName>Nombre</ExamName>
                            <PriceContainer>Precio</PriceContainer>
                    </Row>
                </div>
                <div>
                    <form onSubmit={handleSubmit(data => {
                        dispatch(setCosts(mapInputs(data)))
                        dispatch(finishStep())
                    })} className="form" >
                        {
                        totalRows
                        }
                        <FinishButton>
                            <ButtonContainer>
                                    <Button type='submit' text="Finalizar" styleType={ButtonTypes.PRIMARY} />
                        </ButtonContainer>
                        </FinishButton>
                    </form >
                </div>

            </TableContainer>

            </StepContainer >
        }
        {
            step === STEP.RESULT && <AddProductResult/>
        }
        {
            step === STEP.GAIN && <AddGain/>
        }
        {
            step === STEP.GET_MY_PRICE && <CostCalculation />
        }          
        </React.Fragment >
    )
}

export default VariableCostsTable