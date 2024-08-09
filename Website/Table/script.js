document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#salary-table tbody');
    const totalSalaryCell = document.querySelector('#total-salary');
    const addRowButton = document.querySelector('#add-row-btn');
  
    let totalSalary = 0;
  
    addRowButton.addEventListener('click', function() {
      const employeeName = prompt('Enter employee name:');
      const employeeId = prompt('Enter employee ID:');
      const salary = parseFloat(prompt('Enter employee salary:'));
  
      if (employeeName && employeeId && !isNaN(salary)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${employeeName}</td>
          <td>${employeeId}</td>
          <td>${salary}</td>
        `;
        tableBody.appendChild(newRow);
  
        totalSalary += salary;
        totalSalaryCell.textContent = totalSalary.toFixed(2);
      } else {
        alert('Invalid input! Please enter valid employee details.');
      }
    });
  });
  