/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[];
  for(let i=0;i<transactions.length;i++){
    let currCategory=transactions[i].category;
    let currPrice=transactions[i].price;

    const isCategoryPresent=result.some(expense=>expense.category===currCategory);
    if(!isCategoryPresent){
      result.push({category:currCategory,totalSpent:currPrice});
    }
    else{
      let index = result.findIndex(expense => expense.category === currCategory);
      // Update the totalSpent value by adding the current price
      result[index].totalSpent += currPrice;
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
