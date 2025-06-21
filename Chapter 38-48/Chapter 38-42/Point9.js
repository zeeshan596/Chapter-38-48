function calculateOvertime(hoursWorked) {
  let overtimeHours = hoursWorked - 40;
  return overtimeHours > 0 ? overtimeHours * 12 : 0;
}

document.body.innerHTML += `Overtime Pay: Rs.${calculateOvertime(48)}<br>`;