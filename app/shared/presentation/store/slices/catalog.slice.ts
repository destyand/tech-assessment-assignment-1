import { createSlice } from "@reduxjs/toolkit"
import { fetchAllProducts } from "../actions/catalog.action"
import { CatalogType } from "../../../../../features/catalog/domain/catalog.entity"

interface CatalogState {
    allProducts: CatalogType[]
}

const initialState: CatalogState = {
    allProducts: []
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
        })
    }
})

export const catalogReducer = catalogSlice.reducer