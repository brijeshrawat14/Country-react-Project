 import React from 'react'

// import './CountryDetail.css'

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get('name')

  //  const [countryData, setCountryData] = useState(null)

  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  //     .then((res) => res.json())
  //     .then(([data]) => {
  //       console.log(data)
  //       setCountryData({
  //         name: data.name.common,
  //         nativeName: Object.values(data.name.nativeName)[0].common,
  //         population: data.population,
  //         region: data.region,
  //         subregion: data.subregion,
  //         capital: data.capital,
  //         flag: data.flags.svg,
  //         tld: data.tld,
  //         languages: Object.values(data.languages).join(', '),
  //         currencies: Object.values(data.currencies)
  //           .map((currency) => currency.name)
  //           .join(', '),
          
  //       })
  //     })
  // }, [])
  // return countryData === null ? (
  //   'loading...'
  // ) : (
    return(
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src= " " alt=""/>
          <div className="details-text-container">
            <h1>Iceland</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: 
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain:</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}