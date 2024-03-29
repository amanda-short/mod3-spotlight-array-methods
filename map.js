// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => countries.map((country) => country.name);

// OR DO THING TO CONSOLE.LOG
//{const names = countries.map((country) => country.name);
//   return names;
// }

/////////////////

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  return countries.map((list) => [list.name, list.iso2]);
};

////////////////

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

export const getBrands = (brands) => {
  return brands.map((list) => list.brand);
};
