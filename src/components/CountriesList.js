
// import CountriesData from '../CountriesData'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function CountriesList({ query }) {
  const [CountriesData, SetCountriesData] = useState([])
  // using useEffect for running the code only once
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then((res) => res.json().then((data) => {
      SetCountriesData(data)
      // console.log(CountriesData)
    }))
  }, [])



  return (
    <>

      <div className="countries-container">

        {CountriesData.filter((country) => country.name.common.toLowerCase().includes(query)  
        || country.region.toLowerCase().includes(query)).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )
        })}
      </div>
    </>
  )
}