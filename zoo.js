function calculateMoney(ticketNumber){   
    if (ticketNumber <=0) {
        return 'please input positive number'
    }
    const income= (120*ticketNumber) -(500+8*50);
    return income;
}
calculateMoney(60)
console.log(calculateMoney(10));
console.log(calculateMoney(-10));
console.log(calculateMoney(2));
console.log(calculateMoney(1055));
