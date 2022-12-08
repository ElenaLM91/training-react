export const expensesStats = (itemList) => {
    let incomes =0;
    let  expenses=0;
     let   total=0;
     if(itemList.length ===0)   {
        return [0,0]
     }
itemList.forEach(element => {
    if (element.money.income) {
        incomes +=element.money.amount
    }else{
        expenses+=element.money.amount
    }
});
total = Math.abs(incomes)+Math.abs(expenses);
let incomePercentage = Math.round((incomes*100)/total)
let expencePercentage = Math.round((expenses*100)/total)
return [incomes, expenses]
}