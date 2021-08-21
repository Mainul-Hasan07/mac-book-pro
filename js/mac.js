function updateMemoryCost(price){
    const memoryCost =document.getElementById('memory-cost');
    memoryCost.innerText = price;
};

document.getElementById('memory-8').addEventListener('click',function(){
    updateMemoryCost(0);
})
document.getElementById('memory-16').addEventListener('click',function(){
    updateMemoryCost(180);
})


//Extra storage cost handler
function updateStorageCost(price){
    const storageCost =document.getElementById('storage-cost');
    storageCost.innerText = price;
};

document.getElementById('storage-25').addEventListener('click',function(){
    updateStorageCost(0);
})
document.getElementById('storage-512').addEventListener('click',function(){
    updateStorageCost(100);
})
document.getElementById('storage-1T').addEventListener('click',function(){
    updateStorageCost(180);
})