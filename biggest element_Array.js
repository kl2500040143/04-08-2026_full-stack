const array =[8,4,5,7];
let Biggest = array[0];

array.forEach(element => {
    if (element < Biggest) {
        Biggest = element;
    }
});

console.log("Biggest element:", Bigggest);
