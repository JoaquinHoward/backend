/*

Create an object representing a person’s monthly expenses
 with categories like rent, food, transportation. Write a 
 function to calculate the total monthly expense. And display 
 the total monthly expense to the user


*/

const expenses = {
    rent: 3600,
    food: 4000,
    fare: 800
}

const expense_list = document.getElementById('expense-list');

for(let i in expenses){
    const li = document.createElement('li');
    li.textContent = `${i} ${expenses[i]}`;
    expense_list.appendChild(li);
}

const total_cost = document.getElementById('total-cost');

function calculateMonthly(expenses){
    let total = 0;
    for(let i in expenses){
        total += expenses[i];
    }
    return total;
}

total_cost.innerHTML = `total: ${calculateMonthly(expenses)}`;


