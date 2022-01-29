import { useSelector } from "react-redux"
import { Cost } from "../../../../models/Cost"
import { costsSelector } from '../../../../selectors/index';

export const CostCalculation = () => {
    const costs: Cost[] = useSelector(costsSelector)

    return <div>
        CostCalculation
        {costs}
    </div>
}