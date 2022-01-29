import React from 'react';
import { connect, useDispatch } from 'react-redux'
import Button, { ButtonTypes } from '../../../../components/button/Button';
import {addRow } from '../../../../ducks/index';

type AddARowProps = {
}

const AddARow: React.FunctionComponent<AddARowProps> = ({ }) => {
    const dispatch = useDispatch()
    return (
        <Button type='submit' text="+" styleType={ButtonTypes.SECONDARY}
            onClick={() => dispatch(addRow())}>
        </Button>
    )
}

export default connect()(AddARow)
