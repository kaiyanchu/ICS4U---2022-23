const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
 ];

 const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for( let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

 // forEach

 companies.forEach(function(company){
    console.log(company);
 });

 // filter

 //Get 21 and older
 let canDrink = []
 for(let i = 0; i < ages.length; i++){
    if(ages[i]>= 21){
        canDrink.push(ages[i]);
    }
 }

 console.log(ages[i]);


 const canDrink2 = ages.filter(function(age) {
    if(age >= 21) {
        return true;
    }
 });

 const canDrink3 = ages.filter(age => age >= 21);

 //filter retail companies

 const retailCompanies = compaines.filter(function (company ) {
    if(company.category === 'Retail'){
        return true;
    }
 })
 console.log(retailCompnaies);

 const retailCompanies2 = companies.filter(company => company.category === 'Retail');

 // Get 80s companies
 console.log('HI');
 const eightiesCompanies = companies.filter(company => (company.start > 1979 && company.start < 1990));
 console.log(eightiesCompanies);
 // Get companies that lasted 10 years or more
 const tenYears = companies.filter(company => company.end-company.start >= 10);
 console.log(tenYears);
 
 // map
// create array of company names
const companyNames = companies.map(function(company){
    return company.name;
})

console.log(companyNames);
 
const testMap = companies.map(function(company){
    return `${companies.name} [${company.start} - ${company.end}]`;
});

const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age=> age*2);

console.log(ageMap);
 // sort
 //sort companies by start year
 const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
 });

 const sortedCompanies2 = companies.sort((a,b) => (a.start > b.start ?1 :-1));
 console.log(sortedCompanies2);

 //sort ages
const sortAges = ages.sort((a,b) => a - b);

console.log(sortAges);

 // reduce 
let ageSum = 0;
 for (let i = 0; i < age.length; i++) {
    ageSum += age[i];
 }
 console.log(ageSum);

 const ageSum2 = ages.reduce(function(total, age ){
    return total + age;
 }, 0)

 const ageSum3 = ages.reduce((total, age ) => total + age, 0);

 // get total years for all companies

 const totalYears = companies.reduce(function(total, company){
    return total +(company.end - company.start);
 },0);

const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);
 console.log(totalYears);

 //combine methods
 const combined = age
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a,b) => a + b, 0);
console.log(combined);