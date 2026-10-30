import { createSlice } from "@reduxjs/toolkit"
import { CatalogDetailType } from "../../../../../features/catalog-detail/domain/catalog-detail.entity"
import { fetchProductDetail } from "../actions/catalog-detail.action"

interface CatalogDetailState {
	productDetail: CatalogDetailType | null
}

const initialState: CatalogDetailState = {
	productDetail: null
}

const catalogDetailSlice = createSlice({
	name: 'catalog',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
			state.productDetail = action.payload
		})
	}
})

export const catalogDetailReducer = catalogDetailSlice.reducer