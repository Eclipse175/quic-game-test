let expensesInput = document.getElementById('expense'); //expenses
let dateInput = document.getElementById('date'); //date
let totalInput = document.getElementById('total-amount') //amount
let container = document.getElementById('container');
let addExpense = document.getElementById('AddExpense'); //button 

//below are the ID's for each tbl section:

let expense = document.getElementById('expense-tbl');
let date = document.getElementById('date-tbl');
let amount = document.getElementById('amount-tbl');

let array = [];

addExpense.addEventListener('click', function () {

    let data = {
        expenseValue: expensesInput.value,
        dateValue: dateInput.value,
        amountValue: totalInput.value,
    }

    if (expensesInput.value.trim() === "") {
        return;
    } else if (dateInput.value.trim() === "") {
        return;
    } else if (totalInput.value.trim() === "") {
        return;
    }

    // below adds the expense to the container
    let expensePara = document.createElement('p');
    expensePara.innerText = expensesInput.value;
    expense.appendChild(expensePara);
    array.push(data.expenseValue);
    expensesInput.value = ""

    //code to add date below

    let datePara = document.createElement('p');
    datePara.innerText = dateInput.value;
    date.appendChild(datePara);
    array.push(data.dateValue);
    dateInput.value = ""

    //code to add the total below

    let totalPara = document.createElement('p');
    totalPara.innerText = "$" + totalInput.value;
    amount.appendChild(totalPara);
    array.push(data.amountValue);
    totalInput.value = "";

     let buttonTable = document.createElement('button');
     buttonTable.style.padding = "1rem";
     buttonTable.style.marginTop = "2rem";
     buttonTable.innerText = "X";
     tableTD.appendChild(buttonTable);

     //event listener for delete button to delete the table row :

     buttonTable.addEventListener('click', function(){
        totalPara.remove(); datePara.remove(); expensePara.remove(); buttonTable.remove();
        console.log('Task has been cleared');
     })
})

expensesInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addExpense.click();
    }
})
dateInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addExpense.click();
    }
})
totalInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addExpense.click();
    }
})