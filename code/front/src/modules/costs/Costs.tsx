import React from "react"
import Title from "../../components/titles/Title";
import VariableCostsTable from "./variable-costs-table/VariableCostsTable";
import { TitleContainer } from "./CostsStyles";

type VariableCostsProps = {
    rows: number
};

const VariableCosts: React.FunctionComponent<VariableCostsProps> = ({ rows }) => {
    return (
        <React.Fragment>
            <TitleContainer>
                <Title title='Calculá tu precio de venta' />
            </TitleContainer>
            <VariableCostsTable rows={rows} />
        </React.Fragment>
    )
}

export default VariableCosts
