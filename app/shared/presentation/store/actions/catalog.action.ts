import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsController } from "../../../../../features/catalog/controller/catalog.controller";
import { GetAllProductsFilterInterface } from "../../../../../features/catalog/usecase/catalog.repository.interface";


export const fetchAllProducts = createAsyncThunk(
    'catalog/fetch-all-product',
    async (filters: GetAllProductsFilterInterface) => {
        const data = await getAllProductsController(filters)

        return data
    }
)