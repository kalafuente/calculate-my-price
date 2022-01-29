import React from "react"
import { useSelector } from "react-redux";
import { StateType } from "../models/Cost";
import VariableCosts from "../modules/costs/Costs";

const ListOfVariableCosts: React.FunctionComponent<{}> = ({ }) => {
    const state = useSelector((state: StateType) => state);
    return <VariableCosts rows={state.costs.rows} />
}
export default ListOfVariableCosts