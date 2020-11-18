//UC1 Checking Employee Present Or Absent
const IS_PRESENT=1;
let employeeCheck=Math.floor(Math.random()*10)%2;
if(employeeCheck==IS_PRESENT)
console.log("Employee is Present");
else
console.log("Employee is Absent");