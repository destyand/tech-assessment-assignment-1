import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkoutProductController, getAllProductsController } from "../../../../../features/catalog/controller/catalog.controller";
import { CheckoutProductPayloadInterface, GetAllProductsFilterInterface } from "../../../../../features/catalog/usecase/catalog.repository.interface";

export const fetchAllProducts = createAsyncThunk(
    'catalog/fetch-all-product',
    async (filters: GetAllProductsFilterInterface) => {
        const data = await getAllProductsController(filters)

        return data
    }
)

export const postCheckoutProduct = createAsyncThunk(
    'catalog/post-checkout-product',
    async (payload: CheckoutProductPayloadInterface) => {
        const data = await checkoutProductController(payload)

        return data
    }
)