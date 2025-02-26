let totalIncome = 0;
let totalExpense = 0;

function updateTotal() {
  // Update total income, total expense, and net balance
  document.getElementById('total-income').textContent = totalIncome.toFixed(2);
  document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
  document.getElementById('net-balance').textContent = (totalIncome - totalExpense).toFixed(2);
}

function addIncome() {
  const incomeName = document.getElementById('income-name').value;
  const incomeAmount = parseFloat(document.getElementById('income-amount').value);
  const incomeCategory = document.getElementById('income-category').value;
  const incomeDate = document.getElementById('income-date').value;

  if (!incomeName || isNaN(incomeAmount) || incomeAmount <= 0) {
    alert('Please enter valid income details');
    return;
  }

  totalIncome += incomeAmount;

  // Show confirmation message
  showConfirmationMessage();

  // Reset input fields
  document.getElementById('income-name').value = '';
  document.getElementById('income-amount').value = '';
  document.getElementById('income-category').value = 'Sales';
  document.getElementById('income-date').value = '';

  updateTotal();
}

function addExpense() {
  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
  const expenseCategory = document.getElementById('expense-category').value;
  const expenseDate = document.getElementById('expense-date').value;

  if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Please enter valid expense details');
    return;
  }

  totalExpense += expenseAmount;

  // Show confirmation message
  showConfirmationMessage();

  // Reset input fields
  document.getElementById('expense-name').value = '';
  document.getElementById('expense-amount').value = '';
  document.getElementById('expense-category').value = 'Payroll';
  document.getElementById('expense-date').value = '';

  updateTotal();
}

function showConfirmationMessage() {
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.style.display = 'block';

  // Hide the message after 3 seconds
  setTimeout(function() {
    confirmationMessage.style.display = 'none';
  }, 3000);
}
