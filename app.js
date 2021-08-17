function updateProduct(product ,price, sum){
    // incrase product amount
    let productAmount = document.getElementById(product + '-amount');
    if(sum == true){
        let productQuntity = parseInt(productAmount.value) + 1;
        productAmount.value = productQuntity;
    }
    else if(sum == false){
        let productQuntity = parseInt(productAmount.value) - 1;
        if(productQuntity >= 0){
            productAmount.value = productQuntity;
        }
    }
    // update product price
    let productPriceInput = document.getElementById(product + '-price');
    let perProduct = parseInt(productAmount.value);
    let productPrice = perProduct * price;
    productPriceInput.innerText = productPrice;

    // upadate subtotal price
    let phonePrice = document.getElementById('phone-price').innerText;
    let casePrice = document.getElementById('case-price').innerText;
    let subtotalPrice = parseInt(phonePrice) + parseInt(casePrice);
    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = subtotalPrice;

    // get tax, the tax is 22%
    let taxInput = document.getElementById('tax');
    let tax = Math.floor((parseInt(subtotal.innerText) / 100) * 22);
    taxInput.innerText = tax;

    // get total price
    let totalInput = document.getElementById('total');
    let total = parseInt(subtotal.innerText) + parseInt(taxInput.innerText);
    totalInput.innerText = total;
}