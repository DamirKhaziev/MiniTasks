const zp = 3000
const dollars = 70
const months = 12
const piter = 62000
function zpYear (zp, dollars, months, piter) {
    let itogZpYear
    itogZpYear = zp*dollars*months+piter*months
    // const itogZpYear = zp*dollars*months
    return (itogZpYear)
}

const result = zpYear(zp, dollars, months, piter)
console.log (result)