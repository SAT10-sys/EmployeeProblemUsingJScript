const IS_PRESENT_FULL_TIME=2;
const IS_PRESENT_PART_TIME=1;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let employeeCheck=Math.floor(Math.random()*10)%3;
let employeeHours=0;
switch(employeeCheck)
{
    case IS_PRESENT_FULL_TIME:
        employeeHours=FULL_TIME_HOURS;
        break;
    case IS_PRESENT_PART_TIME:
        employeeHours=PART_TIME_HOURS;
        break;
    default:
        empHours=0;
        break;
}
let employeeWage=employeeHours*WAGE_PER_HOUR;
console.log("Daily Employee Wage: "+employeeWage);