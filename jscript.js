const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

function updateTotalPrice(amount) {
  // Round to 2 decimal places on every update to prevent floating-point drift
  totalPrice = Math.round((totalPrice + amount) * 100) / 100;
  totalPriceSpan.textContent = Math.max(0, totalPrice).toFixed(2);
}

function removeItem(event) {
  const item = event.target.closest('li');
  if (!item) return;

  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

function addProduct() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (!name) {
    alert('Please enter a product name.');
    productNameInput.focus();
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert('Please enter a valid price greater than $0.');
    productPriceInput.focus();
    return;
  }

  // Normalize price to 2 decimal places so dataset matches displayed total
  const formattedPrice = Math.round(price * 100) / 100;

  const li = document.createElement('li');
  li.dataset.price = formattedPrice;
  li.textContent = `${name} - $${formattedPrice.toFixed(2)} `;

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', removeItem);

  li.appendChild(removeBtn);
  cart.appendChild(li);

  updateTotalPrice(formattedPrice);
  productNameInput.value = '';
  productPriceInput.value = '';
  productNameInput.focus();
}

addProductButton.addEventListener('click', addProduct);

// Bonus: Allow pressing "Enter" in either input field to add the product
[productNameInput, productPriceInput].forEach(input => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addProduct();
    }
  });
});