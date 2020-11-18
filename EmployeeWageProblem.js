const IS_PRESENT_FULL_TIME=2;
const IS_PRESENT_PART_TIME=1;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const WORKING_DAYS_PER_MONTH=20;


let employeeHours=0;
for(i=0;i<WORKING_DAYS_PER_MONTH;++i)
{
    let employeeCheck=Math.floor(Math.random()*10)%3;
    employeeHours=employeeHours+GetEmployeeHours(employeeCheck);
}
let employeeWage=employeeHours*WAGE_PER_HOUR;
console.log("Total Working Hours: "+employeeHours+"\nTotal Monthly Wages: "+employeeWage);
function GetEmployeeHours(employeeCheck)
{
switch(employeeCheck)
{
    case IS_PRESENT_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    case IS_PRESENT_PART_TIME:
        return PART_TIME_HOURS;
        break;
    default:
        return 0;
        break;
}
}