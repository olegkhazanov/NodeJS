//6d26ed0af44b3e8c54ce954b2c6f537a
//http://data.fixer.io/api/latest?access_key=6d26ed0af44b3e8c54ce954b2c6f537a&format=1
const axios = require('axios');

// const getExchangeRate = (from, to) => {
//   return axios.get('http://data.fixer.io/api/latest?access_key=6d26ed0af44b3e8c54ce954b2c6f537a&format=1').then((response) => {
//     //console.log(response);
//
//     const euro = 1 / response.data.rates[from];
//     const rate = euro * response.data.rates[to];
//     //console.log(euro);
//     //console.log(rate);
//     return rate;
//   });
// };

const getExchangeRate = async (from, to) => {
  try{
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=6d26ed0af44b3e8c54ce954b2c6f537a&format=1');
      const euro = 1 / response.data.rates[from];
      const rate = euro * response.data.rates[to];

      if (isNaN(rate)){
        throw new Error();
      }

      return rate;
  }catch(e){
    throw new Error (`there was an error ${e.message}`);
    //console.log();
  }

};

const getCountries = async (currencyCode) =>{
  try{
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name);
  }
  catch(e){
    throw new Error (`Unable to get country list ${e.message}`);
  }
};

const convertCurrency = async (from, to, amount) => {
  try{
    const rate = await getExchangeRate(from, to);
    const countries = await getCountries(to);
    const convertedAmount = (amount * rate).toFixed(2);
    return `${amount} ${from} ${to}. You can spend it in the following countries ${countries}`;
  }
  catch(e){
    console.log(`there was an error ${e.message}`);
  }

  //console.log(convertedAmount);
};


// getExchangeRate('USD', 'CAD').then((rate) => {
//   console.log(rate);
// });
//
// getCountries('CAD').then((countries) => {
//   console.log(countries);
// });

convertCurrency('USD', 'EUR', 20).then((message) => {
  console.log(message);
});
