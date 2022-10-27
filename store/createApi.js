import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://restcountries.com/v3.1/',
	}),
	endpoints: (builder) => ({
		getPokemonByName: builder.query({
			query: () => 'all?fields=name,flags,capital,pop',
		}),
		// 		transformResponse: response =>({
		// baza: response.data.products
		// 		})
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi