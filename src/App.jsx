import { useState } from "react"
import { useEffect } from "react"
import Countries from "./Countries"


function App() {
const [countries, setCountries] = useState(null)
const [sort,setSort] = useState ('asc')

const sortCountry= () => {
  const sortedArray = countries.sort((a,b)=> sort === 'asc' ? b.population - a.population : a.population - b.population)
  setCountries([...sortedArray])
  setSort(sort === 'asc' ? 'desc' : 'asc')
}



  useEffect (() => {
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data => setCountries(data))
  }, [])

  console.log(countries)

  return (
    <>
      <button onClick={sortCountry}>{sort === 'asc' ? 'Ascending' : 'Descending'}</button>
      {countries && <Countries countries={countries} />}
      
    </>
  )
}

export default App
