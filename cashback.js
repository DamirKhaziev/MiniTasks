let purchase1 = {
    category: 'apteca',
    price: 3000
}
let purchase2 = {
    category: 'food',
    price: 1000
}
let purchase3 = {
    category: 'car',
    price: 1000000
}
let purchases = [purchase1, purchase2, purchase3]
function cashback (purchases) {
    let cashbackResult = 0

    for (let item of purchases){
        if (item.category === 'apteca') {
            cashbackResult = cashbackResult+item.price*0.3
        }
        else if (item.category === 'food') {
            cashbackResult = cashbackResult+item.price*0.05
        }
        else if (item.category === 'car') {
            cashbackResult = cashbackResult+item.price*0.01
        }
    }
    console.log (cashbackResult)
}
 cashback (purchases)