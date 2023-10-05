let cities = ['Honolulu', 'Kahului', 'Lahaina']
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function doubleNumbers(arr){
  
    return arr.map((num) => num * 2)
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  

let uCities = cities.filter(function(city) {
  if(city.includes('a')) {
    return city
  }
  return null;
});

let threes = nums.filter((x) => x%3 === 0);
console.log(threes);