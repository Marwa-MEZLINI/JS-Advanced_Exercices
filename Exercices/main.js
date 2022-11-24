//level 1 :
// Read the countries API using fetch and print the name of country, capital, languages, population and area.


const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI).then(Response => Response.json()).then(data => initialize(data));


let countries;

function initialize(countriesData) {
  countries = countriesData
  let countriesObj = [];
  let country = {}
  for (let i = 0; i < countries.length; i++) {
    country = {
      name: countries[i].name,
      capital: countries[i].capital,
      languages: countries[i].laguages,
      population: countries[i].population,
      area: countries[i].area
    };
    countriesObj.push(country);
  }

  console.log(countriesObj)
}

//level 2 :
//Print out all the cat names in to catNames variable.

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI).then(Response => Response.json()).then(data => init(data));
let catNames ;
function init(catData){
  catNames = catData
  console.log(catNames);
}

//level 3 :
//(1) Read the cats api and find the average weight of cat in metric unit.

// var count = 0, sumWeight = 0;

// for (let i = 0; i < catNames.length; i++) {
//   sumWeight += catNames[i].weight.metric;
//   count += 1
// }

// console.log(sumWeight/count)


//(2) Read the countries api and find out the 10 largest countries.

let maxArea = 0
for (let i = 0; i < countriesObj.length; i++) {
  if (maxArea < countriesObj[i].country.area) {
    maxArea = countriesObj[i].country.area
  }
}


//(3) Read the countries api and count total number of languages in the world used as officials.

