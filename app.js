var BudgetAmount =document.getElementById("BudgetAmount")
var AddBudget = document.getElementById("AddBudget")
var ExpenseDescription = document.getElementById("ExpenseDescription")
var ExpenseAmount = document.getElementById("ExpenseAmount")
var dates = document.getElementById("dates")
var AddExpense = document.getElementById("AddExpense")
var budget1 = document.getElementById("Bud-get")
var expense1 = document.getElementById("Expense")
var Balance = document.getElementById("Balance")
var des = document.getElementById("des")
var exp = document.getElementById("exp")
var dat = document.getElementById("dat")
var inputText = 0
AddBudget.addEventListener("click", function(){
   inputText = BudgetAmount.value
 if(inputText === "" || inputText < 0){
  

 }else{
    budget1.innerHTML = inputText
    Balance.innerText = inputText - expense1.innerText
    inputText = ""

 }
  
//console.log(inputText)

  
})
var inputText2 = 0
var inputText3 = 0
var inputText4 = 0
AddExpense.addEventListener("click", function(){
   inputText2 = ExpenseAmount.value 
   inputText3 =  ExpenseDescription.value
   inputText4 = dates.value
   if(inputText2 === "" || inputText2 < 0 ){

   }else{
      expense1.innerText = inputText2
      exp.innerText = inputText2
      inputText2 = ""
      
   }
   if(inputText3 === "" || inputText3 < 0){

   }else{
      des.innerText = inputText3
   
   }if (inputText4 === "" || inputText4 < 0){

   }else{
      dat.innerText = inputText4
   }
   

})































