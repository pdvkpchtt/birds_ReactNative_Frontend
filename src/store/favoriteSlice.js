import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  birdsFav: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload;
      console.log(newProduct);
      const cartSameItemCheck = state.birdsFav.find(
        (i) => i.name === newProduct.name
      );

      if (cartSameItemCheck) {
        state.birdsFav = state.birdsFav.filter(
          (i) => i.name !== action.payload.name
        );
      } else {
        state.birdsFav.push(action.payload);
      }
    },
  },
});
