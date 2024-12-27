function monthlySalary(arr, livingCost) {



    let finalIncome = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3000) {
            const tk = arr[i] - (arr[i] * 20 / 100);
            console.log(tk);

            finalIncome.push(tk)

        } else {
            // console.log(arr[i]);

            finalIncome.push(arr[i])

        }
    }
    console.log(finalIncome);

    let sum = 0;
    for (let item of finalIncome) {
        sum += item
        // console.log(sum);

    }
    console.log('total income money:', sum);


     savings = sum - livingCost;
    console.log('saving is :', savings)

    if (savings < 0) {
        return 'earn more'
        console.log('earn more');

    } else if (savings > 0) {
        return savings
        console.log("total savings:", savings);


    }
    

}

const arr = [2000, 4000, 500, 24000, 560, 1000, 3400]
const cost = 40000;
monthlySalary(arr, cost)
console.log(monthlySalary(arr,cost));
