import { configureStore } from "@reduxjs/toolkit"
import { pokemonApi } from "./createApi.js"
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer:{
[pokemonApi.reducerPath]: pokemonApi.reducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})
setupListeners(store.dispatch)