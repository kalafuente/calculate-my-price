import React from "react"
import { useSelector } from "react-redux";
import { StateType } from "../models/Cost";
import VariableCosts from "../modules/exams/Costs";

const ListOfVariableCosts: React.FunctionComponent<{}> = ({ }) => {
    const state = useSelector((state: StateType) => state);
    return <VariableCosts rows={state.exams.rows} />
}
export default ListOfVariableCosts