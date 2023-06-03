alert("Wel Come to Budget App")
// value get by id
var BudgetAmount =document.getElementById("BudgetAmount");
var AddBudget = document.getElementById("AddBudget");
var ExpenseDescription = document.getElementById("ExpenseDescription");
var ExpenseAmount = document.getElementById("ExpenseAmount");
var dates = document.getElementById("dates");
var AddExpense = document.getElementById("AddExpense");
var budget1 = document.getElementById("Bud-get");
var expense1 = document.getElementById("Expense");
var Balance = document.getElementById("Balance");
var des = document.getElementById("des");
var exp = document.getElementById("exp");
var dat = document.getElementById("dat");
// set budget fucnction
var inputText = 0;
function greet1(){
   inputText = BudgetAmount.value;
 if(inputText === "" || inputText < 0){
   
   
  

 }else{
    budget1.innerHTML = inputText;
    Balance.innerText = inputText - expense1.innerText;
    inputText = "";

 }
 
  
//console.log(inputText)

  
}
// set function of expense and description

var listdiv = document.querySelector('.lastcontiner');
var exptotal = "";
var saved = [];
function greet() {


   var saves = {
      expense: ExpenseAmount.value,
      description: ExpenseDescription.value,
      date: dates.value,
   }

   exptotal = ExpenseAmount.value ;
   expense1.innerText = exptotal;


         

   saved.push(saves);

   var expenseAmount = saves.expense;
   var expenseDescription = saves.description;
   var date = saves.date;

   var listcode = `
   <div class="list">
    <div>
        <span id="des">${expenseDescription}</span>
    </div>
    <div>
        <span id="exp">${expenseAmount}</span>
    </div>
    <div>
        <span id="dat">${date}</span>
    </div>
   </div>
`;

   listdiv.innerHTML += listcode;



}


































