import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/records/recordsSlice'
const App = () => {
    const records = useSelector((state) => state.records)
    const dispatch = useDispatch();
    console.log(records);
    return (
        <div>

        </div>
    )
}

export default App