function updateExtraCost(product,price){
    const memoryCost =document.getElementById(product + '-cost');
    memoryCost.innerText = price;
};

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