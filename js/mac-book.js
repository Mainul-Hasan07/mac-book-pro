function updateExtraCost(product,price){
    const extraCost =document.getElementById(product + '-cost');
    extraCost.innerText = price;
    updateTotal();
};

function updateTotal(){
    const productInput = document.getElementById('product-cost');
    const productCost = parseFloat(productInput.innerText);

    const memoryInput = document.getElementById('memory-cost');
    const memoryCost = parseFloat(memoryInput.innerText);

    const storageInput = document.getElementById('storage-cost');
    const storageCost = parseFloat(storageInput.innerText);

    const deliveryInput = document.getElementById('delivery-cost');
    const deliveryCost = parseFloat(deliveryInput.innerText);
    

    //update total price
    const totalPriceInput = document.getElementById('total-price');
    const totalPrice = productCost + memoryCost + storageCost + deliveryCost;
    totalPriceInput.innerText = totalPrice;

    //update total
    const totalInput = document.getElementById('total');
    totalInput.innerText = totalPrice;
    console.log(totalInput.innerText);
    return totalPrice;
}



//Memeory cost Handler
document.getElementById('memory-8').addEventListener('click',function(){
    updateExtraCost('memory',0);
})
document.getElementById('memory-16').addEventListener('click',function(){
    updateExtraCost('memory',180);
})

//Storage cost Handler

document.getElementById('storage-25').addEventListener('click',function(){
    updateExtraCost('storage',0);
})
document.getElementById('storage-512').addEventListener('click',function(){
    updateExtraCost('storage',100);
})
document.getElementById('storage-1T').addEventListener('click',function(){
    updateExtraCost('storage',180);
})

// Delivery cost Handler
document.getElementById('delivery-option').addEventListener('click',function(){
    updateExtraCost('delivery',0);
})
document.getElementById('delivery-option-2').addEventListener('click',function(){
    updateExtraCost('delivery',20);
})

//pomo code for Discount
document.getElementById('button-addon2').addEventListener('click',function(){
    const discountInput = document.getElementById('pomo-code');
    const discountCode = discountInput.value ;
    const totalInput = document.getElementById('total');
    if(discountCode == 'stevekaku'){
        const total = updateTotal() - (updateTotal() / 5);
        totalInput.innerText = total;
    }
    else{
        totalInput.innerText = updateTotal();
    }
    discountInput.value = '';
})