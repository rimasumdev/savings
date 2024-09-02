const monthlyIncomes = [2600, 3900, 6700, 8700];
const monthlyExpenses = 1089;

function monthlySavings(incomes, expenses) {
  if (Array.isArray(incomes) && typeof expenses === "number") {
    // console.log('Valide Data');
    let totalIncome = 0;
    let taxableIncome = 0;
    for (const income of incomes) {
      // console.log(income);
      totalIncome += income;
      if (income >= 3000) {
        // console.log('Taxable Income', income);
        taxableIncome += income;
      }
    }
    const tax = (taxableIncome * 20) / 100;
    // console.log('Payble Tax:', tax);
    // console.log('Total Income:', totalIncome);
    const totalExpenses = expenses;
    const savings = totalIncome - (totalExpenses + tax);
    if (savings >= 0) {
      return "Monthly Savings: " + savings;
    } else {
      return "Earn More! Your Debt is: " + savings;
    }
  } else {
    return "Invalid Data";
  }
}
const savings = monthlySavings(monthlyIncomes, monthlyExpenses);
console.log(savings);
