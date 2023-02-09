import { configureStore } from '@reduxjs/toolkit'
import recordsSlice from './features/records/recordsSlice'

export default configureStore({
    reducer: {
        records: recordsSlice
    },
})