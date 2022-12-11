import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    "createReview",
    async (review) => await service.createReview(review)
);

export const findReviewsBySellerThunk = createAsyncThunk(
  "createReview",
  async (sellerName) => await service.findReviewsBySeller(sellerName)
);