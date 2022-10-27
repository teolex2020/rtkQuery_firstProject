import React from 'react'
import { useGetPokemonByNameQuery } from '../../store/createApi.js'
import Card from "../components/Card.jsx"

const Home = () => {

  const {data, isLoading, error } = useGetPokemonByNameQuery()
const searchItems=(e)=>{
	setSearch(e.target.value)
}

const [search, setSearch] = React.useState("")
const [country, setCountry] = React.useState()



 



	

	
	
	if(error){return <div>Error</div>}
  if(isLoading){return <div>Loading</div>}

	return (
		<div className='bg-slate-400  '>
			<div className='flex justify-center w-screen h-24 px-10 py-4'>
				<input
					type='search'
					className='w-full h-12 rounded-lg px-5'
					placeholder='Search .... '
					value={search}
					onChange={searchItems}
				/>
			</div>
			<div className='flex justify-center items-center flex-wrap gap-3'>
				{data
					?.filter((e) =>
						(e.name.common || e.capital)
							.toLowerCase()
							.includes(search.toLowerCase())
					)
					.map((e, i) => (
						<Card
							key={i}
							title={e.name.common}
							image={e.flags.png}
							country={e.capital}
						/>
					))}
			</div>
		</div>
	)
}

export default Home
