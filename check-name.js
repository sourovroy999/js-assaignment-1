function checkName(nam) {
    if (typeof nam !== 'string') {
        return 'please input valid name'
    }

    else {

        const low = nam.toLowerCase();

        const slices = low.slice(-1);

        if (slices === 'a' || slices === 'e' || slices === 'i' || slices === 'o' || slices === 'u' || slices === 'w' || slices === 'y') {
            return 'good name';
        }
        else{
            return 'bad name';
        }

    }

}



// const arr = ["a", "e", "i", "o", "u", "w", "y"];

// let real = arr[0];

// for (let i = 1; i <= arr.length; i++) {

//     const currentItem = arr[i]

//     if (currentItem = real) {
//         return 'bad data'
//     }
// }


console.log(checkName('heLLoA'));
console.log(checkName('shimul'));
console.log(checkName(34));
