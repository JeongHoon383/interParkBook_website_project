import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

let cartState = createSlice({
  name: "cartState",
  initialState: [],
  reducers: {
    changeCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      let idx = state.findIndex((v) => v.id === action.id);
      
      let copy = [...state];
      copy.splice(idx, 1);
      return copy;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartState"], // cartState를 영구 저장하려면 whitelist에 추가
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    cartState: cartState.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

/* export default configureStore({
  reducer: {
    cartState: cartState.reducer,
  },
}); */

export { store, persistor };
export let { changeCart, removeCart } = cartState.actions;
