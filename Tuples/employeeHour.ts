let employeeDetails: [string, number[]] = ["Rakshit", [8, 6, 9, 5, 7, 8]];

const getWeeklyHours = (employeeDetails: [string, number[]]): number => {
    return employeeDetails[1].reduce((acc, curr) => acc + curr, 0);
}

console.log(`Weekly hours of ${employeeDetails[0]}: ${getWeeklyHours(employeeDetails)}`);