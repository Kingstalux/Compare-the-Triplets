const compareArray = (arr1, arr2) => {
    let result1 = 0
    let result2 = 0

    for (let i = 0; i < arr1.length; i++) {
        const elt1 = arr1[i]
        const elt2 = arr2[i]

        if(elt1 > elt2) {
            result1 = result1 + 1
            result2 = result2 + 0
        } else if(elt1 < elt2) {
            result1 = result1 + 0
            result2 = result2 + 1
        } else {
            result1 = result1 + 0
            result2 = result2 + 0
        }
        
    }
    return [result1, result2]
}

a = [1, 2, 3]
b = [3, 2, 1]

console.log(compareArray(a, b));

a = [17, 28, 30]
b = [99, 16, 8]

console.log(compareArray(a, b));
