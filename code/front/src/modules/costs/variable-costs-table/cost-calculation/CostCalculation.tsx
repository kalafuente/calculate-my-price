import { useSelector } from "react-redux"
import { Cost } from "../../../../models/Cost"
import { costsSelector, resultSelector } from '../../../../selectors/index';


const calculateTotal = (costs : Cost[], result: number) =>
 (costs.reduce((partialSum, cost) => partialSum + cost.price, 0))/ result;

export const CostCalculation = () => {
    const costs: Cost[] = useSelector(costsSelector)
    const result: number = useSelector(resultSelector)
    return <div>
        Costo por unidad: {calculateTotal(costs, result)}
    </div>
}