## 1.How did you dynamically create and append new elements to the DOM?
 I used the document.createElement() function to dynamically create new elements in the DOM. Specifically, I created a new <li> element for every added product, set its content with the product's name and formatted price, and appended it to the product list on the page using .appendChild().    

## 2.What steps did you take to ensure accurate updates to the total price?
To ensure accurate updates to the total price, I first validated that every entered price was a valid positive number before including it in any calculation. I also rounded prices to two decimal places using Math.round(price * 100) / 100 to prevent floating-point inaccuracies during addition and subtraction. Finally, I called updateTotalPrice() consistently whenever an item was added (adding its price) or removed (subtracting its price), and formatted the final total with .toFixed(2) so the displayed amount always stayed accurate to the cent.

## 3.How did you handle invalid input for product name or price?
o handle invalid inputs, I first checked that the product name was not empty (for example, trimming whitespace to ensure the user actually entered text). Next, I validated the price input to confirm it was a valid positive number (not NaN or less than or equal to zero). If either check failed, I prevented the item from being added to the list or updating the total price and alert user to add the valid name and price.

## 4.What challenges did you face when implementing the remove functionality?
I did not run into major challenges while implementing the remove functionality, as attaching a click event listener to the remove button and calling .remove() on the parent <li> worked straightforwardly. My main focus was making sure the item's exact price was subtracted from the total via updateTotalPrice() right before removing the element from the DOM so the total stayed accurate.