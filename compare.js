const array1 = [];

const array2 = [];

// Optimierte Version mit Set
function findUniqueURLs(arr1, arr2) {
    const flatArray1 = arr1.flat();
    const flatArray2 = arr2.flat();
    
    const setArray2 = new Set(flatArray2);
    const setArray1 = new Set(flatArray1);
    
    const uniqueToArray1 = flatArray1.filter(url => !setArray2.has(url));
    const uniqueToArray2 = flatArray2.filter(url => !setArray1.has(url));
    
    return {
        uniqueToArray1,
        uniqueToArray2
    };
}

// Funktion aufrufen
const { uniqueToArray1, uniqueToArray2 } = findUniqueURLs(array1, array2);
console.log("URLs in array1, aber nicht in array2:", uniqueToArray1);
console.log("URLs in array2, aber nicht in array1:", uniqueToArray2);
