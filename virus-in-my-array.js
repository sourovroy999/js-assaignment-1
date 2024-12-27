function deleteInvalids(arr){
    if (!Array.isArray(arr)) {
        return 'invalid input'
    }
    const unique =[];
    for(const item of arr){
        if (item >=0 || item <0  ) {
            unique.push(item); 
        }
        
    }
    return unique;
}

const arr= [ 1, 12,NaN, 0, -1, undefined, 'uy','heloooo'];
console.log(deleteInvalids(arr));

console.log(deleteInvalids('{jijijij}'));

