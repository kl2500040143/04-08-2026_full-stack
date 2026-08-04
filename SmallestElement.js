const array =[8,4,5,7];
let Smallest = array[0];

array.forEach(element => {
    if (element < Smallest) {
        Smallest = element;
    }
});

console.log("Smallest element:", Smallest);
