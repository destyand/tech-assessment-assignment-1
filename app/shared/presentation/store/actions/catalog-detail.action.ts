import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDetailController } from "../../../../../features/catalog-detail/controller/catalog-detail.controller";

export const fetchProductDetail = createAsyncThunk(
    'catalogDetail/fetch-product-detail',
    async (productId: string) => {
        const data = await getProductDetailController(productId);
        return data;
    }
);
