import countries from 'world-countries';

const formattedCountries = countries
  .filter(country => country.name.common !== 'Caribbean Netherlands')
  .map(country => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlang: country.latlng,
    region: country.region,
  }));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find(item => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
