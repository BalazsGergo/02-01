/* eslint-disable react/jsx-key */


function Countries({countries}) {
  return (
        
    countries.map((country, index) => (
        <div className="country" key={index}>
          <h2 key={index}>{country.name.common}</h2>
          <h3>{country.population}</h3>
        </div>
    ))
  )
}

export default Countries