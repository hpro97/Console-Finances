let finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
//------------------------------------------------------//
//log as per table in README
//------------------------------------------------------//

console.log("Financial Analysis\n--------------------");

//------------------------------------------------------//
// * The total number of months included in the dataset.
//------------------------------------------------------//

//new var for number of months
let totalMonths = finances.length; 

//logs total number of months contained in array
console.log("Total months: " + totalMonths);

//------------------------------------------------------//
// * The net total amount of Profit/Losses over the entire period.
//------------------------------------------------------//

//define new var for profits before calculating losses and profit
let profit = 0 

//for loop moving onto next entry each time
//profit selecting only second entry in array of arrays in finances var and add them to the total value stored in profit var
for (let i = 0; i < totalMonths; i ++) { 
  profit += finances[i][1];
} 
//console logs total profits/losses
console.log("Total: $" + profit + "");

//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
// * The average of the **changes** in Profit/Losses over the entire period.
//   - You will need to track what the total change in Profit/Losses are from month to month and then find the average.
//   - (`Total/(Number of months - 1)`)
//-------------------------------------------------------------------//

//---calculate monthly change for each month and store in new array---//

//i changed to using ES6 here as some functions i found online wouln't let me use var when trying to rewcreate with my data and arrays as var, so also rewrote previous

const changeMonth = []; //define new const for monthly change

for (let i = 1; i < finances.length; i++) { //loop for finances array
  const currentMonthValue = finances[i][1]; //new const for current month value in loop
  const previousMonthValue = finances[i - 1][1]; //new const for previous month value in loop
  const monthlyChange = currentMonthValue - previousMonthValue; //new const subtract previous month from current month
  changeMonth.push(monthlyChange); //push equation to change month array
}

//---calculate total change from new array and store in new var---//

const totalMonthlyChange = changeMonth.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //new const defining TMC as: array.reduce (recieves parameters then applies mathmatical equation) inside reduce, apply accumulator(keeps track of current running total) and current value (new value being processed) then call both.

//--calculate average change by dividing total change by total months-1--/

const averageChange = (totalMonthlyChange / (totalMonths - 1)) //new const averageChange, dividing total change of all the months added together (totalMonthlyChange) by the number of months apart from the last one (totalMonths -1)

//---------------------round number up to 100th-------------------//

averageChangeRounded = Math.ceil(averageChange * 1000) / 1000; //round up with math.ciel, taking our averageChange using 1000 multiplied and divided this will account for first 3 decimal places then ciel will take the sum and round it UP to the second decimal places (as the norm when ddealing with currency)

console.log("Average Change : " + averageChangeRounded.toFixed(2));//log result to the second decimal place

//---------------------    OR THIS    --------------------//

// or take fist months profit(1) - second months profit(2), turn into positive number and store(x). take second months profit(2) - third months profit(3), turn into positive number (y) and add to previously stored as new number(z) and keep doing for whole loop

//1-2=(positive)x
//2-3=(positive)y
//x+y=z

// ['Jan-2010', 867884],
// ['Feb-2010', 984655],
// ['Mar-2010', 322013],
// ['Apr-2010', -69417],

// then when loop finished take z divide by array.lenght-1

// round up with ciel to closest hundreth

// need this result: -2315.12

//-------------------------------------------------------------------//
//-------------------------------------------------------------------//

//------------------------------------------------------//
// * The greatest increase in Profit/Losses (date and difference in the amounts) over the entire period.
//------------------------------------------------------//

//find greatest increase from month to month (2 items in array after eachother, only comparing with previous)
//greatest increase should be these 2 dates:
// ['Jan-2012', -755566],
// ['Feb-2012', 1170593],
//-755566 to 1170593 has a difference of 1926159
//log date and differene

let greatestIncrease = 0; //define let for initial greatest increase (will change after loop)
let greatestIncreaseMonth = ''; //define greatestincreasemonth (will change after loop)

for (let i = 1; i < finances.length; i++) { //standard for loop running for length but starting on index 1
  const currentProfit = finances[i][1]; //define const inside loop currentProfit as the actual money value of the month we are on in the array whilst looping
  const previousProfit = finances[i - 1][1]; //define const inside loop previousProfit as actual array item minus 1 [i - 1] with the data looked at being money value, so [1] as it's the second entry we're looking at
  const difference = currentProfit - previousProfit; //define const inside loop difference as current profit (whatever the loop is currently on) - previousProfit (whatever individual profit has been previously looked at prior to this)

  if (difference > greatestIncrease) { //if statement, in the case that the difference (previously defined as a new item equalling currentProfit in for loop - previousProfit in for loop) is greater than greatestIncrease (that we'll define inside the if statement)
    greatestIncrease = difference; //greatestIncrease equals difference in the case it is more than the current greatest increase stored as defined in the if statement, whilst looping through the for loop this data is collected an updated
    greatestIncreaseMonth = finances[i][0]; //this takes the first value (i.e the month) of the greatestIncrease value of the finances array corrolated to the second figure (dollar value) stored as the greatest increase
  }
}

console.log("Greatest Increase in Profits/Losses: " + greatestIncreaseMonth + " ($" + greatestIncrease + ")"); //standar log

//------------------------------------------------------//
// * The greatest decrease in Profit/Losses (date and difference in the amounts) over the entire period.
//------------------------------------------------------//

//find greatest decrease from month to month (2 items in array after eachother, only comparing previous month)
//greatest decrease should be these 2 dates
// ['Aug-2013', 999942],
// ['Sep-2013', -1196225],
//difference between 999942 to -1196225 is 2196167
//log date and difference

let greatestDecrease = null; // define as null as this will change in if statement

for (let i = 1; i < finances.length; i++) {
  const currentDecreaseProfit = finances[i][1];
  const previousDecreaseProfit = finances[i - 1][1];
  const differenceDecrease = currentDecreaseProfit - previousDecreaseProfit;
//pretty much the same as previous section


  if (greatestDecrease === null || differenceDecrease < greatestDecrease)  { //If greatestDecrease is still null (i.e first time it happens) or the differenceDecrease is less than the stored greatestDecrease
    greatestDecrease = differenceDecrease; //then the value of differenceDecrease will be stored as the new value of greatestDecrease.
    greatestDecreaseMonth = finances[i][0] //same as before recycled to log month
  }
}

console.log("Greatest Decrease in Profits/Losses: " + greatestDecreaseMonth + " ($" + greatestDecrease + ")"); //simple log

//------------------------------------------------------//
// ```text
// Financial Analysis 
// ----------------
// Total Months: 86
// Total: $38382578
// Average Change: -2315.12
// Greatest Increase in Profits/Losses: Feb-2012 ($1926159)
// Greatest Decrease in Profits/Losses: Sep-2013 ($-2196167)
// ```
//------------------------------------------------------//