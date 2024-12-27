function monthlySalary(arr, livingCost) {
    
    // let finalIncome=[]
    // for(let item of arr){
    //     if (item>=3000) {
    //         const extra= item - (item * 20/100);
    //         finalIncome.push(extra)
    //     }else{

    //     }
    // }
    // console.log(finalIncome);
    
    let finalIncome=[]
    for(let i=0; i<arr.length; i++){
        if (arr[i]>3000) {
            const tk= arr[i] - (arr[i]* 20/100);
            console.log(tk);

            finalIncome.push(tk)
            
        }else{
            // console.log(arr[i]);

            finalIncome.push(arr[i])
            
        }
    }
    console.log(finalIncome);

    let sum=0;
    for(let item of finalIncome){
         sum +=item
        // console.log(sum);
       
    }
    console.log('total income money:',sum);
    

    const savings= sum- livingCost;
    console.log('saving is :', savings)
    
    if (savings<0 === true) {
        return 'earn more'
        // console.log('earn more');
        
    }else if(savings>0){
        return savings
        // console.log("total savings:", savings);
        
    }

}

const arr= [2000,4000,500,24000, 560, 1000, 3400]
const cost= 20000;
monthlySalary(arr, cost)