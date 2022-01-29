import React, { useState } from "react"
import { ExamName, Row, ExamButton, ExamContainer, NoExam, AddRowButton, ButtonContainer, FinishButton } from './VariableCostsTableStyles';
import AddARow from "./add-a-row/AddARow";
import { useForm } from "react-hook-form";
import Button, { ButtonTypes } from '../../../components/button/Button';
import { CostCalculation } from "./cost-calculation/CostCalculation";
import { Cost } from "../../../models/Cost";
import { setCosts } from '../../../ducks/index';
import { useDispatch } from "react-redux";

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
  console.log("golaa", costs)
  return costs;
}
const VariableCostsTable: React.FunctionComponent<ExamTableProps> = ({ rows }) => {
    const totalRows = []
    const { handleSubmit, register, control } = useForm({});
    const [data, setData] = useState(null);
    const dispatch = useDispatch();

    for (var i = 0; i < rows; i++) {
        const isLast = i == rows -1;
        totalRows.push( 
        <Row index={i} key={i}>
            <ExamContainer>
                <ExamName>   
                    <section>
                    <input name={"name-".concat(i.toString())} className="input" ref={register} />
                    </section>
                </ExamName>
                <ExamButton>               
                    <section>
                    <input name={"price-".concat(i.toString())}  className="input" ref={register} />
                    </section>
                    {isLast && <AddRowButton> <AddARow/></AddRowButton>}
                </ExamButton>
            </ExamContainer>
        </Row>)
     }

    return (
        <React.Fragment>
            <Row style={{
                'borderTop': '1px solid #f0f0f0',
                'borderBottom': '1px solid #d5d5d5',
                'fontSize': '13px'
            }}>
                <ExamContainer>
                    <ExamName>Nombre</ExamName>
                    <ExamButton>Precio</ExamButton>
                </ExamContainer>
            </Row>
            <form onSubmit={handleSubmit(data => {
                setData(data);
                console.log("LA DATA ES", data, typeof(data))
                dispatch(setCosts(mapInputs(data)))
            // dispatch()
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
            <CostCalculation />
        </React.Fragment >
    )
}

export default VariableCostsTable